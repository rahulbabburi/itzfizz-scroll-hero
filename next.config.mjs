/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build a static site into out/ so it can be hosted on GitHub Pages.
  output: "export",
  // GitHub Pages serves a project site from /<repo-name>. The deploy workflow
  // sets PAGES_BASE_PATH; locally it stays empty so the site runs from /.
  basePath: process.env.PAGES_BASE_PATH || "",
  turbopack: {
    // Pin the project root so a stray lockfile higher up is never picked instead.
    root: import.meta.dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
