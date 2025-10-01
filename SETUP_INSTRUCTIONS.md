# 🚀 Sanity Setup Instructions

## Step 1: Create Sanity Project

1. **Go to [sanity.io](https://sanity.io)** and sign up/login
2. **Create a new project**:
   - Click "Create new project" 
   - Choose "Blank project" template
   - Name it "Maica Etnike" or similar
   - **Save your Project ID** (you'll need this)

## Step 2: Environment Setup

Create a `.env.local` file in your project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_write_token_here
```

### Get Your API Token:
1. In Sanity dashboard → Settings → API → Tokens
2. "Add API Token"
3. Name: "Migration Token"
4. Permissions: **Editor**
5. Copy the token to your `.env.local`

## Step 3: Test Your Setup

Try running the migration script:
```bash
node scripts/migrate-products.js
```

If you get an environment error, you can test the basic connection first:

```bash
npm run sanity:dev
```

This should open Sanity Studio at `http://localhost:3333`.

## Step 4: Run Migration

Once your `.env.local` is set up correctly:

```bash
node scripts/migrate-products.js
```

This will:
- ✅ Upload all 22 products
- ✅ Download images from Cloudinary  
- ✅ Upload them to Sanity
- ✅ Create product documents

## Step 5: Verify Migration

1. **Check Sanity Studio**: `http://localhost:3333`
2. **Check your website**: `npm run dev` → `http://localhost:3000`

## Troubleshooting

**"Cannot find module" errors**: Run `npm install`

**"Project not found" errors**: Check your Project ID in `.env.local`

**"Permission denied" errors**: Make sure your API token has "Editor" permissions

**Image upload fails**: Some Cloudinary URLs might be private - you can manually upload those images in Sanity Studio

## Success! 🎉

Once migration is complete:
- Your website loads products from Sanity
- Your girlfriend can manage products at `http://localhost:3333`
- Cart and checkout work exactly the same
- Facebook tracking still works
- API feeds are available at `/api/catalog-feed`

---

**Need help?** The migration script will show detailed progress and any errors.
