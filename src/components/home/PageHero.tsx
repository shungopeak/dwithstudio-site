import { Reveal } from "./Reveal";

/**
 * 下層ページ共通のヒーロー（ヘッダー分の余白を確保・背景に巨大な英字ワード）。
 */
export function PageHero({
  eyebrow,
  title,
  word,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  word: string;
  description?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-black/10 bg-[#fdf7f0] pb-14 pt-32 text-[#1b1208] sm:pb-20 sm:pt-44">
      {/* 背景の巨大な薄い英字 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <p className="whitespace-nowrap text-[22vw] font-black leading-[0.8] tracking-tight text-[#1b1208]/[0.04]">
          {word}
        </p>
      </div>

      <div className="relative mx-auto max-w-[1700px] px-5 sm:px-8">
        <Reveal className="text-[0.72rem] font-bold uppercase tracking-[0.3em] text-brand-600">
          ( {eyebrow} )
        </Reveal>
        <Reveal as="h1" delay={80} className="mt-5 text-[clamp(2.4rem,6vw,4.6rem)] font-black leading-[1.04] tracking-[-0.02em]">
          {title}
        </Reveal>
        {description && (
          <Reveal delay={160} className="mt-6 max-w-2xl text-sm leading-relaxed text-[#5b4636] sm:text-base">
            {description}
          </Reveal>
        )}
      </div>
    </section>
  );
}
