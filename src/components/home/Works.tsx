import fs from "node:fs";
import path from "node:path";
import { Plus } from "lucide-react";
import { Bracket, PillCta } from "./parts";

const exts = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"]);

// public/works/ に入れた画像を自動で読み込む（ファイルを置くだけで反映）
function getWorkImages(): string[] {
  try {
    const dir = path.join(process.cwd(), "public", "works");
    return fs
      .readdirSync(dir)
      .filter((f) => exts.has(path.extname(f).toLowerCase()))
      .sort()
      .map((f) => `/works/${f}`);
  } catch {
    return [];
  }
}

// フォルダが空のときのフォールバック（サービスバナー）
const fallback = [
  "/services/svc-speed.webp",
  "/services/svc-lp.webp",
  "/services/svc-membership.webp",
  "/services/svc-ec.webp",
  "/services/svc-reservation.webp",
];

export function Works() {
  const found = getWorkImages();
  // フォルダの作品＋サービスバナーを合わせて表示（作品を増やすほど充実）
  const images = [...found, ...fallback];

  return (
    <section id="works" className="border-t border-white/5 bg-[#0a0b0d] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Bracket>WORKS</Bracket>
            <h2 className="mt-6 text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight">
              手がけた、届けるためのカタチ。
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">
              Webサイト・LP・動画・配信・ロゴ・販促まで。AIと現役マーケッターの力で、
              幅広いクリエイティブを形にしてきました。
            </p>
          </div>
          <PillCta href="/#contact" label="制作を相談する" />
        </div>

        {/* マソンリー（縦に積む散らしレイアウト） */}
        <div className="mt-16 gap-4 [column-fill:_balance] sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
          {images.map((src, i) => (
            <div
              key={src + i}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`work ${i + 1}`}
                loading="lazy"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-black/50 text-white opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                <Plus className="h-4 w-4" />
              </span>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-xs text-white/40">
          ※ 実績は順次掲載していきます。
        </p>
      </div>
    </section>
  );
}
