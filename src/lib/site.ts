// サイト全体で使う基本情報。ここを書き換えるだけで全ページに反映されます。
export const site = {
  name: "dwith",
  nameJa: "ディーウィズ",
  // 本番ドメインが決まったら書き換えてください（SEO・OGP・sitemapに使用）
  url: "https://dwithstudio.jp",
  tagline: "AIと人のチカラでWEBマーケティングの土台を作る！",
  description:
    "現役WebマーケッターによるAI集客パートナー。集客できるサイト・アプリ制作から、SEO・SNS・広告・LINE構築まで一気通貫。補助金（デジタル化・AI導入補助金2026）にも対応。まずは無料AI集客診断から。",
  email: "h_mine@dwith-studio.com",
  // 任意：LINEやSNSのURLが決まったら入れてください
  lineUrl: "",
  twitterUrl: "",
  instagramUrl: "",
} as const;

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "サービス", href: "/#services" },
  { label: "選ばれる理由", href: "/#why" },
  { label: "プロフィール", href: "/#about" },
  { label: "できること", href: "/#cases" },
  { label: "ご相談の流れ", href: "/#flow" },
  { label: "コラム", href: "/blog" },
  { label: "よくある質問", href: "/#faq" },
];
