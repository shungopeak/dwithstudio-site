// 作品最適化スクリプト：public/works/ の原本を Web 用 webp に変換し、
// public/works-web/（work-NN.webp ＋ manifest.json）を生成する。
// プロフィール写真（_DSC9647.jpg）も public/profile.jpg に最適化。
//   実行: node optimize-works.mjs
//   ※ ffmpeg-static が必要（無ければ: npm install --no-save ffmpeg-static）
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const FF = path.resolve("node_modules/ffmpeg-static/ffmpeg.exe");
const SRC = path.resolve("public/works");
const OUT = path.resolve("public/works-web");

// 作品グリッドに出さないもの：個人写真・切り抜き素材・ロゴ単体・PSD/PDF
const EXCLUDE = /(^mine\b|^_dsc|removebg|_logo|ロゴ)/i;
const RASTER = new Set([".png", ".jpg", ".jpeg", ".webp"]);

function categorize(name) {
  const n = name.toLowerCase();
  if (/交流|kouryukai|meetup/.test(name)) return ["イベント告知", "Event"];
  if (/サムネ|歌枠|カウントダウン|全体サムネ/.test(name)) return ["配信サムネ", "Thumbnail"];
  if (/1600|header|channlart|wings|abyss|lilith/.test(n) || /幽幻|女神/.test(name))
    return ["ヘッダー・チャンネルアート", "Channel Art"];
  if (/広告バナー|banner|akabanner/.test(n) || /広告バナー/.test(name)) return ["広告バナー", "Ad Creative"];
  if (/fv|lp|cotomirai|^p6/.test(n)) return ["LP・Webデザイン", "Web Design"];
  if (/ポスター/.test(name)) return ["ポスター", "Poster"];
  if (/パンフ/.test(name)) return ["パンフレット", "Graphic"];
  if (/^ai/.test(n)) return ["AIクリエイティブ", "AI Creative"];
  return ["クリエイティブ", "Creative"];
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const files = fs
  .readdirSync(SRC)
  .filter((f) => !f.startsWith("."))
  .filter((f) => RASTER.has(path.extname(f).toLowerCase()))
  .filter((f) => !EXCLUDE.test(f))
  .sort();

const manifest = [];
let n = 0;
for (const f of files) {
  n += 1;
  const file = `work-${String(n).padStart(2, "0")}.webp`;
  try {
    execFileSync(
      FF,
      ["-y", "-i", path.join(SRC, f), "-vf", "scale='min(1400,iw)':-1:flags=lanczos", "-c:v", "libwebp", "-quality", "82", path.join(OUT, file)],
      { stdio: "ignore" }
    );
    const [catJa, catEn] = categorize(f);
    manifest.push({ src: `/works-web/${file}`, type: "image", catJa, catEn });
    console.log(`${file}  <=  ${f}`);
  } catch {
    n -= 1;
    console.log(`SKIP: ${f}`);
  }
}

const mv = path.resolve("public/videos/work-showreel.mp4");
if (fs.existsSync(mv)) manifest.push({ src: "/videos/work-showreel.mp4", type: "video", catJa: "ミュージックビデオ", catEn: "Music Video" });

fs.writeFileSync(path.join(OUT, "manifest.json"), JSON.stringify(manifest, null, 2));

const portrait = path.join(SRC, "_DSC9647.jpg");
if (fs.existsSync(portrait)) {
  execFileSync(FF, ["-y", "-i", portrait, "-vf", "scale='min(1000,iw)':-1:flags=lanczos", "-q:v", "3", path.resolve("public/profile.jpg")], { stdio: "ignore" });
  console.log("profile.jpg updated");
}

console.log(`\nDONE: ${manifest.length} works -> public/works-web/manifest.json`);
