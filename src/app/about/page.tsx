import type { Metadata } from "next";
import { HeaderSturdy } from "@/components/home/HeaderSturdy";
import { FooterDark } from "@/components/home/FooterDark";
import { PageHero } from "@/components/home/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import { Reveal } from "@/components/home/Reveal";
import { Voice } from "@/components/home/Voice";
import { site } from "@/lib/site";
import { profile, strengths, company as companyInfo } from "@/content/hearing";

// 会社概要の表（hearing.ts の company を元に、空の項目は自動で省く）
const company: [string, string][] = [
  ["屋号", `${companyInfo.brand}（${companyInfo.brandKana}）`],
  ["代表", companyInfo.founderName],
  ["事業内容", companyInfo.business],
  ["対応エリア", companyInfo.area],
  ...(companyInfo.founded ? ([["設立", companyInfo.founded]] as [string, string][]) : []),
  ...(companyInfo.address ? ([["所在地", companyInfo.address]] as [string, string][]) : []),
  ...(companyInfo.businessHours ? ([["営業時間", companyInfo.businessHours]] as [string, string][]) : []),
  ["お問い合わせ", site.email],
];

export const metadata: Metadata = {
  title: "プロフィール｜About",
  description:
    "dwith studio 代表シュンゴーのプロフィール。現役WEBマーケッター × AIクリエイター × 元アニメ制作。AIで速く・安く、人の手で確かに。集客できる状態をつくる伴走パートナーです。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <HeaderSturdy />
      <main className="bg-[#fdf7f0]">
        <PageHero
          eyebrow="About"
          title={
            <>
              AIを、武器に変える。
              <br />
              人の手で、<span className="text-brand-500">成果</span>に変える。
            </>
          }
          word="About"
          description="AIで速く・安く、人の手で確かに。dwith studio は、あなたのビジネスの隣で動く伴走パートナーです。"
        />

        {/* プロフィール */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto grid max-w-[1100px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1fr]">
            <Reveal>
              <div className="overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_rgba(120,60,10,0.18)] ring-1 ring-black/5">
                <div className="aspect-[4/5] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
                </div>
                <div className="px-6 py-5">
                  <p className="text-lg font-black text-[#1b1208]">{profile.name}</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-brand-600">
                    {profile.role}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h2 className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-black leading-[1.15] tracking-[-0.02em] text-[#1b1208]">
                {profile.headline.split("\n").map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-loose text-[#5b4636] sm:text-base">
                {profile.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* 強み */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1700px] px-5 sm:px-8">
            <Reveal className="text-[0.72rem] font-bold uppercase tracking-[0.3em] text-brand-600">
              ( Strength )
            </Reveal>
            <Reveal as="h2" delay={80} className="mt-4 text-[clamp(1.7rem,4vw,3rem)] font-black tracking-[-0.02em] text-[#1b1208]">
              3つの掛け算
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {strengths.map((s, i) => (
                <Reveal key={s.en} delay={i * 90}>
                  <div className="h-full rounded-2xl bg-[#fdf7f0] p-7">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">{s.en}</p>
                    <h3 className="mt-3 text-lg font-black text-[#1b1208]">{s.ja}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5b4636]">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 会社概要 */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-[900px] px-5 sm:px-8">
            <Reveal className="text-[0.72rem] font-bold uppercase tracking-[0.3em] text-brand-600">
              ( Profile )
            </Reveal>
            <Reveal as="h2" delay={80} className="mt-4 text-[clamp(1.7rem,4vw,3rem)] font-black tracking-[-0.02em] text-[#1b1208]">
              概要
            </Reveal>
            <dl className="mt-10 divide-y divide-black/10 border-y border-black/10">
              {company.map(([k, v]) => (
                <div key={k} className="grid gap-1 py-5 sm:grid-cols-[200px_1fr] sm:gap-6">
                  <dt className="text-sm font-bold text-[#1b1208]/55">{k}</dt>
                  <dd className="text-sm font-medium text-[#1b1208]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* お客様の声（hearing.ts の voices を埋めると表示） */}
        <Voice />

        <CtaBand />
      </main>
      <FooterDark />
    </>
  );
}
