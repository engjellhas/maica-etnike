import { NextResponse } from 'next/server'
import { getProductsForCatalog } from '@/lib/products'

// Function to escape XML content
function escapeXML(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

// Function to generate XML feed (RSS/Atom format for Facebook)
async function generateXMLFeed() {
  const products = await getProductsForCatalog()
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://maicaetnike.shop '
  
  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Maica Etnike Product Catalog</title>
    <link>${baseUrl}</link>
    <description>Handcrafted decorative accessories from Kosovo</description>
    <language>sq-XK</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${products.map(product => `
    <item>
      <g:id>${escapeXML(product.content_id || product.id)}</g:id>
      <title>${escapeXML(product.name)}</title>
      <g:description>${escapeXML(product.description)}</g:description>
      <g:availability>${escapeXML(product.availability)}</g:availability>
      <g:condition>${escapeXML(product.condition)}</g:condition>
      <g:price>${product.price} EUR</g:price>
      <link>${baseUrl}/product/${product.slug}</link>
      <g:image_link>${escapeXML(product.images[0] || '')}</g:image_link>
      <g:brand>${escapeXML(product.brand)}</g:brand>
      <g:google_product_category>${escapeXML(product.googleProductCategory || 'Home & Garden > Decor > Decorative Objects')}</g:google_product_category>
      <g:product_type>Decorative Accessories</g:product_type>
      <g:mpn>${escapeXML(product.content_id || product.id)}</g:mpn>
      <g:identifier_exists>false</g:identifier_exists>
    </item>`).join('')}
  </channel>
</rss>`
  
  return xmlContent
}

export async function GET() {
  try {
    const xmlFeed = await generateXMLFeed()
    
    return new NextResponse(xmlFeed, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400'
      }
    })
  } catch (error) {
    console.error('Error generating XML catalog feed:', error)
    return NextResponse.json(
      { error: 'Failed to generate XML catalog feed' },
      { status: 500 }
    )
  }
}

export async function HEAD() {
  return new NextResponse(null, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400'
    }
  })
}
