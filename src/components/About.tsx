import Image from "next/image";
import { Check } from "lucide-react";
import { Button, Section, SectionHeading } from "./ui";

// ▼▼▼ あなたのプロフィール ▼▼▼
const profile = {
  name: "シュンゴー",
  role: "AI活用Webマーケッター / dwith studio",
  bio: "はじめまして、現役Webマーケッターのシュンゴーです。AIを活用したWebデザイン・アプリ制作から、売上につながるWebマーケティング導線づくりまで一気通貫で対応します。あなたのビジネスの土台をつくる“クリエイターハブ”として、仲間とともに伴走します。よろしくお願いいたします！",
  highlights: [
    "AIクリエイター — Webサイトからアプリまで、AIを活用して制作",
    "現役Webマーケッター — 集客〜採用をLINE・広告・SEOで支援",
    "元アニメ制作者 — 大手アニメ制作会社で制作進行を経験",
  ],
  // 写真：public/profile.jpg を置いてください（あなたの笑顔の写真）
  photo: "/profile.jpg",
};
// ▲▲▲ ここまで ▲▲▲

export function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* 左：テキスト */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="About"
            title="“難しいこと”は、全部こちらで。"
          />
          <p className="mt-6 text-base leading-relaxed text-fg/90">
            {profile.bio}
          </p>
          <ul className="mt-7 space-y-3">
            {profile.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-fg/90">{h}</span>
              </li>
            ))}
          </ul>
          <Button href="/#contact" className="mt-8">
            まずは無料で相談する
          </Button>
        </div>

        {/* 右：写真 */}
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-500/30 to-accent-400/20 blur-2xl"
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl ring-1 ring-line shadow-xl shadow-brand-600/10">
            <Image
              src={profile.photo}
              alt={`${profile.name}（${profile.role}）`}
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
            {/* 名前オーバーレイ */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-lg font-black text-white">{profile.name}</p>
              <p className="text-xs text-white/80">{profile.role}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
