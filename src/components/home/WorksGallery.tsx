"use client";

import { useMemo, useState } from "react";
import type { WorkItem } from "@/lib/works";
import { Reveal } from "./Reveal";

/**
 * 実績一覧。カテゴリで絞り込み、画像はそれぞれのサイズ（比率）のまま
 * マソンリー（CSS columns）で敷き詰める。
 */
export function WorksGallery({ items }: { items: WorkItem[] }) {
  const categories = useMemo(() => {
    const seen: { ja: string; en: string }[] = [];
    for (const it of items) {
      if (!seen.some((c) => c.ja === it.catJa)) seen.push({ ja: it.catJa, en: it.catEn });
    }
    return seen;
  }, [items]);

  const [active, setActive] = useState<string>("ALL");
  const filtered = active === "ALL" ? items : items.filter((i) => i.catJa === active);

  return (
    <div className="mx-auto max-w-[1700px] px-5 sm:px-8">
      {/* フィルター */}
      <div className="flex flex-wrap gap-2.5">
        <Chip label={`すべて (${items.length})`} active={active === "ALL"} onClick={() => setActive("ALL")} />
        {categories.map((c) => (
          <Chip
            key={c.ja}
            label={`${c.ja} (${items.filter((i) => i.catJa === c.ja).length})`}
            active={active === c.ja}
            onClick={() => setActive(c.ja)}
          />
        ))}
      </div>

      {/* マソンリー */}
      <div className="mt-10 [column-gap:1.25rem] columns-2 sm:columns-3 lg:columns-4">
        {filtered.map((w, i) => {
          const external = !!w.url;
          return (
            <Reveal
              key={`${w.src}-${i}`}
              pop
              delay={(i % 8) * 60}
              className="mb-5 break-inside-avoid"
            >
            <a
              href={w.url ?? "/contact"}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group block overflow-hidden rounded-xl bg-white shadow-[0_14px_40px_rgba(120,60,10,0.14)] ring-1 ring-black/5"
            >
              <div className="overflow-hidden">
                {w.type === "video" ? (
                  <video className="block w-full transition-transform duration-700 ease-out group-hover:scale-105" autoPlay muted loop playsInline>
                    <source src={w.src} />
                  </video>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={w.src}
                    alt={w.title ?? w.catJa}
                    loading="lazy"
                    className="block w-full transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
              </div>
              <div className="px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-bold text-[#1b1208] transition-colors group-hover:text-brand-600">
                    {w.title ?? w.catJa}
                  </span>
                  <span className="shrink-0 font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[#1b1208]/40">
                    {w.year ?? w.catEn}
                  </span>
                </div>
                {w.client && (
                  <p className="mt-1 text-xs font-medium text-[#1b1208]/55">{w.client}</p>
                )}
                {w.summary && (
                  <p className="mt-2 text-xs leading-relaxed text-[#5b4636]">{w.summary}</p>
                )}
                {w.result && (
                  <p className="mt-2 inline-block rounded-full bg-brand-500/12 px-2.5 py-1 text-[0.7rem] font-bold text-brand-600">
                    {w.result}
                  </p>
                )}
              </div>
            </a>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
        active
          ? "bg-brand-500 text-white"
          : "bg-white text-[#1b1208]/70 ring-1 ring-black/10 hover:bg-brand-50 hover:text-brand-600"
      }`}
    >
      {label}
    </button>
  );
}
