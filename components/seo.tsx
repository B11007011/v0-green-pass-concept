import { Metadata } from "next"

interface SEOProps {
  title: string
  description: string
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    url?: string
    siteName?: string
    images?: {
      url: string
      width?: number
      height?: number
      alt?: string
    }[]
    type?: "website" | "article" | "profile"
  }
  twitter?: {
    card?: "summary" | "summary_large_image" | "app" | "player"
    site?: string
    title?: string
    description?: string
    image?: string
  }
  additionalMetaTags?: {
    name?: string
    property?: string
    content: string
  }[]
  additionalLinkTags?: {
    rel: string
    href: string
    sizes?: string
    type?: string
  }[]
}

/**
 * Generate standardized metadata for Next.js app
 */
export function generateMetadata({
  title,
  description,
  canonical,
  openGraph,
  twitter,
  additionalMetaTags,
  additionalLinkTags,
}: SEOProps): Metadata {
  return {
    title,
    description,
    metadataBase: canonical ? new URL(canonical) : undefined,
    alternates: {
      canonical: canonical ? "/" : undefined,
    },
    openGraph: openGraph
      ? {
          title: openGraph.title || title,
          description: openGraph.description || description,
          url: openGraph.url,
          siteName: openGraph.siteName,
          images: openGraph.images,
          type: openGraph.type || "website",
        }
      : undefined,
    twitter: twitter
      ? {
          card: twitter.card || "summary",
          site: twitter.site,
          title: twitter.title || title,
          description: twitter.description || description,
          images: twitter.image,
        }
      : undefined,
    ...(additionalMetaTags
      ? {
          other: additionalMetaTags.reduce(
            (acc, tag) => ({
              ...acc,
              [tag.name || tag.property || ""]: tag.content,
            }),
            {}
          ),
        }
      : {}),
  }
}

/**
 * Generate JSON-LD structured data for rich search results
 */
export function generateStructuredData({
  type,
  data,
}: {
  type: "Organization" | "LocalBusiness" | "Person" | "WebSite" | "WebPage" | "Product" | "Article" | "BreadcrumbList"
  data: Record<string, any>
}) {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    }),
  }
}

/**
 * Structured data component for React
 */
export function StructuredData({
  type,
  data,
}: {
  type: "Organization" | "LocalBusiness" | "Person" | "WebSite" | "WebPage" | "Product" | "Article" | "BreadcrumbList"
  data: Record<string, any>
}) {
  return (
    <script
      key={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={generateStructuredData({ type, data })}
    />
  )
} 