import { Zap, HeartHandshake, Banknote, MessagesSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHeading } from "./ui";

const reasons: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Zap,
    title: "AI × スピード",
    desc: "最新の生成AIをフル活用。従来の制作会社の数分の一の時間とコストで、施策を回します。「遅い・高い」を過去のものに。",
  },
  {
    Icon: HeartHandshake,
    title: "作って終わりにしない",
    desc: "納品して終わり、ではなく成果が出るまで伴走。数字を見ながら一緒に改善し続ける「ビジネスパートナー」です。",
  },
  {
    Icon: Banknote,
    title: "補助金で実質負担を軽く",
    desc: "「デジタル化・AI導入補助金2026」などの活用をサポート。条件が合えば、実質負担を抑えてスタートできます。",
  },
  {
    Icon: MessagesSquare,
    title: "専門用語ゼロで伴走",
    desc: "ITが苦手でも大丈夫。難しい言葉を使わず、経営者・現場の目線でかみ砕いて説明します。",
  },
];

export function Why() {
  return (
    <Section id="why" className="bg-soft">
      <SectionHeading
        eyebrow="Why us"
        title="dwith が選ばれる理由"
        description="“AIに詳しい制作会社”ではなく、“成果に責任を持つ伴走者”であること。"
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="flex gap-5 rounded-2xl bg-white p-7 ring-1 ring-line"
          >
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
              <r.Icon className="h-7 w-7" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-lg font-black">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
