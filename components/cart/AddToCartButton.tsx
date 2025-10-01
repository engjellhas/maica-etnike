'use client'
import { useCart } from '@/contexts/CartContext';
import type { Product } from '@/lib/sanity';
import { CheckIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

const SIZES = [
  { name: 'S', value: 'S' },
  { name: 'M', value: 'M' },
  { name: 'L', value: 'L' },
  { name: 'XL', value: 'XL' },
  { name: 'XXL', value: 'XXL' },
];

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product, className = '' }) => {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedSizeError, setSelectedSizeError] = useState<string>('');

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSelectedSizeError('Ju lutem zgjidhni një madhësi para se të shtoni produktin në shportë.');
      return;
    }

    const cartItem = {
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      comparePrice: product.comparePrice,
      images: product.images,
      alt: product.alt,
      content_id: product.content_id,
      size: selectedSize,
    };

    addToCart(cartItem);
    setIsAdded(true);

    // Fire Meta Pixel AddToCart event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'AddToCart', {
        content_ids: [product.content_id],
        content_name: product.name,
        content_type: 'product',
        value: product.price,
        currency: 'EUR'
      });
    }

    // Reset the "added" state after 2 seconds
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Size Selection */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-white uppercase tracking-wider">
            Madhësia
          </h3>
          <div className="w-16 h-px bg-albanianRed"></div>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {SIZES.map((size) => (
            <button
              key={size.value}
              onClick={() => {
                setSelectedSize(size.value);
                setSelectedSizeError('');
              }}
              className={`px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 border ${
                selectedSize === size.value
                  ? 'border-white bg-white text-ultraBlack'
                  : 'border-white/30 text-white hover:border-white hover:bg-white/10'
              }`}
            >
              {size.name}
            </button>
          ))}
        </div>
        
        {selectedSizeError && (
          <p className="text-albanianRed text-sm mt-2">{selectedSizeError}</p>
        )}
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className={`w-full py-4 px-8 text-sm font-medium uppercase tracking-wider transition-all duration-300 border ${
          isAdded
            ? 'border-green-600 bg-green-600 text-white'
            : 'border-white text-white hover:border-albanianRed hover:text-albanianRed'
        } ${className}`}
      >
        <span className="flex items-center justify-center space-x-3">
          {isAdded ? (
            <>
              <CheckIcon className="w-5 h-5" />
              <span>Shtuar në Shportë</span>
            </>
          ) : (
            <>
              <ShoppingCartIcon className="w-5 h-5" />
              <span>Shto në Shportë</span>
            </>
          )}
        </span>
      </button>
    </div>
  );
};

export default AddToCartButton; 