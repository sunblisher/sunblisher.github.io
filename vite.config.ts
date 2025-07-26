import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["80cb731fa4c4.ngrok-free.app", ".ngrok-free.app"],
  },
});
