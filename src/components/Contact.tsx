"use client";

import { useState } from "react";
import { MailCheck, Check } from "lucide-react";
import { SectionHeading } from "./ui";
import { Reveal } from "./home/Reveal";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "送信に失敗しました");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "送信に失敗しました");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="container-x">
        <Reveal pop className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-700 text-white">
          <div className="grid lg:grid-cols-2">
            {/* 左：訴求 */}
            <div className="p-8 sm:p-12">
              <SectionHeading
                align="left"
                title={
                  <span className="text-white">
                    まずは無料で、
                    <br />
                    AI集客診断を受けてみませんか？
                  </span>
                }
              />
              <p className="mt-5 text-brand-50/90 leading-relaxed">
                現状のヒアリングから改善ポイントの診断まで、すべて無料。
                しつこい営業は一切ありません。お気軽にご相談ください。
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {[
                  "相談・診断はすべて無料",
                  "全国オンライン対応",
                  "補助金が使えるかもその場で診断",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white/20">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-brand-50/80">
                メールでのお問い合わせはこちら
                <br />
                <a
                  href={`mailto:${site.email}`}
                  className="font-bold underline underline-offset-4"
                >
                  {site.email}
                </a>
              </p>
            </div>

            {/* 右：フォーム */}
            <div className="bg-white p-8 sm:p-12 text-fg">
              {status === "success" ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-brand-50 text-brand-600">
                    <MailCheck className="h-8 w-8" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 text-xl font-black">
                    送信ありがとうございます
                  </h3>
                  <p className="mt-3 text-sm text-muted">
                    2営業日以内に、ご記入のメールアドレス宛にご連絡します。
                    <br />
                    今しばらくお待ちください。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Field
                    label="お名前"
                    name="name"
                    required
                    placeholder="山田 太郎"
                  />
                  <Field
                    label="会社名・店舗名"
                    name="company"
                    placeholder="株式会社○○ / ○○店"
                  />
                  <Field
                    label="メールアドレス"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                  />
                  <Field
                    label="電話番号（任意）"
                    name="phone"
                    type="tel"
                    placeholder="090-1234-5678"
                  />
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold"
                    >
                      ご相談内容 <span className="text-brand-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="例）店舗の集客にAIを使いたいが、何から始めればいいか相談したい"
                      className="mt-1.5 w-full rounded-xl border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                    />
                  </div>

                  {/* スパム対策（人間には見えない） */}
                  <input
                    type="text"
                    name="company_website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden
                  />

                  {status === "error" && (
                    <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                      {errorMsg}（お手数ですがメールでもご連絡いただけます）
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full rounded-full bg-brand-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition-all hover:bg-brand-700 disabled:opacity-60"
                  >
                    {status === "submitting"
                      ? "送信中..."
                      : "無料でAI集客診断を申し込む"}
                  </button>
                  <p className="text-center text-xs text-muted">
                    送信すると、プライバシーポリシーに同意したものとみなされます。
                  </p>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-bold">
        {label} {required && <span className="text-brand-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
      />
    </div>
  );
}
