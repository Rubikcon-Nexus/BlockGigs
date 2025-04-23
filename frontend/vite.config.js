import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
  optimizeDeps: {
    include: ["eventemitter3"],
    exclude: ["ox", "@web3-onboard/walletconnect"],
    esbuildOptions: {
      target: "esnext",
    },
  },
  define: {
    global: "window",
  },
  resolve: {
    alias: {
      buffer: "buffer",
    },
  },
  build: {
    minify: false,
    rollupOptions: {
      external: ["ox"],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/],
    },
  },
});
