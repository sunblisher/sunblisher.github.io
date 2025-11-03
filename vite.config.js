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
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyAssetsImages()],
  base: "/",
});
