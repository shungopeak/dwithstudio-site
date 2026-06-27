# dwith studio — AI集客パートナー サイト

中小企業・店舗向け「AI集客」サービスの受注用ホームページです。
Next.js (App Router) + TypeScript + Tailwind CSS v4 で構築しています。

## 開発（ローカルで動かす）

```bash
npm install        # 初回のみ
npm run dev        # http://localhost:3000 が立ち上がります
```

## 本番ビルド

```bash
npm run build
npm run start
```

## よく編集する場所

| 編集したいもの | ファイル |
| --- | --- |
| 会社名・キャッチコピー・連絡先・メニュー | `src/lib/site.ts` |
| トップの各セクション内容 | `src/components/` 配下（Hero / Services / Pricing など） |
| 料金プラン | `src/components/Pricing.tsx` |
| 実績・事例 | `src/components/Cases.tsx` |
| よくある質問 | `src/components/Faq.tsx` |
| ブログ記事の追加 | `src/lib/posts.ts` の `posts` 配列に足すだけ |
| 配色（ブランドカラー） | `src/app/globals.css` の `@theme` |

## お問い合わせフォームのメール通知

`.env.example` を `.env.local` にコピーし、[Resend](https://resend.com) のAPIキー等を設定すると、
フォーム送信時にメールが届きます。**未設定でもフォーム自体は動作**し、内容はサーバーログに出力されます。

```bash
cp .env.example .env.local   # 値を埋める
```

## デプロイ（公開）

[Vercel](https://vercel.com) が最も簡単です。

1. このフォルダを GitHub リポジトリにプッシュ
2. Vercel で「New Project」→ リポジトリを選択
3. 環境変数（`RESEND_API_KEY` など）を設定して Deploy
4. 独自ドメインを設定し、`src/lib/site.ts` の `url` を本番ドメインに更新

## SEO

- `sitemap.xml` / `robots.txt` は自動生成されます（`src/app/sitemap.ts`, `robots.ts`）
- 各ページのメタ情報・OGPは `layout.tsx` と各ページの `metadata` で設定済み
- ブログ記事を増やすほど、検索からの流入が育ちます（`src/lib/posts.ts`）
