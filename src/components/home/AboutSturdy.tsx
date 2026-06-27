import { Reveal } from "./Reveal";

const strengths = [
  { k: "AI Creator", v: "生成AIを実務に落とし込む制作力" },
  { k: "Web Marketer", v: "現役で数字を追うマーケ視点" },
  { k: "Ex-Anime", v: "元アニメ制作者の表現とこだわり" },
];

const roster = [
  "VTuber",
  "音楽 / 歌ってみた",
  "コンカフェ",
  "美容 / サロン",
  "スクール / 教育",
  "EC / 物販",
  "飲食 / 店舗",
  "イベント",
  "士業 / BtoB",
  "クリエイター",
];

export function AboutSturdy() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-24 text-white sm:py-36">
      <div className="mx-auto max-w-[1700px] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* 左：肖像 */}
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#141414] ring-1 ring-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="シュンゴー / dwith studio"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0a0a0a] to-transparent p-6">
                <p className="text-lg font-bold">シュンゴー</p>
                <p className="text-xs text-white/55">Founder / dwith studio</p>
              </div>
            </div>
          </Reveal>

          {/* 右：テキスト */}
          <div>
            <Reveal className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-brand-500">
              ( About )
            </Reveal>
            <Reveal as="h2" delay={80} className="mt-5 text-[clamp(1.8rem,4vw,3rem)] font-black leading-[1.1] tracking-[-0.02em]">
              AIを、<span className="text-brand-500">武器</span>に変える。<br />
              人の手で、<span className="text-brand-500">成果</span>に変える。
            </Reveal>
            <Reveal delay={160} className="mt-6 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
              はじめまして、現役WEBマーケッターのシュンゴーです。AIクリエイターとして、
              そして元アニメ制作者としての表現力を掛け合わせ、「集客できる」状態を
              つくることに集中しています。AIで速く・安く、人の手で確かに。
              dwith studio は、あなたのビジネスの隣で動く伴走パートナーです。
            </Reveal>

            <div className="mt-10 space-y-px">
              {strengths.map((s, i) => (
                <Reveal key={s.k} delay={220 + i * 60}>
                  <div className="flex flex-col gap-1 border-t border-white/10 py-5 sm:flex-row sm:items-baseline sm:gap-8">
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-brand-500 sm:w-40">
                      {s.k}
                    </span>
                    <span className="text-sm text-white/75 sm:text-base">{s.v}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* 対応ジャンルのマーキー風羅列 */}
        <Reveal delay={120} className="mt-20">
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-white/40">
            Fields we work in
          </p>
          <div className="mt-6 flex flex-wrap gap-x-3 gap-y-3">
            {roster.map((r) => (
              <span
                key={r}
                className="rounded-full border border-white/12 px-4 py-2 text-sm text-white/70 transition-colors hover:border-brand-500 hover:text-white"
              >
                {r}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
