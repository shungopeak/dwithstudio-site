"use client";

import { useEffect, useRef } from "react";
import { hero } from "@/content/hearing";

// 決定的な疑似乱数（毎回同じ散らし位置になるように）
function rand(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}
// 巨大「dwith studio ●」を左へ流す1段（丸セパレーター＝丸の感じを採用）
function Band({ delay = "0s", riseDelay = "0s" }: { delay?: string; riseDelay?: string }) {
  return (
    <div className="overflow-hidden">
      <div className="word-rise" style={{ animationDelay: riseDelay }}>
        <div className="hero-marquee" style={{ animationDelay: delay }}>
          {Array.from({ length: 2 }).map((_, g) => (
            <span key={g} className="flex shrink-0 items-center">
              {Array.from({ length: 4 }).map((_, k) => (
                <span
                  key={k}
                  className="flex items-center whitespace-nowrap pr-[0.6em] text-[11vw] font-black leading-[1.12] tracking-tighter text-white"
                >
                  dwith&nbsp;studio
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const smooth = (e0: number, e1: number, x: number) => {
  const t = clamp((x - e0) / (e1 - e0));
  return t * t * (3 - 2 * t);
};

/**
 * FVオープニング（オレンジ・明るめ）。
 * スクロールに連動して奥から多くの写真が飛び出し、最後にコンセプトが着地する。
 */
export function HeroIntro({
  images,
  video = "/hero-ai.mp4",
  poster = "/hero-ai-poster.jpg",
}: {
  images: string[];
  video?: string;
  poster?: string;
}) {
  const pics = images.length ? images : ["/works-web/work-01.webp"];
  // たくさんの作品を出す
  const N = Math.max(26, pics.length);
  const flyers = Array.from({ length: N }, (_, i) => ({
    src: pics[i % pics.length],
    tx: (rand(i + 1) * 2 - 1) * 480,
    ty: (rand(i + 50) * 2 - 1) * 300,
    rot: (rand(i + 7) * 2 - 1) * 13,
    t0: (i / N) * (1 - 0.2) - 0.05,
  }));
  const WIN = 0.2;

  const sectionRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const conceptRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<Array<HTMLImageElement | null>>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      if (conceptRef.current) conceptRef.current.style.opacity = "1";
      imgRefs.current.forEach((el) => el && (el.style.display = "none"));
      return;
    }

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = clamp(-rect.top / (total || 1));

      flyers.forEach((f, i) => {
        const el = imgRefs.current[i];
        if (!el) return;
        const local = (p - f.t0) / WIN;
        if (local <= 0 || local >= 1) {
          el.style.opacity = "0";
          return;
        }
        const z = -1900 + local * 2620;
        const spread = 0.35 + local * 1.5;
        el.style.transform = `translate3d(${f.tx * spread}px, ${f.ty * spread}px, ${z}px) rotate(${f.rot}deg)`;
        el.style.opacity = String(Math.min(smooth(0, 0.14, local), 1 - smooth(0.8, 1, local)));
        el.style.filter = local < 0.14 ? `blur(${(0.14 - local) * 40}px)` : "blur(0)";
      });

      // 終盤でコンセプト＋金粒子テクスチャを出す（背景はオレンジのまま明るく）
      const conc = smooth(0.82, 1, p);
      if (conceptRef.current) {
        conceptRef.current.style.opacity = String(conc);
        conceptRef.current.style.transform = `translateY(${(1 - conc) * 30}px)`;
      }
      if (bgRef.current) bgRef.current.style.opacity = String(conc * 0.35);
      // 巨大ロゴ：視差＋コンセプト時にフェードアウト
      if (wordRef.current) {
        wordRef.current.style.transform = `translateY(${p * -120}px)`;
        wordRef.current.style.opacity = String(1 - conc);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[360vh]" style={{ background: "#f97316" }}>
      <div
        className="sticky top-0 flex h-[100svh] min-h-[600px] w-full items-center justify-center overflow-hidden"
        style={{ perspective: "1200px" }}
      >
        {/* オレンジの明るい背景 */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% -10%, #ffb066 0%, #fb923c 30%, #f97316 60%, #ea580c 100%)",
          }}
        />
        {/* 金粒子テクスチャ（コンセプト時にうっすら重ねる） */}
        <div ref={bgRef} className="absolute inset-0 opacity-0 mix-blend-overlay">
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline poster={poster}>
            <source src={video} type="video/mp4" />
          </video>
        </div>

        {/* 巨大「dwith studio」を上下2段で左へ流す（マーキー）。ヘッダーと被らない位置に配置 */}
        <div
          ref={wordRef}
          className="pointer-events-none absolute inset-0 flex flex-col justify-between pb-[11vh] pt-[17vh]"
        >
          <Band />
          <Band delay="-13s" riseDelay="0.18s" />
        </div>

        {/* 奥から飛び出してくる写真たち */}
        <div className="absolute inset-0 flex items-center justify-center [transform-style:preserve-3d]">
          {flyers.map((f, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              ref={(el) => {
                imgRefs.current[i] = el;
              }}
              src={f.src}
              alt=""
              loading={i < 6 ? "eager" : "lazy"}
              className="absolute rounded-xl opacity-0 ring-4 ring-white/70"
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "clamp(190px, 26vw, 380px)",
                maxHeight: "56vh",
                boxShadow: "0 30px 80px rgba(120,40,0,0.4)",
                willChange: "transform, opacity",
              }}
            />
          ))}
        </div>

        {/* 最後に着地するコンセプト */}
        <div ref={conceptRef} className="relative z-10 mx-auto w-full max-w-[1700px] px-5 text-center opacity-0 sm:px-8">
          <h1
            className="text-[clamp(2.8rem,10vw,10rem)] font-black leading-[0.9] tracking-[-0.03em] text-white"
            style={{ textShadow: "0 6px 40px rgba(120,40,0,0.35)" }}
          >
            {hero.conceptLine1}
            <br />
            <span style={{ color: "#2b1500" }}>{hero.conceptLine2}</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base font-bold leading-relaxed text-white sm:text-lg">
            {hero.subCopy}
          </p>
          <div className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-6">
            <a
              href="#works"
              className="rounded-full bg-[#2b1500] px-7 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
            >
              制作実績を見る
            </a>
            <a
              href="#contact"
              className="rounded-full bg-white px-7 py-3 text-sm font-bold text-brand-600 transition-transform hover:scale-105"
            >
              無料相談する
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
