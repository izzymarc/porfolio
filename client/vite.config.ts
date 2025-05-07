import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist/public",
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      external: [
        "@rollup/rollup-linux-x64-gnu",
        "@rollup/rollup-darwin-x64",
        "@rollup/rollup-darwin-arm64",
        "@rollup/rollup-win32-x64-msvc",
        "@rollup/rollup-win32-arm64-msvc",
        "@rollup/rollup-linux-arm64-gnu",
        "@rollup/rollup-linux-arm64-musl",
        "@rollup/rollup-linux-x64-musl"
      ],
    },
  },
  server: {
    port: 5000,
    host: true,
    open: true
  },
  optimizeDeps: {
    exclude: [
      "@rollup/rollup-linux-x64-gnu",
      "@rollup/rollup-darwin-x64",
      "@rollup/rollup-darwin-arm64",
      "@rollup/rollup-win32-x64-msvc",
      "@rollup/rollup-win32-arm64-msvc",
      "@rollup/rollup-linux-arm64-gnu",
      "@rollup/rollup-linux-arm64-musl",
      "@rollup/rollup-linux-x64-musl"
    ],
  }
});
