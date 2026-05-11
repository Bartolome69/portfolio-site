import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  resolve: { tsconfigPaths: true },
  server: {
    port: Number(process.env.PORT) || 3000,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      spa: { enabled: true },
      prerender: { enabled: true },
    }),
    viteReact(),
  ],
});
