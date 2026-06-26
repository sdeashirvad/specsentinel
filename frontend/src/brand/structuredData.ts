import { BRAND } from './tokens'
import { ENTITY_IDS } from './entityIds'

/** Related SDEAshirvad Labs products — structured data only, matches portfolio ItemList + new launches */
const LABS_ECOSYSTEM_PRODUCTS = [
  { position: 1, name: 'Bloom', url: 'https://bloom.sdeashirvad.com/' },
  { position: 2, name: 'ChatLoom', url: 'https://chatloom.sdeashirvad.com/' },
  { position: 3, name: 'PNLGuard', url: 'https://pnlgaurd.sdeashirvad.com/' },
  { position: 4, name: 'SentryAI', url: 'https://sentryai.sdeashirvad.com/' },
  { position: 5, name: 'Veera', url: 'https://veera.sdeashirvad.com/' },
  { position: 6, name: 'GoForge', url: 'https://goforge.sdeashirvad.com/' },
  { position: 7, name: 'SpecSentinel', url: 'https://specsentinel.sdeashirvad.com/' },
] as const

const PRODUCT_DESCRIPTION =
  'Compare OpenAPI contracts, calculate deployment risk, enforce governance rules, and review changes locally, in CI, or directly in GitHub pull requests.'

function labsProductEcosystem() {
  return {
    '@type': 'ItemList',
    '@id': ENTITY_IDS.labsProductEcosystem,
    name: 'SDEAshirvad Labs Product Ecosystem',
    itemListElement: LABS_ECOSYSTEM_PRODUCTS.map(p => ({
      '@type': 'SoftwareApplication',
      position: p.position,
      name: p.name,
      url: p.url,
    })),
  }
}

function specsentinelSoftware() {
  return {
    '@type': 'SoftwareApplication',
    '@id': ENTITY_IDS.specsentinelSoftware,
    name: 'SpecSentinel',
    alternateName: 'specsentinel',
    url: BRAND.productUrl,
    applicationCategory: 'DeveloperApplication',
    applicationSubCategory: 'API Contract Intelligence',
    operatingSystem: 'Windows, macOS, Linux',
    description: PRODUCT_DESCRIPTION,
    softwareVersion: BRAND.npmVersion,
    author: { '@id': ENTITY_IDS.person },
    creator: { '@id': ENTITY_IDS.organization },
    publisher: { '@id': ENTITY_IDS.organization },
    maintainer: { '@id': ENTITY_IDS.organization },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    downloadUrl: BRAND.npmUrl,
    installUrl: BRAND.npmUrl,
    codeRepository: BRAND.githubUrl,
    documentation: BRAND.docsUrl,
    sameAs: [BRAND.githubUrl, BRAND.npmUrl, BRAND.docsUrl, BRAND.productUrl],
    isPartOf: { '@id': ENTITY_IDS.labsProductEcosystem },
  }
}

function specsentinelWebsite() {
  return {
    '@type': 'WebSite',
    '@id': ENTITY_IDS.specsentinelWebsite,
    url: BRAND.productUrl,
    name: 'SpecSentinel',
    description: PRODUCT_DESCRIPTION,
    publisher: { '@id': ENTITY_IDS.organization },
    author: { '@id': ENTITY_IDS.person },
    inLanguage: 'en-US',
  }
}

function homeWebPage() {
  return {
    '@type': 'WebPage',
    '@id': ENTITY_IDS.specsentinelHomeWebPage,
    url: BRAND.productUrl,
    name: 'SpecSentinel — Catch API breaking changes before production',
    description: PRODUCT_DESCRIPTION,
    isPartOf: { '@id': ENTITY_IDS.specsentinelWebsite },
    about: { '@id': ENTITY_IDS.specsentinelSoftware },
    mainEntity: { '@id': ENTITY_IDS.specsentinelSoftware },
    publisher: { '@id': ENTITY_IDS.organization },
    inLanguage: 'en-US',
  }
}

function studioWebPage() {
  return {
    '@type': 'WebPage',
    '@id': ENTITY_IDS.specsentinelStudioWebPage,
    url: `${BRAND.productUrl}studio`,
    name: 'SpecSentinel Studio',
    description:
      'Interactive OpenAPI contract diff playground, governance lab, report explorer, and CI/CD preview for SpecSentinel.',
    isPartOf: { '@id': ENTITY_IDS.specsentinelWebsite },
    about: { '@id': ENTITY_IDS.specsentinelSoftware },
    mainEntity: { '@id': ENTITY_IDS.specsentinelSoftware },
    publisher: { '@id': ENTITY_IDS.organization },
    inLanguage: 'en-US',
  }
}

export function getHomeStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [labsProductEcosystem(), specsentinelSoftware(), specsentinelWebsite(), homeWebPage()],
  }
}

export function getStudioStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [labsProductEcosystem(), specsentinelSoftware(), specsentinelWebsite(), studioWebPage()],
  }
}
