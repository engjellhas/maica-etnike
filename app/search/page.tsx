import { getAllProducts } from '@/utilies/product';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

interface SearchPageProps {
    searchParams: Promise<{ q?: string }>;
}

async function SearchResults({ query }: { query: string }) {
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

    return (
        <div className="min-h-screen bg-ultraBlack">
            <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
                
                {/* Search Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-thin text-white mb-6">
                        Rezultatet e Kërkimit
                    </h1>
                    <p className="text-xl text-gray-400 mb-4">
                        Kërkohet për: <span className="text-albanianRed font-bold">&quot;{query}&quot;</span>
                    </p>
                    <p className="text-lg text-gray-500">
                        {filteredProducts.length} produkt{filteredProducts.length !== 1 ? 'e' : ''} u gjet{filteredProducts.length !== 1 ? 'ën' : ''}
                    </p>
                </div>

                {/* Results */}
                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product, index) => (
                            <Link key={index} href={`/product/${product.slug}`}>
                                <div className="bg-gray-200 group bg-white/5 backdrop-blur-sm border  border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-albanianRed/20">
                                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-200">
                                        <Image
                                            alt={product.alt}
                                            src={product?.images?.[0] || '/images/placeholder.jpg'}
                                            fill
                                            className="object-contain group-hover:scale-105 transition-transform duration-500"
                                        />
                                        
                                        {/* Price Badge */}
                                        <div className="absolute top-4 right-4 px-3 py-1 text-sm font-medium rounded">
                                            {product.comparePrice && product.comparePrice > product.price ? (
                                                <div className="text-center">
                                                    <span className="line-through text-gray-500 text-xs block">{product.comparePrice}€</span>
                                                    <span className="text-albanianRed font-bold">{product.price}€</span>
                                                </div>
                                            ) : (
                                                <span>{product.price}€</span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Product Info */}
                                    <div className="p-6 space-y-3 bg-gray-200">
                                        <h3 className="text-lg  font-medium text-black group-hover:text-albanianRed transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                                            {product.description}
                                        </p>

                                        {/* Category Badge */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-2 h-2 bg-albanianRed rounded-full"></div>
                                                <span className="text-xs text-gray-500 uppercase tracking-wider">
                                                    {product.category}
                                                </span>
                                            </div>
                                            
                                            {/* View Button */}
                                            <button className="text-xs text-albanianRed hover:text-albanianGold transition-colors font-medium uppercase tracking-wider">
                                                Shiko →
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    /* No Results */
                    <div className="text-center py-20">
                        <div className="max-w-md mx-auto">
                            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-medium text-white mb-4">
                                Nuk u gjet asgjë
                            </h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                Nuk u gjet asnjë produkt për kërkesën tuaj. Provo me fjalë të tjera ose shiko koleksionin tonë të plotë.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/product">
                                    <button className="btn-primary px-8 py-3">
                                        Shiko Koleksionin
                                    </button>
                                </Link>
                                <Link href="/">
                                    <button className="btn-secondary px-8 py-3">
                                        Kthehu në Faqen Kryesore
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}

                {/* Back to Products */}
                {filteredProducts.length > 0 && (
                    <div className="text-center mt-16">
                        <Link href="/product">
                            <button className="btn-secondary px-8 py-3">
                                Shiko Koleksionin e Plotë
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
    const { q } = await searchParams;
    const query = q || '';

    return (
        <Suspense fallback={
            <div className="min-h-screen bg-ultraBlack flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-albanianRed mx-auto mb-4"></div>
                    <p className="text-gray-400">Kërkohet...</p>
                </div>
            </div>
        }>
            <SearchResults query={query} />
        </Suspense>
    );
}
