// Downloads design.odoo.com assets: fonts, project/testimonial/client images, videos.
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const BASE = "https://design.odoo.com";
const OUT_IMG = "public/images", OUT_FONT = "public/fonts", OUT_VID = "public/videos";
for (const d of [OUT_IMG, OUT_FONT, OUT_VID]) if (!existsSync(d)) await mkdir(d, { recursive: true });
const UA = { headers: { "User-Agent": "Mozilla/5.0 Chrome/120 Safari/537.36" } };

// [remotePath, localFileName]
const IMAGES = [
  ["/web/image/wd.project/27/image_1024", "project-studie-bijdehand.jpg"],
  ["/web/image/wd.project/9/image_1024", "project-fondation-saint-luc.jpg"],
  ["/web/image/wd.project/24/image_1024", "project-goshop-energy.jpg"],
  ["/web/image/wd.project/26/image_1024", "project-bonne-maman.jpg"],
  ["/web/image/wd.project/23/image_1024", "project-sakaya.jpg"],
  ["/web/image/wd.project/10/image_1024", "project-smd.jpg"],
  ["/website_rogueone/static/src/img/content/img_testimonial_cefora.jpg", "testi-cefora.jpg"],
  ["/website_rogueone/static/src/img/content/img_testimonial_fondation.jpg", "testi-fondation.jpg"],
  ["/website_rogueone/static/src/img/content/img_testimonial_materrup.jpg", "testi-materrup.jpg"],
  ["/website_rogueone/static/src/img/content/img_testimonial_aerospacelab.jpg", "testi-aerospacelab.jpg"],
  ["/website_rogueone/static/src/img/content/img_testimonial_delacroix.jpg", "testi-delacroix.jpg"],
  ["/website_rogueone/static/src/img/content/img_testimonial_caromela.jpg", "testi-caromela.jpg"],
  ["/website_rogueone/static/src/img/content/img_client_televie.png", "client-televie.png"],
  ["/website_rogueone/static/src/img/content/img_client_fondation.png", "client-fondation.png"],
  ["/website_rogueone/static/src/img/content/img_client_dreambaby.png", "client-dreambaby.png"],
  ["/website_rogueone/static/src/img/content/img_client_cefora.png", "client-cefora.png"],
  ["/website_rogueone/static/src/img/content/img_client_flowup.png", "client-flowup.png"],
  ["/website_rogueone/static/src/img/content/img_client_maisondandoy.png", "client-maisondandoy.png"],
  ["/website_rogueone/static/src/img/icons/img_social_behance.svg", "social-behance.svg"],
  ["/website_rogueone/static/src/img/icons/img_social_dribbble.svg", "social-dribbble.svg"],
  ["/website_rogueone/static/src/img/icons/img_social_instagram.svg", "social-instagram.svg"],
  ["/website_rogueone/static/src/img/icons/img_social_youtube.svg", "social-youtube.svg"],
  ["/website_rogueone/static/src/img/icons/img_arrow_twirl.svg", "arrow-twirl.svg"],
  ["/website_rogueone/static/src/img/icons/img_odoo_horizontal.svg", "odoo-horizontal.svg"],
];
const VIDEOS = [
  ["/website_rogueone/static/src/videos/waves-loop.mp4", "waves-loop.mp4"],
  ["/website_rogueone/static/src/videos/jelly-2.mp4", "jelly-2.mp4"],
  ["/website_rogueone/static/src/videos/fish-2.mp4", "fish-2.mp4"],
];
const FONTS = ["obviously-regular.woff2", "obviously-medium.woff2", "obviously-semibold.woff2"];
const FONT_BASE = "/website_rogueone/static/src/fonts/obviously/";

let ok = 0, fail = 0; const failed = [];
async function dl(url, dest) {
  if (existsSync(dest)) { ok++; return; }
  try {
    const res = await fetch(url, UA);
    if (!res.ok) throw new Error("HTTP " + res.status);
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 60) throw new Error("too small");
    await writeFile(dest, buf); ok++; process.stdout.write(".");
  } catch (e) { fail++; failed.push(path.basename(dest) + " :: " + e.message); }
}
console.log("Images…");
for (let i = 0; i < IMAGES.length; i += 6)
  await Promise.all(IMAGES.slice(i, i + 6).map(([p, f]) => dl(BASE + p, path.join(OUT_IMG, f))));
console.log("\nFonts…");
await Promise.all(FONTS.map((f) => dl(BASE + FONT_BASE + f, path.join(OUT_FONT, f))));
console.log("\nVideos…");
await Promise.all(VIDEOS.map(([p, f]) => dl(BASE + p, path.join(OUT_VID, f))));
console.log(`\nDone. ${ok} ok, ${fail} failed.`);
if (failed.length) console.log("Failed:\n" + failed.join("\n"));
