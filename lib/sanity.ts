import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Product type to match your current product structure
export interface SanityProduct {
  _id: string
  _type: 'product'
  name: string
  slug: {
    current: string
  }
  price: number
  comparePrice?: number
  description: string
  images: Array<{
    asset: {
      _ref: string
      _type: 'reference'
    }
    _key: string
    hotspot?: {
      x: number
      y: number
      height: number
      width: number
    }
  }>
  alt: string
  content_id: string
  availability: 'in stock' | 'out of stock' | 'preorder'
  condition: 'new' | 'used' | 'refurbished'
  brand: string
  googleProductCategory?: string
}

// Transformed product type for your application
export interface Product {
  id: string
  name: string
  slug: string
  price: number
  comparePrice?: number
  description: string
  images: string[]
  alt: string
  content_id: string
  availability: 'in stock' | 'out of stock' | 'preorder'
  condition: 'new' | 'used' | 'refurbished'
  brand: string
  googleProductCategory?: string
}

// Transform Sanity product to your app's product format
export function transformSanityProduct(sanityProduct: SanityProduct): Product {
  return {
    id: sanityProduct.slug.current,
    name: sanityProduct.name,
    slug: sanityProduct.slug.current,
    price: sanityProduct.price,
    comparePrice: sanityProduct.comparePrice,
    description: sanityProduct.description,
    images: sanityProduct.images.map(img => urlFor(img).url()),
    alt: sanityProduct.alt,
    content_id: sanityProduct.content_id,
    availability: sanityProduct.availability,
    condition: sanityProduct.condition,
    brand: sanityProduct.brand,
    googleProductCategory: sanityProduct.googleProductCategory,
  }
}
