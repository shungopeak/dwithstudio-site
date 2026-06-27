import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-soft">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center" aria-label={site.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt={site.name} className="h-11 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {site.tagline}
              <br />
              中小企業・店舗のためのAI集客パートナー。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-fg">メニュー</h3>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-brand-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-fg">お問い合わせ</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-brand-600"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="transition-colors hover:text-brand-600"
                >
                  無料相談フォームへ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
