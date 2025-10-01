import { getProducts } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
    const products = await getProducts()

    return (
        <div className="bg-background min-h-screen">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-thin tracking-tight text-white mb-6">
                        Koleksioni Kundër Serbisë
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed mb-4">
                        Veshje për ata që mbajnë krenarinë shqiptare në zemër dhe nuk harrojnë 1999-në.
                    </p>
                    <p className="text-lg text-albanianRed font-medium max-w-2xl mx-auto leading-relaxed">
                        Koha për t&apos;u treguar kush jemi ka ardhur!
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {products.map((product, index) => (
                        <div key={index} className="group bg-gray-200 p-6">
                            <Link href={`/product/${product.slug}`}>
                                <div className="relative aspect-[3/4] overflow-hidden mb-6 ">
                                    <Image
                                        alt={product.alt}
                                        src={product?.images?.[0] || '/images/placeholder.jpg'}
                                        fill
                                        className="object-contain group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Price Badge */}
                                    <div className="absolute top-4 right-4 bg-white text-ultraBlack px-3 py-1 text-sm font-medium">
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
                            </Link>

                            {/* Product Info */}
                            <div className="space-y-3">
                                <h3 className="text-lg font-medium titleFont text-black group-hover:text-albanianRed transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {product.description.substring(0, 80)}...
                                </p>

                                {/* Category Badge */}
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-albanianRed rounded-full"></div>
                                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                                        {product.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <div className="mb-8">
                        <p className="text-xl text-albanianRed font-bold mb-4">
                            Ndeshja po afrohet!
                        </p>
                        <p className="text-lg text-gray-300">
                            Mbulo krenarinë shqiptare dhe trego botës se ne jemi këtu!
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Page;