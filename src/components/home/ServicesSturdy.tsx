import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./Reveal";

const services = [
  {
    no: "01",
    title: "AIマーケ伴走",
    en: "Creative Direction",
    desc: "戦略設計から実行まで。AIを武器に、集客の仕組みを一緒に作り続けます。",
  },
  {
    no: "02",
    title: "AI集客代行",
    en: "Growth Marketing",
    desc: "SEO・SNS・広告・LINEをAIで量産し、プロが編集。発信を止めずに回します。",
  },
  {
    no: "03",
    title: "LP・HP制作",
    en: "Web Design",
    desc: "成果が出るLP・コーポレートサイトを、AI×プロの編集で高速・低コストに。",
  },
  {
    no: "04",
    title: "EC構築",
    en: "E-Commerce",
    desc: "Stripe連携の本格EC。Shopify不要・月額を抑えてD2C／サブスクに対応。",
  },
  {
    no: "05",
    title: "会員制サイト",
    en: "Membership",
    desc: "オンラインサロン・スクールに最適。企画から運用サポートまで構築します。",
  },
  {
    no: "06",
    title: "動画・MV制作",
    en: "Video / MV",
    desc: "PR動画・ミュージックビデオ・歌ってみた映像まで。元アニメ制作の表現力で。",
  },
  {
    no: "07",
    title: "VTuber・配信",
    en: "VTuber / Live",
    desc: "キャラクター制作・配信オーバーレイ・サムネまで、二次元コンテンツを総合支援。",
  },
  {
    no: "08",
    title: "AI研修",
    en: "AI Training",
    desc: "ChatGPT等の実践研修で、社員や個人が自走できるチームへ。丸投げで終わらせない。",
  },
];

export function ServicesSturdy() {
  return (
    <section id="service" className="bg-[#0a0a0a] py-24 text-white sm:py-36">
      <div className="mx-auto max-w-[1700px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-brand-500">
              ( Services )
            </Reveal>
            <Reveal as="h2" delay={80} className="mt-5 max-w-2xl text-[clamp(1.9rem,4.5vw,3.4rem)] font-black leading-[1.05] tracking-[-0.02em]">
              できることを、<br className="hidden sm:block" />掛け合わせる。
            </Reveal>
          </div>
          <Reveal delay={160} className="max-w-sm text-sm leading-relaxed text-white/55">
            AI活用と各サービスを掛け合わせ、集客の創出から品質向上、
            届ける仕組みづくりまで一気通貫で実現します。
          </Reveal>
        </div>

        <div className="mt-16 border-t border-white/10">
          {services.map((s, i) => (
            <Reveal key={s.no} delay={i * 40}>
              <Link
                href="/#contact"
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-white/10 py-7 transition-colors hover:bg-white/[0.03] sm:gap-10 sm:py-9"
              >
                <span className="font-mono text-xs text-white/35 sm:text-sm">{s.no}</span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-xl font-bold tracking-tight transition-colors group-hover:text-brand-500 sm:text-3xl">
                      {s.title}
                    </h3>
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-white/35">
                      {s.en}
                    </span>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/50">
                    {s.desc}
                  </p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 text-white/60 transition-all duration-300 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-[#0a0a0a] sm:h-12 sm:w-12">
                  <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
