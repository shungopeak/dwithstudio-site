import { HeaderSturdy } from "@/components/home/HeaderSturdy";
import { HeroIntro } from "@/components/home/HeroIntro";
import { AboutGon } from "@/components/home/AboutGon";
import { WorksSturdy } from "@/components/home/WorksSturdy";
import { ServicesGon } from "@/components/home/ServicesGon";
import { News } from "@/components/home/News";
import { FooterDark } from "@/components/home/FooterDark";
import { Contact } from "@/components/Contact";
import { site } from "@/lib/site";
import { getWorkItems } from "@/lib/works";

export default function Home() {
  // FVオープニングで奥から飛び出す作品画像（動画は除外・たくさん使う）
  const introImages = getWorkItems()
    .filter((w) => w.type === "image" && !w.src.toLowerCase().endsWith(".svg"))
    .map((w) => w.src);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    areaServed: "JP",
    serviceType: "AI集客・AIマーケティング支援",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeaderSturdy />
      <main className="bg-[#fdf7f0]">
        <HeroIntro images={introImages} />
        <News />
        <AboutGon />
        <WorksSturdy />
        <ServicesGon />
        <Contact />
      </main>
      <FooterDark />
    </>
  );
}
