import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), tsconfigPaths()],
    resolve: {
      alias: {
        "@repo/lib": path.resolve(__dirname, "../../packages/lib/src"),
        "@repo/types": path.resolve(__dirname, "../../packages/types"),
      },
    },
    define: {
      "process.env.API_BASE": JSON.stringify(env.API_BASE ?? "http://localhost:3000"),
    },
  };
});
