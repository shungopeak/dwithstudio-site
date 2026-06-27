"use client";

import { useEffect, useState } from "react";

type Clip = { src: string; poster: string };

const DEFAULT_CLIPS: Clip[] = [
  // AIをイメージした高級ムービー（光の粒子が立ち上がるデジタル空間）
  { src: "/hero-ai.mp4", poster: "/hero-ai-poster.jpg" },
  // WEBマーケティングをイメージしたムービー（分析ダッシュボード／成果グラフ）
  { src: "/hero-marketing.mp4", poster: "/hero-marketing-poster.jpg" },
];

/**
 * ごん次郎風シネマティック・ヒーロー。
 * 「AIを行っている」イメージと「WEBマーケティング」のイメージを
 * クロスフェードで重ねた高級ムービーを全画面背景にし、
 * 大きなステートメントを乗せる。
 */
export function HeroGonshiro({ clips = DEFAULT_CLIPS }: { clips?: Clip[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (clips.length <= 1) return;
    const t = setInterval(() => {
      setActive((i) => (i + 1) % clips.length);
    }, 6000);
    return () => clearInterval(t);
  }, [clips.length]);

  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* 背景：AI × WEBマーケティングの高級ムービーをクロスフェード */}
      <div className="absolute inset-0">
        {clips.map((c, i) => (
          <div
            key={c.src}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={c.poster}
            >
              <source src={c.src} type="video/mp4" />
            </video>
          </div>
        ))}
        {/* 映像を締めるグラデーション暗幕（文字の可読性＋高級感） */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/85 via-[#0a0a0a]/45 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[#0a0a0a]/25" />
      </div>

      {/* 中央のステートメント */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex flex-1 items-center">
          <div className="mx-auto w-full max-w-[1700px] px-5 sm:px-8">
            <p className="mb-6 text-[0.72rem] font-medium uppercase tracking-[0.3em] text-white/60">
              AI Marketing &amp; Creative Studio
            </p>
            <h1 className="text-[clamp(2.6rem,9vw,9rem)] font-black leading-[0.92] tracking-[-0.03em]">
              Create Fun
              <br />
              <span className="text-brand-500">&amp; Grow Hard.</span>
            </h1>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              AIと人のチカラで、WEBマーケティングの土台をつくる。
              <br className="hidden sm:block" />
              集客・制作・発信を一気通貫で。これが、dwith ism。
            </p>
          </div>
        </div>

        {/* 下部バー：いま流している映像のインジケーター＋スクロール誘導 */}
        <div className="mx-auto w-full max-w-[1700px] px-5 pb-8 sm:px-8">
          <div className="flex items-center justify-between gap-6 border-t border-white/15 pt-5">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/55">
                {active === 0 ? "AI Driven" : "Data Marketing"}
              </span>
              <div className="flex items-center gap-1.5">
                {clips.map((c, i) => (
                  <button
                    key={c.src}
                    type="button"
                    aria-label={`映像 ${i + 1}`}
                    onClick={() => setActive(i)}
                    className="h-1 w-8 overflow-hidden rounded-full bg-white/15"
                  >
                    <span
                      className={`block h-full rounded-full bg-brand-500 transition-all duration-500 ${
                        i === active ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
            <a
              href="#works"
              className="group flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white"
            >
              Scroll
              <span className="relative flex h-8 w-px overflow-hidden bg-white/20">
                <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_1.6s_ease-in-out_infinite] bg-brand-500" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
