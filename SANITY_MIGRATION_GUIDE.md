# Sanity Migration Guide for Maica Etnike

This guide will help you migrate from your hardcoded products to Sanity.io.

## Prerequisites

1. **Install dependencies** (if npm install had issues, try these one by one):
   ```bash
   npm install @sanity/client @sanity/image-url groq next-sanity sanity
   ```

2. **Create a Sanity account and project**:
   - Go to [sanity.io](https://sanity.io) and sign up/login
   - Create a new project
   - Choose "Blank project" template
   - Note your Project ID

## Step 1: Environment Setup

1. Create a `.env.local` file in your project root:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_token_here
   ```

2. Get your **Project ID**:
   - From Sanity dashboard > Settings > API

3. Get an **API Token** (for writing data):
   - Sanity dashboard > Settings > API > Tokens
   - Create new token with "Editor" permissions
   - Copy the token to your `.env.local`

## Step 2: Initialize Sanity Studio

```bash
npm run sanity:dev
```

This will open Sanity Studio at `http://localhost:3333` where your girlfriend can manage products.

## Step 3: Migration Options

### Option A: Automated Migration (Recommended)

Run the migration script to automatically upload all your existing products:

```bash
node scripts/migrate-products.js
```

This script will:
- Download images from Cloudinary
- Upload them to Sanity
- Create product documents with all your existing data

### Option B: Manual Migration

1. Open Sanity Studio at `http://localhost:3333`
2. Click "Product" to create a new product
3. Fill in the fields manually
4. Upload images directly through the interface

## Step 4: Update Your Next.js App

The migration is already set up to work with your existing cart and checkout system. The product IDs will use the `slug` field to maintain compatibility.

## Step 5: Test Everything

1. Start your Next.js app: `npm run dev`
2. Your products should now load from Sanity
3. Test cart functionality
4. Verify Facebook pixel tracking still works

## Managing Products via Sanity Studio

Your girlfriend can easily manage products by:

1. Running `npm run sanity:dev` 
2. Opening `http://localhost:3333`
3. Clicking "Product" to add/edit products
4. Uploading images by drag & drop
5. Setting availability, price, description, etc.

The interface is beginner-friendly with clear labels and helpful descriptions.

## Production Deployment

To deploy Sanity Studio:

```bash
npm run sanity:deploy
```

This creates a public URL where products can be managed from anywhere.

## Troubleshooting

- **Images not loading**: Check your Cloudinary URLs in the migration script
- **404 errors**: Verify your Project ID and dataset in `.env.local`
- **Permission errors**: Make sure your API token has "Editor" permissions
- **TypeScript errors**: Run `npm install` to ensure all dependencies are installed

## Facebook Catalog Feed

After migration, you'll have a new API endpoint at `/api/catalog-feed` that generates a product catalog feed from your Sanity data for Facebook/Meta advertising.
