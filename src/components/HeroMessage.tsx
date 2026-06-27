import { Button } from "./ui";

export function HeroMessage() {
  return (
    <section className="relative flex min-h-[88vh] flex-col justify-center overflow-hidden bg-[#0a0b12] px-6 py-20 sm:px-12 lg:min-h-screen">
      <div className="animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-accent-400" />
          デジタル化・AI導入補助金2026 対応
        </span>

        <h1 className="mt-6 text-3xl font-black leading-[1.3] tracking-tight text-white sm:text-[2.75rem]">
          AIと人のチカラで
          <br />
          <span className="bg-gradient-to-r from-brand-500 via-accent-400 to-brand-500 bg-clip-text text-transparent">
            WEBマーケティングの土台
          </span>
          <br />
          を作る。
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
          「何から始めればいいか分からない」を、まるごと解決。
          SEO・SNS・広告・LINE構築から、サイト・アプリ制作まで一気通貫でサポートします。
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/#contact" className="px-8 py-4 text-base">
            無料でAI集客診断を受ける
          </Button>
          <Button
            href="/#services"
            variant="secondary"
            className="px-8 py-4 text-base"
          >
            サービスを見る
          </Button>
        </div>
      </div>

      <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-7">
        {[
          { n: "最短3日", l: "で施策スタート" },
          { n: "1/3", l: "の時間とコスト" },
          { n: "¥0", l: "から始める診断" },
        ].map((s) => (
          <div key={s.l}>
            <dt className="text-xl font-black text-white sm:text-2xl">{s.n}</dt>
            <dd className="mt-1 text-xs text-white/55">{s.l}</dd>
          </div>
        ))}
      </dl>

      {/* スクロールキュー */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
