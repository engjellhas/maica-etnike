'use client'
import React, { createContext, useContext, useReducer, useEffect } from 'react';

export interface CartItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  comparePrice?: number;
  images: string[];
  alt: string;
  quantity: number;
  content_id: string;
  size: string; // Add size field
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

interface CartContextType {
  state: CartState;
  addToCart: (product: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  clearCart: () => void;
  clearOldCart: () => void;
  forceClearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_FROM_CART'; payload: { id: string; size: string } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; size: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'OPEN_CART' }
  | { type: 'CLOSE_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Create a unique ID that includes size to treat same product with different sizes as separate items
      const existingItem = state.items.find(item => 
        item.id === action.payload.id && item.size === action.payload.size
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && item.size === action.payload.size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => 
          !(item.id === action.payload.id && item.size === action.payload.size)
        ),
      };

    case 'UPDATE_QUANTITY':
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => 
            !(item.id === action.payload.id && item.size === action.payload.size)
          ),
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.size === action.payload.size
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
      };

    case 'OPEN_CART':
      return {
        ...state,
        isOpen: true,
      };

    case 'CLOSE_CART':
      return {
        ...state,
        isOpen: false,
      };

    case 'LOAD_CART':
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    isOpen: false,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('maica-cart');
      if (savedCart) {
        const cartItems = JSON.parse(savedCart);
        // Handle backward compatibility for existing cart items without size field
        const migratedItems = cartItems
          .filter((item: any) => 
            // Only keep items that have all required fields
            item.id && item.name && item.price && item.images && item.images.length > 0
          )
          .map((item: any) => ({
            ...item,
            size: item.size || item.color || 'M', // Default to 'M' for existing items, fallback to color if exists
            // Ensure all required fields are present
            id: item.id || '',
            name: item.name || '',
            slug: item.slug || '',
            price: item.price || 0,
            images: item.images || [],
            alt: item.alt || '',
            content_id: item.content_id || '',
            quantity: item.quantity || 1
          }));
        
        if (migratedItems.length > 0) {
          dispatch({ type: 'LOAD_CART', payload: migratedItems });
        } else {
          // If no valid items, clear the cart
          localStorage.removeItem('maica-cart');
        }
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      // Clear corrupted cart data
      localStorage.removeItem('maica-cart');
    }
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    try {
      localStorage.setItem('maica-cart', JSON.stringify(state.items));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [state.items]);

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (id: string, size: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id, size } });
  };

  const updateQuantity = (id: string, size: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, size, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    // Also clear localStorage
    try {
      localStorage.removeItem('maica-cart');
    } catch (error) {
      console.error('Error clearing cart from localStorage:', error);
    }
  };

  const clearOldCart = () => {
    // Clear old cart data that might be incompatible
    try {
      localStorage.removeItem('maica-cart');
    } catch (error) {
      console.error('Error clearing old cart from localStorage:', error);
    }
    dispatch({ type: 'CLEAR_CART' });
  };

  const forceClearCart = () => {
    // Force clear cart and localStorage completely
    try {
      localStorage.removeItem('maica-cart');
      sessionStorage.removeItem('maica-cart');
    } catch (error) {
      console.error('Error force clearing cart:', error);
    }
    dispatch({ type: 'CLEAR_CART' });
  };

  const openCart = () => {
    dispatch({ type: 'OPEN_CART' });
  };

  const closeCart = () => {
    dispatch({ type: 'CLOSE_CART' });
  };

  const getTotalItems = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        clearOldCart,
        forceClearCart,
        openCart,
        closeCart,
        getTotalItems,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}; 