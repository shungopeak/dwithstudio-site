import fs from "node:fs";
import path from "node:path";
import { workOverrides } from "@/content/hearing";

const imgExts = new Set([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg", ".avif"]);
const vidExts = new Set([".mp4", ".webm", ".mov", ".ogg"]);

export type WorkMedia = { src: string; type: "image" | "video" };
export type WorkItem = WorkMedia & {
  catJa: string;
  catEn: string;
  /** ヒアリングシート(hearing.ts)から追記される任意情報 */
  title?: string;
  client?: string;
  year?: string;
  summary?: string;
  result?: string;
  url?: string;
  featured?: boolean;
};

/** src からファイル名（拡張子なし）を取り出す。例: /works-web/work-12.webp → work-12 */
function keyOf(src: string): string {
  const file = decodeURIComponent(src.split("/").pop() ?? "");
  return file.replace(/\.[^.]+$/, "");
}

/** ヒアリングシートの追記情報をマージする */
function applyOverride(item: WorkItem): WorkItem {
  const o = workOverrides[keyOf(item.src)];
  if (!o) return item;
  return {
    ...item,
    title: o.title ?? item.title,
    client: o.client,
    year: o.year,
    summary: o.summary,
    result: o.result,
    url: o.url,
    featured: o.featured,
    catJa: o.category ?? item.catJa,
  };
}

/** optimize-works.mjs が生成する manifest を読む（カテゴリ付き作品リスト） */
export function getWorkItems(): WorkItem[] {
  let items: WorkItem[];
  try {
    const p = path.join(process.cwd(), "public", "works-web", "manifest.json");
    const raw = fs.readFileSync(p, "utf8");
    const parsed = JSON.parse(raw) as WorkItem[];
    items =
      Array.isArray(parsed) && parsed.length
        ? parsed
        : getWorkMedia().map((m) => ({ ...m, catJa: "クリエイティブ", catEn: "Creative" }));
  } catch {
    items = getWorkMedia().map((m) => ({ ...m, catJa: "クリエイティブ", catEn: "Creative" }));
  }
  return items.map(applyOverride);
}

/** カテゴリの偏りを抑えつつ厳選（ごん次郎風の少数精鋭リール用） */
export function getFeaturedWorks(limit = 12): WorkItem[] {
  const items = getWorkItems();
  const byCat = new Map<string, WorkItem[]>();
  for (const it of items) {
    const arr = byCat.get(it.catEn) ?? [];
    arr.push(it);
    byCat.set(it.catEn, arr);
  }
  // ヒアリングシートで featured 指定したものを最優先、次に動画、その後カテゴリをラウンドロビン
  const out: WorkItem[] = [
    ...items.filter((i) => i.featured),
    ...items.filter((i) => !i.featured && i.type === "video"),
  ];
  const queues = [...byCat.values()].map((a) =>
    a.filter((i) => !i.featured && i.type !== "video"),
  );
  let added = true;
  while (out.length < limit && added) {
    added = false;
    for (const q of queues) {
      if (out.length >= limit) break;
      const next = q.shift();
      if (next) {
        out.push(next);
        added = true;
      }
    }
  }
  return out.slice(0, limit);
}

/** public/works/ と public/videos/ のファイルを自動で読み込む（置くだけで反映） */
export function getWorkMedia(): WorkMedia[] {
  const out: WorkMedia[] = [];
  const dirs: Array<{ dir: string; base: string }> = [
    // Web最適化済みの作品（optimize-works.mjs で生成）。無ければ元フォルダを使う。
    { dir: path.join(process.cwd(), "public", "works-web"), base: "/works-web" },
    { dir: path.join(process.cwd(), "public", "videos"), base: "/videos" },
  ];
  for (const { dir, base } of dirs) {
    try {
      for (const f of fs.readdirSync(dir).sort()) {
        if (f.startsWith(".")) continue;
        const ext = path.extname(f).toLowerCase();
        if (imgExts.has(ext)) out.push({ src: `${base}/${encodeURIComponent(f)}`, type: "image" });
        else if (vidExts.has(ext)) out.push({ src: `${base}/${encodeURIComponent(f)}`, type: "video" });
      }
    } catch {
      /* フォルダ無しは無視 */
    }
  }
  return out;
}

export const fallbackMedia: WorkMedia[] = [
  { src: "/services/svc-speed.webp", type: "image" },
  { src: "/services/svc-lp.webp", type: "image" },
  { src: "/services/svc-membership.webp", type: "image" },
  { src: "/services/svc-ec.webp", type: "image" },
  { src: "/services/svc-reservation.webp", type: "image" },
  { src: "/services/svc-speed.webp", type: "image" },
];
