import { Reveal } from "./Reveal";
import { voices } from "@/content/hearing";

/**
 * お客様の声。hearing.ts の voices に項目があるときだけ表示（空なら何も出ない）。
 */
export function Voice() {
  if (!voices.length) return null;

  return (
    <section className="relative overflow-hidden bg-[#fdf7f0] py-16 text-[#1b1208] sm:py-24">
      <div className="mx-auto max-w-[1700px] px-5 sm:px-8">
        <Reveal className="text-[0.72rem] font-bold uppercase tracking-[0.22em] text-brand-600">
          ( Voice )
        </Reveal>
        <Reveal as="h2" delay={80} className="mt-4 text-[clamp(1.7rem,4vw,3rem)] font-black tracking-[-0.02em]">
          お客様の声
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {voices.map((v, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <figure className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-[0_14px_40px_rgba(120,60,10,0.10)] ring-1 ring-black/5">
                <span className="text-4xl font-black leading-none text-brand-500/30">“</span>
                <blockquote className="mt-2 flex-1 text-sm leading-loose text-[#1b1208]/90">
                  {v.comment}
                </blockquote>
                <figcaption className="mt-5 border-t border-black/5 pt-4 text-sm">
                  <span className="font-bold text-[#1b1208]">{v.name}</span>
                  {v.role && <span className="ml-2 text-xs text-[#1b1208]/55">{v.role}</span>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
