import { Bracket } from "./parts";

export function Studio() {
  return (
    <section id="studio" className="border-t border-white/5 bg-[#0d0e10] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <Bracket>STUDIO</Bracket>
        <p className="mt-10 max-w-5xl text-[clamp(1.4rem,3.2vw,2.6rem)] font-bold leading-[1.6] tracking-tight">
          dwithは、現役Webマーケッター×AIクリエイターによる
          <span className="text-brand-400">クリエイターハブ</span>。
          AIと仲間のチカラを掛け合わせ、集客できるサイト・アプリの
          創出から品質向上、そして売上アップまで
          <span className="text-brand-400">一気通貫</span>で実現します。
        </p>
      </div>
    </section>
  );
}
