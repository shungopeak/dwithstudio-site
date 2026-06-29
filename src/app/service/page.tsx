import type { Metadata } from "next";
import { HeaderSturdy } from "@/components/home/HeaderSturdy";
import { FooterDark } from "@/components/home/FooterDark";
import { PageHero } from "@/components/home/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import { Reveal } from "@/components/home/Reveal";
import { Faq } from "@/components/home/Faq";
import { services, flow } from "@/content/hearing";

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
              {flow.map((f, i) => (
                <Reveal key={f.no} delay={i * 90}>
                  <div className="h-full rounded-2xl bg-[#fdf7f0] p-7">
                    <span className="font-mono text-2xl font-black text-brand-500">{f.no}</span>
                    <h3 className="mt-3 text-lg font-black text-[#1b1208]">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5b4636]">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* よくある質問（hearing.ts の faqs を埋めると表示） */}
        <Faq />

        <CtaBand />
      </main>
      <FooterDark />
    </>
  );
}
