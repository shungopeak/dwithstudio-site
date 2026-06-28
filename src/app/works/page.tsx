import type { Metadata } from "next";
import { HeaderSturdy } from "@/components/home/HeaderSturdy";
import { FooterDark } from "@/components/home/FooterDark";
import { PageHero } from "@/components/home/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import { WorksGallery } from "@/components/home/WorksGallery";
import { getWorkItems } from "@/lib/works";

export const metadata: Metadata = {
  title: "制作実績｜Works",
  description:
    "dwith studio の制作実績一覧。LP・ホームページ、広告バナー、配信サムネ、ヘッダー、ミュージックビデオ、AIクリエイティブまで。AIと現役マーケッターの力で手がけた幅広いクリエイティブをご紹介します。",
  alternates: { canonical: "/works" },
};

export default function WorksPage() {
  const items = getWorkItems();

  return (
    <>
      <HeaderSturdy />
      <main className="bg-[#fdf7f0]">
        <PageHero
          eyebrow="Works"
          title={
            <>
              手がけた、
              <br className="sm:hidden" />
              届けるためのカタチ。
            </>
          }
          word="Works"
          description="VTuber・配信・LP・広告・ロゴ・販促まで。AIと現役マーケッターの力で、幅広いクリエイティブを形にしてきました。気になる制作はそのままご相談いただけます。"
        />

        <section className="py-16 sm:py-24">
          <WorksGallery items={items} />
        </section>

        <CtaBand />
      </main>
      <FooterDark />
    </>
  );
}
