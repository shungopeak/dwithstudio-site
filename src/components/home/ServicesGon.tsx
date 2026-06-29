import { Reveal } from "./Reveal";
import { services as serviceList } from "@/content/hearing";

// gonshiroトップの「Business」紹介＝4枚のカード構成を踏襲
const cards = [
  {
    no: "01",
    en: "Services",
    ja: "提供サービス",
    desc: "AIマーケ伴走、集客代行、LP・HP制作、EC・会員制、動画・VTuberまで。幅広い領域に取り組んでおります。",
    href: "#service-list",
  },
  {
    no: "02",
    en: "Strength",
    ja: "dwithの強み",
    desc: "現役WEBマーケッター × AIクリエイター × 元アニメ制作。掛け算で「集客できる」状態をつくります。",
    href: "/about",
  },
  {
    no: "03",
    en: "First Visit",
    ja: "はじめての方へ",
    desc: "ご相談からカタチになるまでのプロセスをご案内します。まずは無料相談からお気軽にどうぞ。",
    href: "/contact",
  },
  {
    no: "04",
    en: "Numbers",
    ja: "数字で見る dwith",
    desc: "スピード・対応領域・実績。dwith studio にまつわる様々な数字をご紹介します。",
    href: "/works",
  },
];

export function ServicesGon() {
  return (
    <section
      id="service"
      className="relative overflow-hidden py-16 text-white sm:py-24"
      style={{ background: "linear-gradient(160deg, #fb923c 0%, #f97316 48%, #ea580c 100%)" }}
    >
      {/* 背景の巨大な縁取り文字「Business」 */}
      <div className="pointer-events-none absolute inset-x-0 top-6 z-0 flex justify-center overflow-hidden">
        <p
          className="whitespace-nowrap text-[20vw] font-black leading-none tracking-tight text-transparent"
          style={{ WebkitTextStroke: "2px rgba(255,255,255,0.16)" }}
        >
          Business
        </p>
      </div>

      <div className="relative z-10 mx-auto max-w-[1700px] px-5 sm:px-8">
        {/* 見出し */}
        <Reveal className="text-[0.8rem] font-bold tracking-[0.04em] text-white/85">
          事業紹介 ｜ サービス紹介
        </Reveal>
        <Reveal as="h2" delay={80} className="mt-3 text-[clamp(2.6rem,6vw,4.5rem)] font-black leading-none tracking-tight">
          Business
        </Reveal>
        <Reveal delay={160} className="mt-6 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
          集客・制作・発信をワンストップで。AIと人の手を掛け合わせ、
          ビジネスの「伸びしろ」を最大化します。
        </Reveal>

        {/* 4枚のカード（gonshiro構成） */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.no} delay={i * 90}>
              <a
                href={c.href}
                className="group flex h-full flex-col justify-between rounded-2xl border border-white/25 bg-white/[0.06] p-7 backdrop-blur-sm transition-colors hover:bg-white/[0.14]"
              >
                <div>
                  <span className="font-mono text-xs text-white/60">{c.no}</span>
                  <p className="mt-4 text-2xl font-black tracking-tight">{c.en}</p>
                  <p className="mt-1 text-sm font-bold text-white/85">{c.ja}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/75">{c.desc}</p>
                </div>
                {/* Readmore（枠＋矢印ボックス） */}
                <span className="mt-8 inline-flex items-stretch self-start">
                  <span className="flex items-center border-2 border-white/70 px-5 py-2.5 text-xs font-bold tracking-[0.15em] transition-colors group-hover:bg-white group-hover:text-brand-600">
                    Readmore
                  </span>
                  <span className="flex w-10 items-center justify-center border-2 border-l-0 border-white/70 transition-colors group-hover:bg-white group-hover:text-brand-600">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      {/* サービス詳細リスト（Servicesカードの着地先） */}
      <div id="service-list" className="relative z-10 mx-auto mt-16 max-w-[1700px] scroll-mt-24 px-5 sm:px-8">
        <Reveal as="h3" className="text-[clamp(1.6rem,4vw,3rem)] font-black leading-[1.05] tracking-[-0.02em]">
          できることを、掛け合わせる。
        </Reveal>
        <div className="mt-12 border-t border-white/25">
          {serviceList.map((s, i) => (
            <Reveal key={s.no} delay={(i % 4) * 70}>
              <a
                href="/service"
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-white/25 py-6 transition-colors hover:bg-white/10 sm:gap-10 sm:py-7"
              >
                <span className="font-mono text-sm text-white/70">{s.no}</span>
                <div className="min-w-0">
                  <p className="text-lg font-black tracking-tight sm:text-2xl">{s.title}</p>
                  <p className="mt-1 hidden text-xs uppercase tracking-[0.2em] text-white/70 sm:block">
                    {s.en} — {s.desc}
                  </p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/50 transition-all duration-300 group-hover:bg-white group-hover:text-brand-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H8M17 7V16" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
