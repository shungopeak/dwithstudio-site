import { Reveal } from "./Reveal";
import { faqs } from "@/content/hearing";

/**
 * よくある質問。hearing.ts の faqs に項目があるときだけ表示。
 * FAQPage の構造化データ(JSON-LD)も出力し、SEOにも効きます。
 */
export function Faq() {
  if (!faqs.length) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="bg-white py-16 sm:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-[900px] px-5 sm:px-8">
        <Reveal className="text-[0.72rem] font-bold uppercase tracking-[0.3em] text-brand-600">
          ( FAQ )
        </Reveal>
        <Reveal as="h2" delay={80} className="mt-4 text-[clamp(1.7rem,4vw,3rem)] font-black tracking-[-0.02em] text-[#1b1208]">
          よくある質問
        </Reveal>

        <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-[#1b1208]">
                <span className="flex gap-3">
                  <span className="text-brand-500">Q.</span>
                  {f.q}
                </span>
                <span className="shrink-0 text-brand-500 transition-transform group-open:rotate-45">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 pl-7 text-sm leading-loose text-[#5b4636]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
