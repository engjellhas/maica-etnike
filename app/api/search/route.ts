import { NextRequest, NextResponse } from 'next/server';
import { getAllProducts } from '@/utilies/product';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const query = searchParams.get('q');

        if (!query || query.trim().length < 2) {
            return NextResponse.json({ products: [] });
        }

        const products = getAllProducts();
        const searchTerm = query.toLowerCase().trim();

        // Search in product name, description, and category
        const filteredProducts = products.filter(product => {
            const name = product.name.toLowerCase();
            const description = product.description?.toLowerCase() || '';
            const category = product.category?.toLowerCase() || '';
            
            return (
                name.includes(searchTerm) ||
                description.includes(searchTerm) ||
                category.includes(searchTerm)
            );
        });

        // Limit results to 8 for dropdown
        const limitedResults = filteredProducts.slice(0, 8);

        return NextResponse.json({ 
            products: limitedResults,
            total: filteredProducts.length
        });

    } catch (error) {
        console.error('Search API error:', error);
        return NextResponse.json(
            { error: 'Search failed' }, 
            { status: 500 }
        );
    }
}
