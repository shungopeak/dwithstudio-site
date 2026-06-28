import type { Metadata } from "next";
import Link from "next/link";
import { HeaderSturdy } from "@/components/home/HeaderSturdy";
import { FooterDark } from "@/components/home/FooterDark";
import { PageHero } from "@/components/home/PageHero";
import { CtaBand } from "@/components/home/CtaBand";
import { Reveal } from "@/components/home/Reveal";
import { getSortedPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "コラム・お知らせ｜News",
  description:
    "中小企業・店舗のためのAI集客／AIマーケティングのコラム。補助金、SEO、SNS活用など、明日から使える実践的な情報をお届けします。",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getSortedPosts();

  return (
    <>
      <HeaderSturdy />
      <main className="bg-[#fdf7f0]">
        <PageHero
          eyebrow="News"
          title="コラム・お知らせ"
          word="Column"
          description="明日から使える、AI集客とマーケティングの実践的なヒントをお届けします。"
        />

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-[1700px] px-5 sm:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 80}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex h-full flex-col rounded-2xl bg-white p-7 shadow-[0_14px_40px_rgba(120,60,10,0.10)] ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(120,60,10,0.18)]"
                  >
                    <div className="flex items-center gap-3 text-xs text-[#1b1208]/55">
                      <span className="rounded-full bg-brand-500/15 px-3 py-1 font-bold text-brand-600">
                        {post.category}
                      </span>
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <h2 className="mt-4 text-lg font-black leading-snug text-[#1b1208] transition-colors group-hover:text-brand-600">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5b4636]">
                      {post.description}
                    </p>
                    <span className="mt-5 text-sm font-bold text-brand-600">
                      続きを読む →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <FooterDark />
    </>
  );
}
