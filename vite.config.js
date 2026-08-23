import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  build: {
    target: "esnext",
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // 4kb
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("three") || id.includes("@tresjs")) {
              return "three-vendor";
            }
            if (id.includes("gsap") || id.includes("motion") || id.includes("lenis")) {
              return "animation-vendor";
            }
            if (id.includes("lucide-vue-next")) {
              return "icons-vendor";
            }
            if (id.includes("vue") || id.includes("vue-router")) {
              return "vue-vendor";
            }
            return "vendor";
          }
        },
      },
    },
  },

  esbuild: {
    drop: process.env.NODE_ENV === "production" ? ["console", "debugger"] : [],
  },
});