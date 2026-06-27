import Link from "next/link";
import { site } from "@/lib/site";

const navItems = [
  { label: "Work", href: "/#works" },
  { label: "Service", href: "/#service" },
  { label: "About", href: "/#about" },
  { label: "News", href: "/#news" },
  { label: "Contact", href: "/#contact" },
];

export function FooterDark() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] py-16 text-white">
      <div className="mx-auto max-w-[1700px] px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" aria-label="dwith studio">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-white.svg" alt="dwith studio" className="h-11 w-auto" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              AIと人のチカラで、WEBマーケティングの土台を作る。
              中小企業・店舗のためのAI集客パートナー。
            </p>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/40">MENU</h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-sm font-bold text-white/75 transition-colors hover:text-brand-400">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-white/40">CONTACT</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-brand-400">
                  {site.email}
                </a>
              </li>
              <li>
                <Link href="/#contact" className="transition-colors hover:text-brand-400">
                  無料AI集客診断フォーム
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} {site.name} studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
