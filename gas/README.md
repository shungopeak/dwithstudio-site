# お問い合わせフォーム × GAS 設定手順

フォーム送信 → Vercel の `/api/contact` → GAS → スプレッドシートに記録 ＋ Gmail で通知。

## 1. スプレッドシートと GAS を作る

1. Google ドライブで新しいスプレッドシートを作成（名前は例：`dwith studio お問い合わせ`）
2. メニュー「拡張機能」→「Apps Script」
3. 最初からある `コード.gs` の中身を全部消し、`gas/contact-form.gs` の中身を貼り付けて保存

## 2. 合言葉（SECRET）を設定

1. エディタ上部の関数選択で `setupSecret` を選び「実行」（初回は権限の許可が必要。ポップアップがブロックされたら許可する）
2. 実行ログに出た値が `SECRET`（「プロジェクトの設定」→「スクリプト プロパティ」でも確認可）
3. （任意）通知先を変えたい場合は、スクリプト プロパティに `NOTIFY_TO` を追加

## 3. 動作テスト

1. エディタ上部の関数選択で `testPost` を選び「実行」
2. シートに「お問い合わせ」タブができてテスト行が入り、通知メールが届けばOK

## 4. Web アプリとして公開

1. 右上「デプロイ」→「新しいデプロイ」→ 種類「ウェブアプリ」
2. 次のユーザーとして実行：**自分** ／ アクセスできるユーザー：**全員**
3. 「デプロイ」→ 表示された **ウェブアプリ URL**（`https://script.google.com/macros/s/…/exec`）をコピー

> コードを修正したときは「デプロイを管理」→ 鉛筆 → バージョン「新バージョン」で更新（URLは変わりません）。

## 5. Vercel に設定

Vercel → dwithstudio-site → Settings → Environment Variables に追加（Key＝名前、Value＝値。逆にしない）:

| Key | Value |
|-----|-------|
| `CONTACT_GAS_URL` | 手順4のURL |
| `CONTACT_GAS_SECRET` | 手順2の SECRET と同じ文字列 |

追加後、Deployments → 最新 → 「Redeploy」で反映。
