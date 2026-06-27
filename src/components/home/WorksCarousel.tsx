"use client";

import { useRef, useState } from "react";
import type { WorkItem } from "@/lib/works";

/**
 * ごん次郎風の「制作実績」横スクロール・リール。
 * 厳選した作品を横一列で見せ、矢印／スワイプで送る。
 */
export function WorksCarousel({ items }: { items: WorkItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  const scrollByCard = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.6;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 1;
    setIdx(Math.round(track.scrollLeft / step));
  };

  return (
    <div className="mt-14">
      {/* 操作バー：件数＋矢印 */}
      <div className="mx-auto mb-8 flex max-w-[1700px] items-center justify-between px-5 sm:px-8">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#1b1208]/55">
          {String(Math.min(idx + 1, items.length)).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="前へ"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1b1208]/20 text-[#1b1208]/70 transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="次へ"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1b1208]/20 text-[#1b1208]/70 transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      {/* 横スクロール・トラック */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-pl-5 px-5 pb-2 sm:scroll-pl-8 sm:px-8"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((w, i) => (
          <a
            key={w.src}
            data-card
            href="/#contact"
            className="group w-[82vw] shrink-0 snap-start sm:w-[52vw] lg:w-[40vw] xl:w-[34vw]"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-white shadow-[0_18px_50px_rgba(120,60,10,0.15)] ring-1 ring-black/5">
              {w.type === "video" ? (
                <video className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]" autoPlay muted loop playsInline>
                  <source src={w.src} />
                </video>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={w.src} alt={w.catJa} loading="lazy" className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]" />
              )}
              <span className="absolute left-4 top-4 rounded-full bg-white/85 px-2 py-1 font-mono text-xs text-[#1b1208]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {/* キャプション（カテゴリ＝タイトル扱い） */}
            <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-black/10 pt-4">
              <span className="text-base font-bold tracking-tight text-[#1b1208] transition-colors group-hover:text-brand-600">
                {w.catJa}
              </span>
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[#1b1208]/40">
                {w.catEn} / 2025
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
