import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getSortedPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "コラム｜AI集客・マーケティングのヒント",
  description:
    "中小企業・店舗のためのAI集客／AIマーケティングのコラム。補助金、SEO、SNS活用など、明日から使える実践的な情報をお届けします。",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  const posts = getSortedPosts();

  return (
    <>
      <Header />
      <main>
        <section className="border-b border-line bg-soft py-16 sm:py-20">
          <div className="container-x">
            <p className="text-sm font-bold tracking-wider text-brand-600 uppercase">
              Column
            </p>
            <h1 className="mt-3 text-3xl sm:text-4xl font-black">
              AI集客・マーケのコラム
            </h1>
            <p className="mt-4 max-w-2xl text-muted">
              明日から使える、AI集客とマーケティングの実践的なヒントをお届けします。
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container-x">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl bg-white p-7 ring-1 ring-line transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 text-xs text-muted">
                    <span className="rounded-full bg-brand-50 px-3 py-1 font-bold text-brand-700">
                      {post.category}
                    </span>
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <h2 className="mt-4 text-lg font-black leading-snug transition-colors group-hover:text-brand-600">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {post.description}
                  </p>
                  <span className="mt-5 text-sm font-bold text-brand-600">
                    続きを読む →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
