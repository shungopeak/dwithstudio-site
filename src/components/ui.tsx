import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300";
  const styles = {
    primary:
      "bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 hover:-translate-y-0.5",
    secondary:
      "bg-white text-brand-700 ring-1 ring-brand-100 hover:bg-brand-50 hover:-translate-y-0.5",
    ghost: "text-fg/80 hover:text-brand-600",
  } as const;
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div
      className={
        align === "center"
          ? "max-w-2xl mx-auto text-center"
          : "max-w-2xl text-left"
      }
    >
      {eyebrow && (
        <p
          className={`inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.25em] text-brand-600 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="h-3.5 w-1.5 rounded-sm bg-brand-500" />
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 text-3xl sm:text-[2.5rem] font-black leading-tight tracking-tight text-fg">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 scroll-mt-20 ${className}`}>
      <div className="container-x">{children}</div>
    </section>
  );
}
