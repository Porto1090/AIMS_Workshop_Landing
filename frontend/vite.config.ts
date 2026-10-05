import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  base: "/AIMS_Workshop_Landing/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // "@dashboard": path.resolve(__dirname, "./src/pages/dashboard")
    },
  },
});