import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: [...configDefaults.exclude],
    "environment": "jsdom",
    globals: true,
    setupFiles: 'src/setupTests.ts',
    css: true
  },
});
