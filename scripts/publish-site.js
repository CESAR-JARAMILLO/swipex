/**
 * Copy the public site into site/ for Netlify.
 * The repo root also holds PROJECT.md, SCSS, and the logo source file.
 * Those must not be published.
 */
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const out = path.join(root, "site");

const files = [
  "index.html",
  "privacy.html",
  "terms.html",
  "404.html",
  "robots.txt",
  "sitemap.xml",
  "css/styles.css",
  "js/main.js",
  "assets/icons/favicon.svg",
  "assets/images/swipex-logo.webp",
  "assets/images/swipex-logo-sm.webp",
  "assets/images/swipex-logo-200.png",
  "assets/images/swipex-logo-on-dark.webp",
  "assets/images/swipex-logo-on-dark-sm.webp",
  "assets/images/swipex-logo-on-dark-200.png",
];

const forbidden = [
  "PROJECT.md",
  "README.md",
  "IMPLEMENTATION.md",
  "package.json",
  "package-lock.json",
  "netlify.toml",
  "scss",
  "scripts",
  "node_modules",
  "assets/images/swipex-logo-source.jpg",
  "css/styles.css.map",
];

fs.rmSync(out, { recursive: true, force: true });

files.forEach(function (file) {
  const dest = path.join(out, file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(path.join(root, file), dest);
});

forbidden.forEach(function (file) {
  if (fs.existsSync(path.join(out, file))) {
    throw new Error("Publish folder includes " + file);
  }
});

const css = fs.readFileSync(path.join(out, "css/styles.css"), "utf8");
if (css.includes("sourceMappingURL")) {
  throw new Error("Published CSS includes a source map");
}
