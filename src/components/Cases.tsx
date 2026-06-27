import { Section, SectionHeading } from "./ui";

// 「お悩み → 提供できること」で価値を伝えるセクション。
// 実際の実績数字が用意できたら、ここを事例型に差し替えてもOK。
const values = [
  {
    problem: "問い合わせ・予約が来ない",
    title: "集客できるサイト・アプリを制作",
    desc: "見た目だけでなく「行動につながる」導線まで設計。AIで高速・低コストに、成果の出るサイトやアプリを形にします。",
  },
  {
    problem: "発信を続ける時間も人手もない",
    title: "止まらない発信体制をつくる",
    desc: "SEO記事・SNS・LINE・広告をAIで量産し、プロが編集。「売れて、売れ続ける仕組み」を代わりに回し続けます。",
  },
  {
    problem: "AIをどう使えばいいか分からない",
    title: "社内に“使える人”を育てる",
    desc: "ツール選定から実践研修まで伴走。丸投げで終わらせず、あなたのチーム自身がAIを武器にできる状態をつくります。",
  },
  {
    problem: "集客も採用も、ぜんぶ手が回らない",
    title: "制作〜運用〜改善をワンストップ",
    desc: "Web制作・マーケ・採用支援まで、AIと仲間の力を束ねて一気通貫で対応。あなたのビジネスの土台を丸ごと支えます。",
  },
];

export function Cases() {
  return (
    <Section id="cases" className="bg-soft">
      <SectionHeading
        eyebrow="What we do"
        title="dwith が提供できること"
        description="あなたの「困った」を、AIと現役マーケッターの実力で「できた」に変えます。"
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {values.map((v) => (
          <article
            key={v.title}
            className="flex flex-col rounded-2xl bg-white p-7 ring-1 ring-line"
          >
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
              <span className="text-muted">お悩み</span>
              {v.problem}
            </span>
            <h3 className="mt-4 flex items-start gap-2 text-lg font-black">
              <span className="text-accent-500">→</span>
              {v.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{v.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
