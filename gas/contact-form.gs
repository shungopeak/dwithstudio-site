/**
 * dwith studio お問い合わせフォーム受信用 GAS
 *
 * サイト(/api/contact) から POST された内容を
 *   1. このスプレッドシートの「お問い合わせ」シートに1行追記
 *   2. NOTIFY_TO 宛に Gmail で通知
 * します。設定手順は gas/README.md を参照。
 *
 * スクリプトプロパティ（プロジェクトの設定 → スクリプト プロパティ）:
 *   SECRET    … Vercel の CONTACT_GAS_SECRET と同じ文字列（必須）
 *   NOTIFY_TO … 通知先メール（省略時は h_mine@dwith-studio.com）
 */

const SHEET_NAME = "お問い合わせ";
const DEFAULT_NOTIFY_TO = "h_mine@dwith-studio.com";
const HEADERS = ["受信日時", "お名前", "会社・店舗名", "メール", "電話", "ご相談内容", "対応状況"];

function doPost(e) {
  try {
    const props = PropertiesService.getScriptProperties();
    const secret = props.getProperty("SECRET");
    const data = JSON.parse((e && e.postData && e.postData.contents) || "{}");

    if (!secret || data.secret !== secret) {
      return json_({ ok: false, error: "unauthorized" });
    }

    const name = str_(data.name, 100);
    const company = str_(data.company, 200) || "（未記入）";
    const email = str_(data.email, 254);
    const phone = str_(data.phone, 50) || "（未記入）";
    const message = str_(data.message, 5000);
    if (!name || !email || !message) {
      return json_({ ok: false, error: "missing fields" });
    }

    // 1. スプレッドシートに記録
    const sheet = getSheet_();
    sheet.appendRow([new Date(), name, company, email, phone, message, "未対応"].map(safeCell_));

    // 2. Gmail で通知（返信ボタンでそのままお客様に返信できる）
    const to = props.getProperty("NOTIFY_TO") || DEFAULT_NOTIFY_TO;
    const body = [
      "サイトからお問い合わせがありました。",
      "",
      "お名前: " + name,
      "会社・店舗名: " + company,
      "メール: " + email,
      "電話: " + phone,
      "",
      "ご相談内容:",
      message,
      "",
      "---",
      "一覧: " + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
    ].join("\n");
    MailApp.sendEmail({
      to: to,
      replyTo: email,
      name: "dwith studio サイト",
      subject: "【お問い合わせ】" + name + " 様（" + company + "）",
      body: body,
    });

    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: String(err) });
  }
}

/** 動作確認用：エディタで実行すると通知メールとシート追記が1件届く */
function testPost() {
  const secret = PropertiesService.getScriptProperties().getProperty("SECRET");
  const res = doPost({
    postData: {
      contents: JSON.stringify({
        secret: secret,
        name: "テスト 太郎",
        company: "テスト株式会社",
        email: "test@example.com",
        phone: "",
        message: "GASの動作確認です。",
      }),
    },
  });
  console.log(res.getContent());
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
  }
  return sheet;
}

function str_(v, max) {
  return String(v == null ? "" : v).trim().slice(0, max);
}

// = + - @ で始まる値は数式として解釈されないよう先頭に ' を付ける
function safeCell_(v) {
  return typeof v === "string" && /^[=+\-@]/.test(v) ? "'" + v : v;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
