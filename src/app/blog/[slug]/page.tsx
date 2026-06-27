import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui";
import { getPost, posts } from "@/lib/posts";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "記事が見つかりません" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPost({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main>
        <article className="py-14 sm:py-20">
          <div className="container-x max-w-3xl">
            <Link
              href="/blog"
              className="text-sm font-bold text-brand-600 hover:underline"
            >
              ← コラム一覧へ
            </Link>

            <div className="mt-6 flex items-center gap-3 text-xs text-muted">
              <span className="rounded-full bg-brand-50 px-3 py-1 font-bold text-brand-700">
                {post.category}
              </span>
              <time dateTime={post.date}>{post.date}</time>
              <span>約{post.readMin}分で読めます</span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl font-black leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {post.description}
            </p>

            <div className="mt-10 space-y-5">
              {post.body.map((block, i) =>
                block.startsWith("## ") ? (
                  <h2
                    key={i}
                    className="pt-4 text-xl sm:text-2xl font-black text-fg"
                  >
                    {block.replace(/^##\s+/, "")}
                  </h2>
                ) : (
                  <p key={i} className="text-base leading-[1.9] text-fg/90">
                    {block}
                  </p>
                ),
              )}
            </div>

            {/* 記事末のCTA */}
            <div className="mt-14 rounded-2xl bg-soft p-8 text-center ring-1 ring-line">
              <h2 className="text-xl font-black">
                AI集客について、相談してみませんか？
              </h2>
              <p className="mt-3 text-sm text-muted">
                現状のヒアリングから改善提案まで、無料で診断します。
              </p>
              <Button href="/#contact" className="mt-6">
                無料AI集客診断を申し込む
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
