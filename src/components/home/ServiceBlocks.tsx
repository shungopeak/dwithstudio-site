import Image from "next/image";
import { Bracket, SubLabel, PillCta } from "./parts";

const intro =
  "AI活用と各種サービスを掛け合わせることで、集客の創出から品質向上、そして多くの人へ届ける仕組みづくりまで、一気通貫で実現することが可能です。";

const blocks = [
  {
    sub: "MARKETING",
    title: "止まらない発信で、\n売れ続ける仕組みを。",
    desc: "SEO・SNS・広告・LINE構築をAIで量産し、プロが編集。問い合わせが増える発信を、止めずに回し続けます。",
    img: "/services/svc-speed.webp",
    price: "AI集客代行 / 月 ¥80,000〜",
  },
  {
    sub: "WEB / APP",
    title: "成果が出るサイト・アプリを、\n高速・低コストで。",
    desc: "LP・コーポレートサイト・予約システム・アプリまで。AI×プロの編集で、見た目だけでなく「成果」にこだわって制作します。",
    img: "/services/svc-lp.webp",
    price: "制作 / ¥200,000〜",
  },
  {
    sub: "EC",
    title: "コストを抑えて、\n売上を最大化する。",
    desc: "Stripe連携の本格ECを、Shopify不要・月額コストを抑えて構築。D2C・デジタル販売・サブスクにも対応します。",
    img: "/services/svc-ec.webp",
    price: "ECサイト構築 / ¥300,000〜",
  },
  {
    sub: "MEMBERSHIP",
    title: "継続収益につながる、\n会員サイトを。",
    desc: "オンラインサロン・スクール運営に最適な会員制サイトを、企画・設計から運用サポートまでまるごと構築します。",
    img: "/services/svc-membership.webp",
    price: "会員制サイト / ¥300,000〜",
  },
  {
    sub: "SCHOOL",
    title: "“使える人”を、\n社内に増やす。",
    desc: "ChatGPT等の実践研修で、社員や個人がAIを武器にできる状態へ。丸投げで終わらせず、自走できるチームを育てます。",
    img: "/services/svc-reservation.webp",
    price: "AI研修 / ¥50,000/回〜",
  },
];

export function ServiceBlocks() {
  return (
    <section id="service" className="border-t border-white/5 bg-[#0d0e10] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <Bracket>SERVICE</Bracket>
        <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
          {intro}
        </p>

        <div className="mt-20 space-y-24 sm:mt-28 sm:space-y-32">
          {blocks.map((b, i) => (
            <div
              key={b.sub}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              {/* テキスト */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <SubLabel>{b.sub}</SubLabel>
                <h3 className="mt-6 whitespace-pre-line text-[clamp(1.6rem,3.5vw,2.6rem)] font-black leading-[1.3] tracking-tight">
                  {b.title}
                </h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
                  {b.desc}
                </p>
                <p className="mt-6 text-sm font-bold text-brand-400">{b.price}</p>
                <PillCta href="/#contact" label="相談する" className="mt-6" />
              </div>

              {/* ビジュアル */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative aspect-square overflow-hidden rounded-3xl ring-1 ring-white/10">
                  <Image
                    src={b.img}
                    alt={b.sub}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
