# Product System Documentation

## Overview

This project now uses a local product data system instead of Sanity CMS. All product data is stored in `utilies/product.ts` and can be easily exported to CSV format for Meta (Facebook) advertising.

## Product Data Structure

Each product contains the following fields:

### Core Fields
- `id`: Unique product identifier
- `name`: Product name
- `slug`: URL-friendly product identifier
- `price`: Current price in EUR
- `comparePrice`: Original price (optional, for showing discounts)
- `description`: Product description
- `images`: Array of image URLs
- `alt`: Alt text for images
- `content_id`: Unique ID for Meta/Facebook catalog
- `availability`: 'in stock' | 'out of stock' | 'preorder'
- `condition`: 'new' | 'used' | 'refurbished'
- `brand`: Brand name
- `googleProductCategory`: Google product category
- `sizes`: Available sizes array
- `category`: Product category ('t-shirt' | 'hoodie' | 'accessories')
- `tags`: Array of search tags

### Meta-Specific Fields
- `metaTitle`: SEO-optimized title for Meta
- `metaDescription`: SEO-optimized description
- `metaKeywords`: SEO keywords

## Current Products

The system includes 8 Albanian ethnic clothing products:

1. **SHQIPËRIA Flag T-Shirt** - Premium cotton t-shirt with Albanian flag
2. **Eagle Double-Headed Hoodie** - Heavyweight hoodie with Albanian eagle
3. **Kombëtarja Jersey 2024** - Official-style national team jersey
4. **Ultra Scarf Red & Black** - Traditional ultra scarf in Albanian colors
5. **Shqiponja T-Shirt** - Classic t-shirt with Albanian eagle
6. **Dritare e Shqipërisë Hoodie** - Hoodie with "Window of Albania" design
7. **Kuq e Zi T-Shirt** - Simple red and black Albanian colors t-shirt
8. **Ultra Cap Albania** - Baseball cap with Albanian flag

## Available Functions

### Product Retrieval
```typescript
import { getAllProducts, getProductBySlug, getProductsByCategory } from '../utilies/product';

// Get all products
const products = getAllProducts();

// Get specific product
const product = getProductBySlug('shqiperia-flag-t-shirt');

// Get products by category
const tshirts = getProductsByCategory('t-shirt');
```

### Search and Filtering
```typescript
import { searchProducts, getProductsByAvailability } from '../utilies/product';

// Search products
const results = searchProducts('eagle');

// Filter by availability
const inStockProducts = getProductsByAvailability('in stock');
```

## Meta CSV Export

### Export Functions
```typescript
import { exportProductsForMeta, exportProductsAsCSV } from '../utilies/product';

// Get Meta-formatted data
const metaData = exportProductsForMeta();

// Get CSV string
const csvString = exportProductsAsCSV();
```

### Command Line Export
```bash
# Export CSV for Meta
npm run export:meta
```

This command will:
1. Generate a CSV file in the `exports/` directory
2. Create a JSON version for reference
3. Show export statistics and sample data

### CSV Format for Meta

The exported CSV includes these columns:
- `id`: Product content ID
- `title`: Meta-optimized title
- `description`: Meta-optimized description
- `availability`: Stock status
- `condition`: Product condition
- `price`: Price with currency
- `link`: Product URL
- `image_link`: Primary product image
- `brand`: Brand name
- `google_product_category`: Google category
- `custom_label_0`: Product category
- `custom_label_1`: Tags (comma-separated)

## Adding New Products

To add a new product:

1. Open `utilies/product.ts`
2. Add a new product object to the `products` array
3. Include all required fields
4. Ensure unique `id`, `slug`, and `content_id`
5. Add appropriate images to the `public/images/Products/` directory
6. Update the image paths in the `images` array

### Example New Product:
```typescript
{
  id: 'new-product-slug',
  name: 'New Product Name',
  slug: 'new-product-slug',
  price: 29.99,
  comparePrice: 39.99,
  description: 'Product description...',
  images: [
    '/images/Products/New-Product-1.jpg',
    '/images/Products/New-Product-2.jpg'
  ],
  alt: 'New Product Alt Text',
  content_id: 'new_product_content_id_009',
  availability: 'in stock',
  condition: 'new',
  brand: 'SHQIPËRIA ULTRA',
  googleProductCategory: 'Apparel & Accessories > Clothing',
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  category: 't-shirt',
  tags: ['new', 'albanian', 'patriotic'],
  metaTitle: 'SEO Optimized Title',
  metaDescription: 'SEO optimized description',
  metaKeywords: 'keywords, for, seo'
}
```

## File Structure

```
utilies/
├── product.ts          # Main product data and functions

scripts/
├── export-meta-csv.ts  # TypeScript export script
└── export-meta-csv.js  # JavaScript export script

exports/
├── meta-catalog-YYYY-MM-DD.csv   # Generated CSV files
└── meta-catalog-YYYY-MM-DD.json  # Generated JSON files
```

## Benefits of This System

1. **No External Dependencies**: No need for Sanity CMS
2. **Fast Performance**: Local data loading
3. **Easy CSV Export**: Built-in Meta catalog export
4. **Version Control**: Product data is tracked in Git
5. **Type Safety**: Full TypeScript support
6. **Flexible**: Easy to add/modify products
7. **SEO Ready**: Built-in Meta optimization fields

## Migration Notes

- The system maintains compatibility with existing product pages
- All existing functions work the same way
- No changes needed to React components
- Product images should be added to `public/images/Products/`
- Update image references in the product data accordingly
