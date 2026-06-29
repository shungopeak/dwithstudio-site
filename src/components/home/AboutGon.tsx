import { Reveal } from "./Reveal";
import { profile, strengths } from "@/content/hearing";

// コラージュに使う作品（明るい背景で散らして見せる）
const collage = [
  { src: "/works-web/work-12.webp", rot: -6, cls: "z-20 w-[44%] sm:w-[30%]" },
  { src: "/works-web/work-36.webp", rot: 5, cls: "z-10 w-[40%] sm:w-[26%]" },
  { src: "/works-web/work-22.webp", rot: -3, cls: "z-30 w-[46%] sm:w-[32%]" },
];

export function AboutGon() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#fdf7f0] py-16 text-[#1b1208] sm:py-24">
      {/* 背景の巨大な薄い文字（左へ流す・丸セパレーター） */}
      <div className="pointer-events-none absolute inset-x-0 top-10 overflow-hidden">
        <div className="bgword-marquee">
          {Array.from({ length: 2 }).map((_, g) => (
            <span key={g} className="flex shrink-0 items-center">
              {Array.from({ length: 3 }).map((_, k) => (
                <span key={k} className="flex items-center pr-[0.5em] text-[26vw] font-black leading-none tracking-tighter text-[#1b1208]/[0.05]">
                  About
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1100px] px-5 text-center sm:px-8">
        <Reveal className="text-[0.72rem] font-bold uppercase tracking-[0.3em] text-brand-600">
          ( About )
        </Reveal>
        <Reveal as="h2" delay={80} className="mt-6 text-[clamp(1.9rem,5vw,3.6rem)] font-black leading-[1.08] tracking-[-0.02em]">
          AIを、武器に変える。
          <br />
          人の手で、<span className="text-brand-500">成果</span>に変える。
        </Reveal>
        <Reveal delay={160} className="mx-auto mt-8 max-w-2xl text-sm leading-loose text-[#5b4636] sm:text-base">
          現役WEBマーケッターのシュンゴーが、AIクリエイターとして、そして元アニメ制作者としての
          表現力を掛け合わせ、「集客できる」状態をつくることに集中しています。
          AIで速く・安く、人の手で確かに。dwith studio は、あなたのビジネスの隣で動く伴走パートナーです。
        </Reveal>
      </div>

      {/* 写真コラージュ＋プロフィール */}
      <div className="relative mx-auto mt-12 flex max-w-[1100px] flex-col items-center gap-12 px-5 sm:mt-16 sm:flex-row sm:items-end sm:justify-center sm:gap-6 sm:px-8">
        {/* 散らした作品 */}
        <div className="relative flex w-full items-center justify-center sm:w-[58%]">
          {collage.map((c, i) => (
            <Reveal key={c.src} pop delay={i * 120} className={`${c.cls} ${i === 1 ? "-ml-6 mt-10" : ""} ${i === 2 ? "-ml-6 -mt-6" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.src}
                alt=""
                loading="lazy"
                className="w-full rounded-xl bg-white object-cover shadow-[0_24px_60px_rgba(120,60,10,0.25)] ring-1 ring-black/5"
                style={{ transform: `rotate(${c.rot}deg)` }}
              />
            </Reveal>
          ))}
        </div>

        {/* プロフィール */}
        <Reveal pop delay={200} className="w-[70%] sm:w-[34%]">
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_60px_rgba(120,60,10,0.2)] ring-1 ring-black/5">
            <div className="aspect-[4/5] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={profile.photo} alt={profile.name} className="h-full w-full object-cover" />
            </div>
            <div className="px-5 py-4">
              <p className="text-base font-black">{profile.name}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-brand-600">
                {profile.role}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* 強み */}
      <div className="relative mx-auto mt-14 grid max-w-[1100px] gap-px overflow-hidden rounded-2xl bg-black/5 px-5 sm:grid-cols-3 sm:px-8">
        {strengths.map((s, i) => (
          <Reveal key={s.en} delay={i * 100} className="bg-[#fdf7f0] p-7">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-600">{s.en}</p>
            <p className="mt-3 text-sm font-bold text-[#1b1208]">{s.ja}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
