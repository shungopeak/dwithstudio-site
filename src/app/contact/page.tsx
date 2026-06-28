import type { Metadata } from "next";
import { HeaderSturdy } from "@/components/home/HeaderSturdy";
import { FooterDark } from "@/components/home/FooterDark";
import { PageHero } from "@/components/home/PageHero";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "お問い合わせ｜Contact",
  description:
    "dwith studio へのお問い合わせ・無料AI集客診断はこちら。現状のヒアリングから改善提案まで無料。全国オンライン対応。しつこい営業は一切ありません。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <HeaderSturdy />
      <main className="bg-[#fdf7f0]">
        <PageHero
          eyebrow="Contact"
          title={
            <>
              まずは、
              <br className="sm:hidden" />
              話してみませんか？
            </>
          }
          word="Contact"
          description="ご相談・お見積りは無料です。「何から始めればいい？」という段階でも大歓迎。下記フォーム、またはメールからお気軽にどうぞ。"
        />

        <Contact />
      </main>
      <FooterDark />
    </>
  );
}
