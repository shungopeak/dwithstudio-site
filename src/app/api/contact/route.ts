import { site } from "@/lib/site";

export const dynamic = "force-dynamic";

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
  company_website?: string; // ハニーポット（人間は空のはず）
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function escapeHtml(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return Response.json({ error: "不正なリクエストです" }, { status: 400 });
  }

  // ボット対策：ハニーポットに入力があれば成功を装って破棄
  if (data.company_website && data.company_website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const message = (data.message || "").trim();

  if (!name || !email || !message) {
    return Response.json(
      { error: "お名前・メール・ご相談内容は必須です" },
      { status: 400 },
    );
  }
  if (!isEmail(email)) {
    return Response.json(
      { error: "メールアドレスの形式が正しくありません" },
      { status: 400 },
    );
  }

  const company = (data.company || "").trim() || "（未記入）";
  const phone = (data.phone || "").trim() || "（未記入）";

  const subject = `【お問い合わせ】${name} 様（${company}）`;
  const text = [
    "サイトからお問い合わせがありました。",
    "",
    `お名前: ${name}`,
    `会社・店舗名: ${company}`,
    `メール: ${email}`,
    `電話: ${phone}`,
    "",
    "ご相談内容:",
    message,
  ].join("\n");

  const html = `
    <h2>サイトからお問い合わせがありました</h2>
    <p><strong>お名前:</strong> ${escapeHtml(name)}</p>
    <p><strong>会社・店舗名:</strong> ${escapeHtml(company)}</p>
    <p><strong>メール:</strong> ${escapeHtml(email)}</p>
    <p><strong>電話:</strong> ${escapeHtml(phone)}</p>
    <p><strong>ご相談内容:</strong></p>
    <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
  `;

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || site.email;
  // Resendで認証済みドメインのアドレスに置き換えてください（未設定時は検証用の既定値）
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  // メール送信プロバイダ（Resend）が設定されていれば送信
  if (resendKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `${site.name} <${fromEmail}>`,
          to: [toEmail],
          reply_to: email,
          subject,
          text,
          html,
        }),
      });
      if (!res.ok) {
        const detail = await res.text();
        console.error("Resend error:", detail);
        return Response.json(
          { error: "メール送信に失敗しました" },
          { status: 502 },
        );
      }
      return Response.json({ ok: true });
    } catch (err) {
      console.error("Contact send error:", err);
      return Response.json(
        { error: "メール送信に失敗しました" },
        { status: 500 },
      );
    }
  }

  // 未設定時：サーバーログに出力して成功を返す（開発・初期運用向け）
  console.log("=== 新しいお問い合わせ（メール未設定のためログ出力）===");
  console.log(text);
  return Response.json({ ok: true });
}
