// React i18n helper — reads window.__LOCALE__ set by the inline script
// Returns zh string if locale is "zh", otherwise returns en string.
export function t(en: string, zh: string): string {
  if (typeof window !== "undefined" && (window as any).__LOCALE__ === "zh") {
    return zh;
  }
  return en;
}
