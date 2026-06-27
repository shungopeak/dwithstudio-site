"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "SERVICE", href: "/#service" },
  { label: "WORKS", href: "/#works" },
  { label: "NEWS", href: "/#news" },
  { label: "ABOUT", href: "/#studio" },
];

export function HeaderHome() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 sm:px-8">
        <Link href="/" aria-label="dwith studio" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.svg" alt="dwith studio" className="h-8 w-auto sm:h-9" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-bold tracking-wide text-white/85 transition-colors hover:text-brand-400"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <PillLink href="/#contact" label="資料請求" filled={false} />
          <PillLink href="/#contact" label="CONTACT" filled />
        </div>

        <button
          type="button"
          aria-label="メニュー"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full bg-white/10 ring-1 ring-white/20 lg:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden">
          <div className="mx-4 rounded-2xl bg-[#16181c] p-4 ring-1 ring-white/10">
            <div className="flex flex-col">
              {navItems.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-bold text-white/85 hover:bg-white/5"
                >
                  {n.label}
                </Link>
              ))}
              <PillLink href="/#contact" label="CONTACT" filled className="mt-2 justify-center" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function PillLink({
  href,
  label,
  filled,
  className = "",
}: {
  href: string;
  label: string;
  filled: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full py-2.5 pl-5 pr-2.5 text-sm font-bold transition-all ${
        filled
          ? "bg-brand-500 text-[#0d0e10] hover:bg-brand-400"
          : "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15"
      } ${className}`}
    >
      {label}
      <span
        className={`grid h-7 w-7 place-items-center rounded-full ${
          filled ? "bg-[#0d0e10] text-white" : "bg-white text-[#0d0e10]"
        }`}
      >
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
