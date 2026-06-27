import { Section, SectionHeading } from "./ui";

const faqs = [
  {
    q: "ITやAIにまったく詳しくないのですが、大丈夫ですか？",
    a: "はい、まったく問題ありません。むしろそうした方のための伴走サービスです。専門用語を使わず、経営や現場の目線でかみ砕いてご説明します。",
  },
  {
    q: "料金はどのくらいかかりますか？",
    a: "無料診断は0円、AI集客代行は月8万円〜、スポット制作は20万円〜、AIマーケ顧問は月5万円〜が目安です。内容により変動するため、まずは無料診断で最適なプランをご案内します。",
  },
  {
    q: "補助金は本当に使えますか？",
    a: "事業内容や条件によりますが、「デジタル化・AI導入補助金2026」などが対象になる場合があります。診断時に、使える可能性と申請の流れをご案内します。",
  },
  {
    q: "どのくらいで成果が出ますか？",
    a: "施策により異なりますが、SNSや広告は数週間〜、SEOは3〜6か月が一般的な目安です。短期と中長期の両面で設計し、進捗を毎月レポートします。",
  },
  {
    q: "対応エリアはどこですか？",
    a: "オンラインで全国対応が可能です（打ち合わせはZoom等）。あわせて、地域密着のMEO・店舗集客にも対応していますので、地元での集客強化もご相談ください。",
  },
  {
    q: "途中で解約できますか？",
    a: "月額プランは縛りなしで、いつでも解約いただけます。安心してお試しください。",
  },
];

export function Faq() {
  return (
    <Section id="faq" className="bg-soft">
      <SectionHeading
        eyebrow="FAQ"
        title="よくあるご質問"
        description="ご不明な点は、お気軽にお問い合わせください。"
      />

      <div className="mt-12 mx-auto max-w-3xl divide-y divide-line rounded-2xl bg-white ring-1 ring-line">
        {faqs.map((f) => (
          <details key={f.q} className="group p-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              <span className="flex items-start gap-3 font-bold text-fg">
                <span className="text-brand-500">Q.</span>
                {f.q}
              </span>
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 pl-7 text-sm leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
