import type { Metadata } from "next";
import { HeaderSturdy } from "@/components/home/HeaderSturdy";
import { FooterDark } from "@/components/home/FooterDark";
import { PageHero } from "@/components/home/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import { Reveal } from "@/components/home/Reveal";

const services = [
  {
    no: "01",
    title: "AIマーケ伴走",
    en: "AI Marketing",
    desc: "戦略設計から日々の運用まで、現役マーケッターがAIを使い倒して伴走。「何をやるか」だけでなく「成果が出るまで」を一緒に走ります。",
    points: ["集客戦略・導線設計", "KPI設計とレポーティング", "AI活用の内製化サポート"],
  },
  {
    no: "02",
    title: "AI集客代行",
    en: "Lead Generation",
    desc: "SNS・広告・MEOをAIで高速に運用。手の届かなかった発信量を一気に増やし、問い合わせ・来店につなげます。",
    points: ["SNS運用・投稿量産", "Web広告の運用", "MEO・口コミ対策"],
  },
  {
    no: "03",
    title: "LP・HP制作",
    en: "Web Design",
    desc: "成果から逆算したランディングページ・ホームページをスピード制作。見た目だけでなく「問い合わせが増える」設計にこだわります。",
    points: ["集客特化のLP", "コーポレート・店舗サイト", "公開後の改善運用"],
  },
  {
    no: "04",
    title: "EC・予約サイト",
    en: "EC & Booking",
    desc: "Stripe連携のECや、予約システム付きサイトを構築。売る・予約を受けるところまで一気通貫で仕組み化します。",
    points: ["ネットショップ構築", "予約・決済システム", "在庫・顧客管理連携"],
  },
  {
    no: "05",
    title: "会員制サイト",
    en: "Membership",
    desc: "ファンを囲い込む会員制・サブスク基盤を構築。継続課金とコミュニティで、安定した売上の土台をつくります。",
    points: ["会員登録・認証", "サブスク課金", "限定コンテンツ配信"],
  },
  {
    no: "06",
    title: "動画・MV制作",
    en: "Motion",
    desc: "ショート動画からミュージックビデオまで、AI×編集で量産。元アニメ制作の表現力で、伝わる映像をスピーディに。",
    points: ["ショート動画", "ミュージックビデオ", "AI生成ビジュアル"],
  },
  {
    no: "07",
    title: "VTuber・配信",
    en: "VTuber",
    desc: "立ち絵・サムネ・配信まわりをトータルで支援。これから始める方も、伸ばしたい方も、世界観づくりからお任せください。",
    points: ["立ち絵・キャラデザ", "配信サムネ・ヘッダー", "チャンネル運用支援"],
  },
  {
    no: "08",
    title: "AI研修・顧問",
    en: "AI Training",
    desc: "社内のAI活用を内製化する研修・顧問。現場で本当に使えるAIの取り入れ方を、御社に合わせて伴走しながら設計します。",
    points: ["AI活用研修", "業務効率化の設計", "継続顧問"],
  },
];

const flow = [
  ["01", "無料相談", "現状とご要望をヒアリング。課題と方向性を整理します。"],
  ["02", "ご提案・お見積り", "最適なプランと費用、スケジュールをご提示します。"],
  ["03", "制作・実行", "AIと人の手でスピーディに制作・運用を進めます。"],
  ["04", "改善・伴走", "公開して終わりではなく、成果が出るまで伴走します。"],
];

export const metadata: Metadata = {
  title: "サービス｜Service",
  description:
    "AIマーケ伴走、AI集客代行、LP・HP制作、EC・予約サイト、会員制サイト、動画・MV制作、VTuber・配信支援、AI研修・顧問。集客・制作・発信をワンストップで提供します。",
  alternates: { canonical: "/service" },
};

export default function ServicePage() {
  return (
    <>
      <HeaderSturdy />
      <main className="bg-[#fdf7f0]">
        <PageHero
          eyebrow="Service"
          title={
            <>
              できることを、
              <br className="sm:hidden" />
              掛け合わせる。
            </>
          }
          word="Service"
          description="集客・制作・発信をワンストップで。AIと人の手を掛け合わせ、ビジネスの「伸びしろ」を最大化します。必要なところだけのご依頼も歓迎です。"
        />

        {/* サービス詳細グリッド */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto grid max-w-[1700px] gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.no} delay={(i % 3) * 80}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-[0_14px_40px_rgba(120,60,10,0.10)] ring-1 ring-black/5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-xs text-brand-600">{s.no}</span>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-[#1b1208]/40">
                      {s.en}
                    </span>
                  </div>
                  <h2 className="mt-4 text-xl font-black tracking-tight text-[#1b1208]">{s.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5b4636]">{s.desc}</p>
                  <ul className="mt-5 space-y-2 border-t border-black/5 pt-5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm font-medium text-[#1b1208]">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ご依頼の流れ */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1700px] px-5 sm:px-8">
            <Reveal className="text-[0.72rem] font-bold uppercase tracking-[0.3em] text-brand-600">
              ( Flow )
            </Reveal>
            <Reveal as="h2" delay={80} className="mt-4 text-[clamp(1.7rem,4vw,3rem)] font-black tracking-[-0.02em] text-[#1b1208]">
              ご依頼の流れ
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {flow.map(([no, title, desc], i) => (
                <Reveal key={no} delay={i * 90}>
                  <div className="h-full rounded-2xl bg-[#fdf7f0] p-7">
                    <span className="font-mono text-2xl font-black text-brand-500">{no}</span>
                    <h3 className="mt-3 text-lg font-black text-[#1b1208]">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5b4636]">{desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <FooterDark />
    </>
  );
}
