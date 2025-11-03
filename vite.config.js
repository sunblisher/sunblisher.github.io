import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync } from "fs";
import { join } from "path";

// src/assets/images를 dist/assets/images로 복사하는 함수
function copyAssetsImages() {
  return {
    name: "copy-assets-images",
    closeBundle() {
      const srcDir = join(process.cwd(), "src", "assets", "images");
      const distDir = join(process.cwd(), "dist", "src", "assets", "images");

      if (!existsSync(srcDir)) return;

      function copyRecursive(src, dest) {
        if (!existsSync(dest)) {
          mkdirSync(dest, { recursive: true });
        }

        const entries = readdirSync(src);
        for (const entry of entries) {
          const srcPath = join(src, entry);
          const destPath = join(dest, entry);

          if (statSync(srcPath).isDirectory()) {
            copyRecursive(srcPath, destPath);
          } else {
            copyFileSync(srcPath, destPath);
          }
        }
      }

      copyRecursive(srcDir, distDir);
      console.log("✅ Assets images copied to dist/src/assets/images");

      // src/publishing 폴더를 dist/src/publishing으로 복사
      const publishingSrcDir = join(process.cwd(), "src", "publishing");
      const publishingDistDir = join(
        process.cwd(),
        "dist",
        "src",
        "publishing"
      );
      if (existsSync(publishingSrcDir)) {
        copyRecursive(publishingSrcDir, publishingDistDir);
        console.log("✅ Publishing files copied to dist/src/publishing");
      }

      // 404.html도 dist에 복사 (GitHub Pages용)
      const public404 = join(process.cwd(), "public", "404.html");
      const dist404 = join(process.cwd(), "dist", "404.html");
      if (existsSync(public404)) {
        copyFileSync(public404, dist404);
        console.log("✅ 404.html copied to dist");
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyAssetsImages()],
  base: "/",
});
