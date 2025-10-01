import { NextResponse } from 'next/server'
import { getProducts } from '@/lib/products' // Use the working function

// Function to escape CSV fields
function escapeCSV(field: string): string {
  if (!field) return ''
  if (field.includes(',') || field.includes('"') || field.includes('\n')) {
    return `"${field.replace(/"/g, '""')}"`
  }
  return field
}

// Function to generate CSV format
async function generateCSVFeed() {
  const products = await getProducts() // Use the working function
  
  console.log('🔍 CSV Generation Debug:')
  console.log('📦 Products fetched:', products.length)
  console.log('📊 First product:', products[0])
  
  const headers = [
    'id',
    'title', 
    'description',
    'availability',
    'condition',
    'price',
    'link',
    'image_link',
    'brand',
    'google_product_category'
  ]
  
  const rows = products.map(product => {
    console.log(' Processing product:', product.name)
    return [
      escapeCSV(product.content_id || product.id),
      escapeCSV(product.name),
      escapeCSV(product.description),
      escapeCSV(product.availability),
      escapeCSV(product.condition),
      `${product.price} EUR`,
      escapeCSV(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/product/${product.slug}`),
      escapeCSV(product.images[0] || ''),
      escapeCSV(product.brand),
      escapeCSV(product.googleProductCategory || 'Home & Garden > Decor > Decorative Objects')
    ]
  })
  
  console.log('📋 Rows generated:', rows.length)
  
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n')
  
  console.log(' CSV content length:', csvContent.length)
  console.log(' CSV preview:', csvContent.substring(0, 300))
  
  return csvContent
}

// Function to generate JSON format
async function generateJSONFeed() {
  const products = await getProducts() // Use the working function
  
  return products.map(product => ({
    id: product.content_id || product.id,
    title: product.name,
    description: product.description,
    availability: product.availability,
    condition: product.condition,
    price: `${product.price} EUR`,
    link: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/product/${product.slug}`,
    image_link: product.images[0] || '',
    brand: product.brand,
    google_product_category: product.googleProductCategory || 'Home & Garden > Decor > Decorative Objects'
  }))
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const format = searchParams.get('format') || 'csv'
    
    if (format === 'json') {
      const jsonFeed = await generateJSONFeed()
      
      return NextResponse.json(jsonFeed, {
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400'
        }
      })
    } else {
      // Default to CSV
      const csvFeed = await generateCSVFeed()
      
      return new NextResponse(csvFeed, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': 'attachment; filename="product-catalog.csv"',
          'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400'
        }
      })
    }
  } catch (error) {
    console.error('Error generating catalog feed:', error)
    return NextResponse.json(
      { error: 'Failed to generate catalog feed' },
      { status: 500 }
    )
  }
}

export async function HEAD() {
  // Same as GET but without body, useful for checking if the endpoint is available
  return new NextResponse(null, {
    headers: {
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400'
    }
  })
}