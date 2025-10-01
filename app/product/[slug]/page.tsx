import BackButton from "@/components/backButton";
import AddToCartButton from "@/components/cart/AddToCartButton";
import Collection from "@/components/collection";
import GalleryProduct from "@/components/galleryProduct";
import { getProductBySlug, getProductSlugs, getProducts } from '@/lib/products';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';

export async function generateStaticParams() {
    const slugs = await getProductSlugs()
    return slugs.map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        return {
            title: 'Produkti nuk u gjet',
            description: 'Produkti që kërkoni nuk ekziston.',
        };
    }

    return {
        title: `${product.name} Dekor | Maica Etnike`,
        description: product.description,
        openGraph: {
            title: `${product.name} Dekor | Maica Etnike`,
            description: product.description,
            images: [
                {
                    url: product.images[0],
                    alt: product.alt,
                },
            ],
        },
    };
}

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const [product, products] = await Promise.all([
        getProductBySlug(slug),
        getProducts()
    ]);

    if (!product) {
        notFound(); // Redirects to 404 page
    }

    return (
        <>
            <Script id="fb-viewcontent" strategy="afterInteractive">
                {`
                  fbq('track', 'ViewContent', {
                    content_ids: ['${product.content_id}'],
                    content_type: 'product',
                    value: ${product.price},
                    currency: 'EUR'
                  });
                `}
            </Script>
            <div className={'max-w-7xl mx-auto px-6 '}>
                <BackButton />
            </div>
            <div className="bg- min-h-screen">
                <div className="max-w-7xl mx-auto px-6 py-8 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        
                        {/* Product Image */}
                        <div className="relative">
                            <div className="aspect-[3/4] relative overflow-hidden">
                                <GalleryProduct images={product.images} />
                                
                                {/* Floating Badge */}
                                <div className="absolute top-6 left-6 bg-white text-ultraBlack px-4 py-2">
                                    <div className="text-xs font-medium tracking-widest uppercase">
                                        Koleksioni i Ri
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-12">
                            {/* Product Title & Price */}
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-5xl font-thin tracking-tight text-white leading-tight">
                                    {product.name}
                                </h1>
                                
                                <div className="flex items-center space-x-6">
                                    {product.comparePrice && product.comparePrice > product.price && (
                                        <span className="text-lg text-gray-400 line-through">{product.comparePrice}€</span>
                                    )}
                                    <span className="text-3xl font-light text-white">{product.price}€</span>
                                </div>
                            </div>

                            {/* Product Description */}
                            <div className="space-y-4">
                                <div className="w-16 h-px bg-albanianRed"></div>
                                <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                                    {product.description}
                                </p>
                            </div>

                            {/* Size Selection & Add to Cart */}
                            <div className="space-y-8">
                                <AddToCartButton
                                    product={product}
                                    className="w-full"
                                />
                            </div>

                            {/* Product Care */}
                            <div className="space-y-6 pt-8 border-t border-white/10">
                                <h3 className="text-lg font-medium text-white uppercase tracking-wider">
                                    Shqipëri
                                </h3>
                                <div className="space-y-3">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-400 leading-relaxed">
                                            E krijuar me dorë me materiale premium për cilësi të qëndrueshme
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-400 leading-relaxed">
                                            Pastro me makinë në ujë të ftohtë, thaj në temperaturë të ulët
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-gray-400 leading-relaxed">
                                            Shmang përdorimin e detergjentëve të fortë për të ruajtur integritetin e dizajnit
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                                <div>
                                    <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-2">
                                        Kategoria
                                    </h4>
                                    <p className="text-gray-400 capitalize">{product.category}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-white uppercase tracking-wider mb-2">
                                        Marka
                                    </h4>
                                    <p className="text-gray-400">{product.brand}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Collection title={'Të ngjajshme'} bigText={false} products={products} />
            {/*<GalleryProduct images={images}/>*/}
        </>
    );
}
