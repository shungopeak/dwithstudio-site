import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PillCta } from "./parts";
import { Reveal } from "./Reveal";
import { getSortedPosts } from "@/lib/posts";

export function News() {
  const posts = getSortedPosts().slice(0, 3);

  return (
    <section id="news" className="bg-[#fdf7f0] py-16 text-[#1b1208] sm:py-24">
      <div className="mx-auto max-w-[1700px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal as="span" className="block text-[0.72rem] font-bold uppercase tracking-[0.22em] text-brand-600">
              ( News )
            </Reveal>
            <Reveal as="h2" delay={80} className="mt-5 text-[clamp(1.9rem,4.5vw,3.4rem)] font-black leading-[1.05] tracking-[-0.02em]">
              コラム・お知らせ
            </Reveal>
          </div>
          <Reveal delay={160}>
            <PillCta href="/blog" label="VIEW MORE" />
          </Reveal>
        </div>

        <ul className="mt-14 divide-y divide-black/10 border-y border-black/10">
          {posts.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 90}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex flex-col gap-2 py-6 transition-colors hover:bg-black/[0.03] sm:flex-row sm:items-center sm:gap-8"
              >
                <time className="shrink-0 text-sm font-bold text-[#1b1208]/45">
                  {p.date}
                </time>
                <span className="shrink-0 rounded-full bg-brand-500/15 px-3 py-1 text-xs font-bold text-brand-600 sm:w-40 sm:text-center">
                  {p.category}
                </span>
                <span className="flex-1 font-bold text-[#1b1208] transition-colors group-hover:text-brand-600">
                  {p.title}
                </span>
                <ArrowRight className="hidden h-5 w-5 shrink-0 text-[#1b1208]/40 transition-transform group-hover:translate-x-1 sm:block" />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
