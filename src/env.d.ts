/* IMPORTANT: Learn more about ASTRO env typing at https://docs.astro.build/en/guides/environment-variables/#intellisense-for-typescript */

/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_ADSENSE_CLIENT_ID: string;
  readonly PUBLIC_ADSENSE_TOP_SLOT: string;
  readonly PUBLIC_ADSENSE_BOTTOM_SLOT: string;
  readonly PUBLIC_GA4_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
