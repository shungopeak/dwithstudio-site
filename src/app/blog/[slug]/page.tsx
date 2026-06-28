import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HeaderSturdy } from "@/components/home/HeaderSturdy";
import { FooterDark } from "@/components/home/FooterDark";
import { getPost, posts } from "@/lib/posts";
import { site } from "@/lib/site";

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

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "ja-JP",
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    image: `${site.url}/og.png`,
    author: { "@type": "Organization", name: `${site.name} studio`, url: site.url },
    publisher: {
      "@type": "Organization",
      name: `${site.name} studio`,
      logo: { "@type": "ImageObject", url: `${site.url}/og.png` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <HeaderSturdy />
      <main className="bg-[#fdf7f0] text-[#1b1208]">
        {/* 記事ヘッダー */}
        <header className="border-b border-black/10 pb-12 pt-32 sm:pt-44">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Link href="/blog" className="text-sm font-bold text-brand-600 hover:underline">
              ← コラム一覧へ
            </Link>

            <div className="mt-6 flex items-center gap-3 text-xs text-[#1b1208]/55">
              <span className="rounded-full bg-brand-500/15 px-3 py-1 font-bold text-brand-600">
                {post.category}
              </span>
              <time dateTime={post.date}>{post.date}</time>
              <span>約{post.readMin}分で読めます</span>
            </div>

            <h1 className="mt-4 text-3xl font-black leading-tight tracking-[-0.02em] sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#5b4636]">
              {post.description}
            </p>
          </div>
        </header>

        {/* 本文 */}
        <article className="py-14 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <div className="space-y-5">
              {post.body.map((block, i) =>
                block.startsWith("## ") ? (
                  <h2 key={i} className="pt-4 text-xl font-black sm:text-2xl">
                    {block.replace(/^##\s+/, "")}
                  </h2>
                ) : (
                  <p key={i} className="text-base leading-[1.9] text-[#1b1208]/90">
                    {block}
                  </p>
                ),
              )}
            </div>

            {/* 記事末のCTA */}
            <div className="mt-14 rounded-2xl bg-white p-8 text-center shadow-[0_14px_40px_rgba(120,60,10,0.10)] ring-1 ring-black/5">
              <h2 className="text-xl font-black">AI集客について、相談してみませんか？</h2>
              <p className="mt-3 text-sm text-[#5b4636]">
                現状のヒアリングから改善提案まで、無料で診断します。
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-full bg-brand-500 px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-600"
              >
                無料AI集客診断を申し込む
              </Link>
            </div>
          </div>
        </article>
      </main>
      <FooterDark />
    </>
  );
}
