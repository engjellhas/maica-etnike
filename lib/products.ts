import { 
  getAllProducts, 
  getProductBySlug as getProductBySlugFromData, 
  getAllProductSlugs, 
  getProductsForCatalog as getProductsForCatalogFromData,
  type Product 
} from '../utilies/product'

// Fetch all products
export async function getProducts(): Promise<Product[]> {
  try {
    return getAllProducts()
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

// Fetch a single product by slug
export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    return getProductBySlugFromData(slug)
  } catch (error) {
    console.error(`Error fetching product with slug ${slug}:`, error)
    return null
  }
}

// Get all product slugs for static generation
export async function getProductSlugs(): Promise<string[]> {
  try {
    return getAllProductSlugs()
  } catch (error) {
    console.error('Error fetching product slugs:', error)
    return []
  }
}

// Fetch products for catalog feed (optimized query)
export async function getProductsForCatalog(): Promise<Product[]> {
  try {
    return getProductsForCatalogFromData()
  } catch (error) {
    console.error('Error fetching products for catalog:', error)
    return []
  }
}
