import { Reveal } from "./Reveal";

export function HeroSturdy() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#0a0a0a] pb-14 pt-32 text-white">
      {/* 背景動画（グラフィックモーション） */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-banner.webp"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      {/* 暗幕グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/30 to-[#0a0a0a]" />
      <div className="pointer-events-none absolute -left-1/4 top-1/4 h-[40rem] w-[40rem] rounded-full bg-brand-600/20 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-[1700px] px-5 sm:px-8">
        {/* 上部メタラベル */}
        <Reveal
          as="div"
          className="mb-10 flex flex-wrap items-center gap-x-8 gap-y-2 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-white/45"
        >
          <span>AI Marketing Studio</span>
          <span className="hidden sm:inline">/</span>
          <span>Based in Japan</span>
          <span className="hidden sm:inline">/</span>
          <span>Est. 2026</span>
        </Reveal>

        {/* 巨大ステートメント（行ごとに立ち上がる） */}
        <h1 className="text-[clamp(2.4rem,7.5vw,7rem)] font-black leading-[0.98] tracking-[-0.03em]">
          <Reveal mask delay={0}>
            <span className="text-white">AIと人のチカラで、</span>
          </Reveal>
          <Reveal mask delay={120}>
            <span className="text-white/55">WEBマーケティングの</span>
          </Reveal>
          <Reveal mask delay={240}>
            <span className="text-brand-500">土台</span>
            <span className="text-white">を、つくる。</span>
          </Reveal>
        </h1>

        {/* 下部：説明＋スクロールキュー */}
        <div className="mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <Reveal delay={360} className="max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
            現役WEBマーケッター × AIクリエイター。集客・制作・発信までを
            一気通貫で。中小企業と店舗のための、AI時代の伴走パートナー。
          </Reveal>

          <Reveal delay={480} className="flex items-center gap-3 text-[0.72rem] font-medium uppercase tracking-[0.22em] text-white/45">
            <span className="inline-block h-10 w-px animate-pulse bg-white/40" />
            Scroll to explore
          </Reveal>
        </div>
      </div>
    </section>
  );
}
