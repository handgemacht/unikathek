import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@repo/lib": path.resolve(__dirname, "../../packages/lib/src"),
      "@repo/types": path.resolve(__dirname, "../../packages/types"),
    },
  },
});
