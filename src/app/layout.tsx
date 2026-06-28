import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Analytics, GtmNoScript } from "@/components/Analytics";

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} studio`,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: `${site.name} studio`,
  alternates: { canonical: "/" },
  category: "business",
  formatDetection: { telephone: false, email: false, address: false },
  keywords: [
    "AI集客",
    "AIマーケティング",
    "中小企業 AI 導入",
    "ホームページ制作",
    "LP制作",
    "SEO",
    "補助金",
    "集客代行",
    "dwith studio",
    "ディーウィズ",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: site.url,
    siteName: `${site.name} studio`,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: `${site.name} studio` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: `${site.name} studio`,
        url: site.url,
        email: site.email,
        logo: `${site.url}/og.png`,
        description: site.description,
        sameAs: [site.twitterUrl, site.instagramUrl, site.lineUrl].filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: `${site.name} | ${site.tagline}`,
        description: site.description,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "ja-JP",
      },
    ],
  };

  return (
    <html lang="ja" className={`${zenKaku.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <GtmNoScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
