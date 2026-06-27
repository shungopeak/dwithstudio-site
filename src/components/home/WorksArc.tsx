import type { WorkItem } from "@/lib/works";

// 高さを揃え、横幅は画像なり（＝それぞれのサイズ／比率のまま）で横に流すカード
function Card({ item }: { item: WorkItem }) {
  return (
    <a
      href="/#contact"
      className="group relative block h-full shrink-0 overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_rgba(120,60,10,0.22)] ring-1 ring-black/5"
    >
      {item.type === "video" ? (
        <video className="block h-full w-auto transition-transform duration-[900ms] ease-out group-hover:scale-105" autoPlay muted loop playsInline>
          <source src={item.src} />
        </video>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.src} alt={item.catJa} loading="lazy" className="block h-full w-auto transition-transform duration-[900ms] ease-out group-hover:scale-105" />
      )}
    </a>
  );
}

export function WorksArc({ items }: { items: WorkItem[] }) {
  const list = items.length ? items : [];
  // シームレスにループさせるため2セット並べる
  const loop = [...list, ...list];

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* 両端をふんわりフェード */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#fdf7f0] to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#fdf7f0] to-transparent sm:w-32" />

      {/* 横に流れる大きめカード（hoverで一時停止） */}
      <div className="marquee-track gap-6 sm:gap-8" style={{ height: "clamp(240px, 30vw, 400px)" }}>
        {loop.map((w, i) => (
          <Card key={i} item={w} />
        ))}
      </div>
    </div>
  );
}
