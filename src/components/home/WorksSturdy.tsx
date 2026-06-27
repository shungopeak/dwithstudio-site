import { Reveal } from "./Reveal";
import { WorksArc } from "./WorksArc";
import { getFeaturedWorks, getWorkItems } from "@/lib/works";

export function WorksSturdy() {
  const works = getFeaturedWorks(20);
  const total = getWorkItems().length;

  return (
    <section id="works" className="relative overflow-hidden bg-[#fdf7f0] py-16 text-[#1b1208] sm:py-24">
      {/* 背景の巨大な薄い文字（左へ流す・丸セパレーター） */}
      <div className="pointer-events-none absolute inset-x-0 top-8 overflow-hidden">
        <div className="bgword-marquee">
          {Array.from({ length: 2 }).map((_, g) => (
            <span key={g} className="flex shrink-0 items-center">
              {Array.from({ length: 3 }).map((_, k) => (
                <span key={k} className="flex items-center pr-[0.5em] text-[26vw] font-black leading-none tracking-tighter text-[#1b1208]/[0.05]">
                  Works
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1700px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-brand-600">
              ( Selected Work )
            </Reveal>
            <Reveal as="h2" delay={80} className="mt-5 text-[clamp(1.9rem,4.5vw,3.4rem)] font-black leading-[1.05] tracking-[-0.02em]">
              手がけた、届けるためのカタチ。
            </Reveal>
          </div>
          <Reveal delay={160} className="max-w-sm text-sm leading-relaxed text-[#5b4636]">
            VTuber・配信・LP・広告・ロゴ・販促まで。AIと現役マーケッターの力で、
            幅広いクリエイティブを形にしてきました。
          </Reveal>
        </div>
      </div>

      {/* 厳選作品を大きめカードで横に流す（gonshiro風リール） */}
      <div className="mt-14 sm:mt-20">
        <WorksArc items={works} />
      </div>

      {/* View All（gonshiro風の大きな下線リンク） */}
      <div className="relative mx-auto mt-12 max-w-[1700px] px-5 text-center sm:px-8">
        <Reveal>
          <a
            href="#contact"
            className="group inline-flex items-end gap-2 text-[clamp(2rem,7vw,5rem)] font-black tracking-tight text-[#1b1208] transition-colors hover:text-brand-600"
          >
            <span className="border-b-4 border-[#1b1208] pb-2 transition-colors group-hover:border-brand-600">
              View All Works
            </span>
            <sup className="mb-2 text-base font-bold text-brand-600 sm:text-xl">{total}</sup>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
