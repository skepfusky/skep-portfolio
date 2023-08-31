/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CONTENTFUL_SPACE_ID: string
  readonly CONTENTFUL_DELIVERY_TOKEN: string
  readonly CONTENTFUL_PREVIEW_TOKEN: string
  readonly PUBLIC_UMAMI_ID: string
  readonly PUBLIC_PROD_URL: string
}
