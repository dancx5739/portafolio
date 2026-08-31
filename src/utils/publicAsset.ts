/**
 * Resolves a path under /public against Vite's configured base URL, so
 * hardcoded asset paths keep working when the app is served from a
 * subpath (e.g. GitHub Pages project sites at /<repo>/).
 */
export function publicAsset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
