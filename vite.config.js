import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  alias: {
    "@": resolve(__dirname, "./src"),
    "@scss": resolve(__dirname, "./src/assets/scss"),
    "@components": resolve(__dirname, "./src/components"),
    "@img": resolve(__dirname, "./src/assets/img"),
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/global.scss';`,
      },
    },
  },
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
  plugins: [vue()],
});
