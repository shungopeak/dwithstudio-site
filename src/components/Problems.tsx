import { Section, SectionHeading } from "./ui";

const problems = [
  "ホームページはあるのに、問い合わせがほとんど来ない",
  "SNSやブログを更新する時間も人手もない",
  "AIを使いたいが、何から手をつければいいか分からない",
  "広告にお金をかけても、効果が出ているか分からない",
  "制作会社に頼むと高額。でも自分でやる余裕もない",
  "補助金が使えるらしいが、申請が難しそう",
];

export function Problems() {
  return (
    <Section id="problems" className="bg-soft">
      <SectionHeading
        eyebrow="Problem"
        title={
          <>
            こんなお悩み、<br className="sm:hidden" />
            ありませんか？
          </>
        }
        description="ひとつでも当てはまれば、AI集客で解決できる可能性があります。"
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((p) => (
          <li
            key={p}
            className="flex gap-3 rounded-2xl bg-white p-5 ring-1 ring-line"
          >
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-sm font-black text-brand-600">
              ?
            </span>
            <p className="text-sm leading-relaxed text-fg/90">{p}</p>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-center text-base font-bold text-brand-700">
        その「面倒」と「分からない」、ぜんぶ任せてください。
      </p>
    </Section>
  );
}
