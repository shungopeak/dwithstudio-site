import { Section, SectionHeading } from "./ui";

const steps = [
  {
    no: "01",
    title: "無料相談・AI集客診断",
    desc: "現状のお悩みをヒアリングし、改善ポイントを診断。しつこい営業は一切しません。",
  },
  {
    no: "02",
    title: "ご提案・お見積り",
    desc: "ゴールに合わせた施策とプランをご提案。補助金が使える場合はあわせてご案内します。",
  },
  {
    no: "03",
    title: "制作・運用スタート",
    desc: "ご契約後、最短3日で着手。AIを活用し、スピーディに施策を形にしていきます。",
  },
  {
    no: "04",
    title: "成果レポート・改善",
    desc: "数字を見ながら、毎月一緒に改善。成果が出るまで並走し続けます。",
  },
];

export function Flow() {
  return (
    <Section id="flow">
      <SectionHeading
        eyebrow="Flow"
        title="ご相談から成果までの流れ"
        description="はじめての方でも安心。まずは気軽な無料相談からスタートできます。"
      />

      <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.no} className="relative rounded-2xl bg-soft p-7">
            <span className="text-5xl font-black text-brand-100">{s.no}</span>
            <h3 className="mt-2 text-lg font-black">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
