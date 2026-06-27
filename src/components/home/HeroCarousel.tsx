"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const slides = [
  { img: "/services/svc-speed.webp", tag: "表示速度改善・リニューアル" },
  { img: "/services/svc-reservation.webp", tag: "予約システム付きサイト" },
  { img: "/services/svc-lp.webp", tag: "GSAPアニメーション LP" },
  { img: "/services/svc-membership.webp", tag: "会員制サイト構築" },
  { img: "/services/svc-ec.webp", tag: "Stripe連携 ECサイト" },
];

export function HeroCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  const goTo = (i: number) => {
    const n = slides.length;
    const next = (i + n) % n;
    setIndex(next);
    const track = trackRef.current;
    const el = track?.children[next] as HTMLElement | undefined;
    if (el) el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => goTo(index + 1), 4500);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, playing]);

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#0d0e10] pt-24 pb-16">
      {/* 背景の光 */}
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]" />

      {/* キャッチコピー */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-400">
          AI × WEB MARKETING STUDIO
        </p>
        <h1 className="mt-4 text-[clamp(2.2rem,6vw,5rem)] font-black leading-[1.1] tracking-tight text-white">
          さぁ、
          <span className="bg-gradient-to-r from-brand-400 via-accent-400 to-brand-500 bg-clip-text text-transparent">
            “集客できる”
          </span>
          を掴もう。
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
          AIと人のチカラで、WEBマーケティングの土台を作る。
          集客できるサイト・アプリを、企画から運用まで一気通貫で。
        </p>
      </div>

      {/* カルーセル */}
      <div className="relative z-10 mt-10">
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-[18vw] sm:gap-6 sm:px-[24vw]"
        >
          {slides.map((s, i) => (
            <button
              key={s.img}
              onClick={() => goTo(i)}
              className={`group relative aspect-square w-[62vw] max-w-[640px] shrink-0 snap-center overflow-hidden rounded-2xl ring-1 transition-all duration-500 sm:w-[52vw] ${
                i === index ? "ring-brand-500/60 opacity-100" : "opacity-50 ring-white/10 hover:opacity-80"
              }`}
            >
              <Image
                src={s.img}
                alt={s.tag}
                fill
                sizes="(max-width:640px) 62vw, 52vw"
                className="object-cover"
                priority={i === 0}
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                {s.tag}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* コントロール */}
      <div className="relative z-10 mx-auto mt-8 flex w-full max-w-[1600px] items-center justify-center gap-4 px-5 sm:px-8">
        <button
          onClick={() => goTo(index - 1)}
          aria-label="前へ"
          className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => setPlaying((v) => !v)}
          aria-label={playing ? "停止" : "再生"}
          className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
        <button
          onClick={() => goTo(index + 1)}
          aria-label="次へ"
          className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="ml-3 flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`スライド${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-7 bg-brand-500" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
