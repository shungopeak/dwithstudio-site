import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function Bracket({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-bold tracking-[0.3em] text-white/55">
      [ <span className="text-brand-400">{children}</span> ]
    </p>
  );
}

export function SubLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-lg font-black tracking-[0.2em] text-white/40">
      :: {children}
    </p>
  );
}

export function PillCta({
  href,
  label,
  className = "",
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full bg-white/10 py-2.5 pl-5 pr-2.5 text-sm font-bold text-white ring-1 ring-white/20 transition-all hover:bg-brand-500 hover:text-[#0d0e10] hover:ring-brand-500 ${className}`}
    >
      {label}
      <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-[#0d0e10] transition-transform group-hover:translate-x-0.5">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </Link>
  );
}
