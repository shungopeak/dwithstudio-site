import Image from "next/image";
import { Gift } from "lucide-react";
import { Button, Section, SectionHeading } from "./ui";

type Product = {
  img: string;
  title: string;
  meta: string;
  price: string;
  isNew?: boolean;
};

const products: Product[] = [
  {
    img: "/services/svc-speed.webp",
    title: "表示速度改善・サイトリニューアル",
    meta: "Core Web Vitals対応・SEO強化",
    price: "¥150,000〜",
    isNew: true,
  },
  {
    img: "/services/svc-reservation.webp",
    title: "予約システム付きサイト",
    meta: "サロン・クリニック・教室・士業向け",
    price: "¥250,000〜",
    isNew: true,
  },
  {
    img: "/services/svc-lp.webp",
    title: "GSAPアニメーション LP制作",
    meta: "高級感のあるD2C・採用LP向け",
    price: "¥200,000〜",
    isNew: true,
  },
  {
    img: "/services/svc-membership.webp",
    title: "会員制サイトまるごと構築",
    meta: "オンラインサロン・スクール運営に",
    price: "¥300,000〜",
    isNew: true,
  },
  {
    img: "/services/svc-ec.webp",
    title: "Stripe連携 ECサイト構築",
    meta: "Shopify不要・月額コスト削減",
    price: "¥300,000〜",
    isNew: true,
  },
];

export function Marketplace() {
  return (
    <Section id="services">
      <SectionHeading
        eyebrow="Menu"
        title="サービスメニュー"
        description="気になるサービスを選んで、お気軽にご相談ください。まずは無料診断からでもOKです。"
      />

      {/* 無料診断バナー（入口） */}
      <div className="mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 p-6 sm:p-8 text-white sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15 backdrop-blur">
            <Gift className="h-7 w-7" strokeWidth={2} />
          </span>
          <div>
            <p className="text-xs font-bold text-brand-100">まずはここから</p>
            <h3 className="text-xl font-black">無料AI集客診断（¥0）</h3>
            <p className="mt-1 text-sm text-brand-50/90">
              現状のヒアリングから改善提案まで、すべて無料。しつこい営業はしません。
            </p>
          </div>
        </div>
        <Button
          href="/#contact"
          variant="secondary"
          className="mt-4 w-full sm:mt-0 sm:w-auto shrink-0"
        >
          無料で申し込む
        </Button>
      </div>

      {/* 出品カード（サービスバナー） */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={p.img}
                alt={p.title}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {p.isNew && (
                <span className="absolute right-3 top-3 rounded-full bg-fg px-2.5 py-1 text-[10px] font-black tracking-wide text-white shadow">
                  NEW
                </span>
              )}
            </div>

            <div className="flex items-end justify-between gap-3 p-4">
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-fg">{p.title}</p>
                <p className="mt-0.5 text-[11px] text-muted">{p.meta}</p>
                <p className="mt-1 text-lg font-black text-brand-600">
                  {p.price}
                </p>
              </div>
              <Button
                href="/#contact"
                className="shrink-0 px-5 py-2.5 text-xs"
              >
                相談する
              </Button>
            </div>
          </article>
        ))}
      </div>

      {/* その他のサービス */}
      <div className="mt-8 rounded-2xl bg-soft p-6 ring-1 ring-line">
        <p className="text-sm font-bold text-fg">そのほかのご相談も歓迎です</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          AI集客代行（SEO・SNS・広告・LINE）／AIマーケ顧問／AI研修・スキルアップ支援／アプリ制作／アニメ・動画制作の相談 など、
          幅広く対応しています。やりたいことベースでお気軽にご相談ください。
        </p>
      </div>

      <p className="mt-6 text-center text-xs text-muted">
        ※ 価格はすべて税抜の目安です。内容により変動します。補助金の活用もご相談ください。
      </p>
    </Section>
  );
}
