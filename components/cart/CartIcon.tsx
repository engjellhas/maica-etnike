'use client'
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/contexts/CartContext';

const CartIcon = () => {
  const { getTotalItems, openCart } = useCart();
  const totalItems = getTotalItems();

  return (
    <button
      onClick={openCart}
      className="relative   p-2 inline-flex items-center text-white hover:text-albanianRed transition-colors"
      aria-label="Open cart"
    >
      <ShoppingBagIcon className="h-6 w-6" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-albanianRed text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </button>
  );
};

export default CartIcon; 