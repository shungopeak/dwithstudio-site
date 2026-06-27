"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "/#works" },
  { label: "Service", href: "/#service" },
  { label: "About", href: "/#about" },
  { label: "News", href: "/#news" },
];

export function HeaderSturdy() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-black/10 bg-[#fdf7f0]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
        <Link href="/" aria-label="dwith studio" className="shrink-0">
          {/* ロゴ（オリジナルのまま・大きめ） */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="dwith studio" className="h-11 w-auto sm:h-14" />
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* デスクトップのテキストナビ */}
          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="group relative text-[0.9rem] font-bold tracking-[0.04em] text-[#1b1208]/75 transition-colors hover:text-[#1b1208]"
              >
                {n.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-brand-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* メインのボタン（常時表示） */}
          <Link
            href="/#contact"
            className="hidden rounded-full border-2 border-[#1b1208]/25 px-5 py-2 text-[0.85rem] font-bold text-[#1b1208] transition-colors hover:border-brand-500 hover:text-brand-600 sm:inline-block"
          >
            無料相談
          </Link>
          <Link
            href="/#contact"
            className="rounded-full bg-brand-500 px-5 py-2.5 text-[0.85rem] font-bold text-white transition-colors hover:bg-brand-600 sm:px-6"
          >
            お問い合わせ
          </Link>

          {/* ハンバーガー（収まらないナビ分だけ・lg未満で表示） */}
          <button
            type="button"
            aria-label="メニュー"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ml-1 lg:hidden"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-7 bg-[#1b1208] transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-7 bg-[#1b1208] transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-7 bg-[#1b1208] transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-[#fdf7f0]/97 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col px-5 py-3">
            {[...navItems, { label: "無料相談・お問い合わせ", href: "/#contact" }].map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-black/5 py-4 text-base font-bold text-[#1b1208]"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
