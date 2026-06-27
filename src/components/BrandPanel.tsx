import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { nav } from "@/lib/site";

// 動画テクスチャを下地に使う場合：public/hero.mp4 を置いて true に。
const USE_VIDEO = true;

const panelNav = [...nav, { label: "お問い合わせ", href: "/#contact" }];

export function BrandPanel() {
  return (
    <aside className="relative flex min-h-[72vh] flex-col justify-between overflow-hidden px-6 py-10 sm:px-10 lg:sticky lg:top-0 lg:h-screen lg:min-h-screen lg:self-start lg:py-12">
      {/* 流れる鮮やかグラデーション */}
      <div aria-hidden className="hero-aurora absolute inset-0" />
      {/* 動画テクスチャ */}
      {USE_VIDEO && (
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-banner.webp"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      )}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_0%,transparent,rgba(10,11,18,0.55))]"
      />

      {/* 上：ロゴ */}
      <div className="relative z-10">
        <Link href="/" aria-label="dwith studio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.svg" alt="dwith studio" className="h-9 w-auto" />
        </Link>
      </div>

      {/* 中：ブランド */}
      <div className="relative z-10">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/80">
          AI × WEB MARKETING STUDIO
        </p>
        <p className="mt-4 text-[clamp(3.5rem,11vw,8rem)] font-black leading-[0.9] tracking-tight text-white">
          dwith
        </p>
        <p className="mt-4 max-w-md text-sm font-medium leading-relaxed text-white/90">
          現役Webマーケッター × AIクリエイター。
          <br />
          集客できるサイト・アプリを、企画から運用まで。
        </p>
      </div>

      {/* 下：ナビ */}
      <nav className="relative z-10 mt-8 lg:mt-0">
        <ul className="flex flex-wrap gap-x-5 gap-y-2 lg:flex-col lg:gap-y-1.5">
          {panelNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group inline-flex items-center gap-1.5 text-sm font-bold text-white/75 transition-colors hover:text-white"
              >
                {item.label}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
