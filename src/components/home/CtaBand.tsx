import Link from "next/link";

/**
 * 下層ページ共通の締めCTA（オレンジ）。
 */
export function CtaBand() {
  return (
    <section
      className="relative overflow-hidden py-20 text-white sm:py-28"
      style={{ background: "linear-gradient(160deg, #fb923c 0%, #f97316 48%, #ea580c 100%)" }}
    >
      <div className="relative mx-auto max-w-[1100px] px-5 text-center sm:px-8">
        <h2 className="text-[clamp(1.9rem,5vw,3.4rem)] font-black leading-[1.05] tracking-[-0.02em]">
          まずは無料で、
          <br className="sm:hidden" />
          AI集客診断を。
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
          現状のヒアリングから改善ポイントの診断まで、すべて無料。
          しつこい営業は一切ありません。お気軽にご相談ください。
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-[#2b1500] px-8 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105"
          >
            無料相談・お問い合わせ
          </Link>
          <Link
            href="/works"
            className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-600 transition-transform hover:scale-105"
          >
            制作実績を見る
          </Link>
        </div>
      </div>
    </section>
  );
}
