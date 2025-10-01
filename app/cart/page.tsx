'use client'
import { useCart } from '@/contexts/CartContext';
import { TrashIcon } from '@heroicons/react/24/outline';
import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import Script from 'next/script';
import { useEffect, useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  slug: string;
  price: number;
  comparePrice?: number;
  images: string[];
  alt: string;
  quantity: number;
  content_id: string;
  size: string;
}

interface ShippingDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

const CartPage = () => {
  const { state, updateQuantity, removeFromCart, getTotalPrice, clearCart, clearOldCart, forceClearCart } = useCart();
  const cartItems: CartItem[] = state.items;

  const [isLoading, setIsLoading] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [cartError, setCartError] = useState<string>('');
  const [submittedOrder, setSubmittedOrder] = useState<{ items: CartItem[], total: number } | null>(null);

  // ✅ only keep valid items
  const validCartItems = cartItems.filter(item =>
    item.id && item.name && item.price && item.size
  );

  // warn if invalid
  useEffect(() => {
    if (cartItems.length > 0 && validCartItems.length !== cartItems.length) {
      setCartError('Disa produkte në shportë janë të dëmtuara. Ju lutem pastroni shportën.');
    } else {
      setCartError('');
    }
  }, [cartItems, validCartItems]);

  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'kosova',
  });

  const countries = [
    { code: 'kosova', name: 'Kosova', shippingFee: 2 },
    { code: 'shqiperi', name: 'Shqipëri', shippingFee: 5 },
    { code: 'maqedoni', name: 'Maqedoni e Veriut', shippingFee: 5 }
  ];

  const getShippingFee = () => {
    const country = countries.find(c => c.code === shippingDetails.country);
    return country ? country.shippingFee : 0;
  };

  const kosovoPostalCodes = Array.from({ length: 70 }, (_, i) => `${(i + 1) * 1000}`.padStart(5, '0'));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingDetails(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, phone, address, city, postalCode, country } = shippingDetails;

    if (!name || !email || !phone || !address || !city || !postalCode || !country) {
      alert('Ju lutem plotësoni të gjitha fushat.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Ju lutem vendosni një email të vlefshëm.');
      return false;
    }

    if (!/^[0-9+\- ]{7,15}$/.test(phone)) {
      alert('Ju lutem vendosni një numër telefoni të vlefshëm.');
      return false;
    }

    if (country === 'kosova' && !kosovoPostalCodes.includes(postalCode)) {
      alert('Ju lutem vendosni një kod postar të vlefshëm të Kosovës.');
      return false;
    }

    return true;
  };

  const handleSubmitOrder = async () => {
    if (!validateForm()) return;
    if (validCartItems.length === 0) {
      alert('Shporta është e zbrazët.');
      return;
    }

    setIsLoading(true);

    try {
      const orderData = {
        items: validCartItems,
        shippingDetails,
        subtotal: getTotalPrice(),
        shippingFee: getShippingFee(),
        total: getTotalPrice() + getShippingFee(),
        orderDate: new Date().toISOString(),
      };

      const response = await fetch('/api/submit-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        setSubmittedOrder({ items: validCartItems, total: orderData.total });
        setOrderSubmitted(true);
        clearCart();
      } else {
        throw new Error('Dështoi dërgimi i porosisë');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Ka ndodhur një gabim gjatë dërgimit të porosisë. Ju lutem provoni përsëri.');
    } finally {
      setIsLoading(false);
    }
  };

  const getSizeName = (sizeValue: string) => {
    return sizeValue.toUpperCase();
  };

  // Helper function to render images properly
  const renderImage = (imageUrl: string, alt: string) => {
    // Check if it's a Cloudinary URL
    if (imageUrl.includes('cloudinary.com')) {
      // Extract the public ID from Cloudinary URL
      const publicId = imageUrl.split('/').pop()?.split('.')[0];
      if (publicId) {
        return (
          <CldImage
            src={publicId}
            alt={alt}
            width={192}
            height={192}
            className="w-24 h-24 rounded-md object-cover object-center sm:w-48 sm:h-48"
          />
        );
      }
    }

    // Fallback to regular img tag for other image sources
    return (
      <Image
        src={imageUrl}
        alt={alt}
        width={100}
        height={100}
        className="rounded-md object-cover object-center"
      />
    );
  };

  // ✅ Order Confirmation Screen
  if (orderSubmitted && submittedOrder) {
    return (
      <>
        <Script id="fb-purchase" strategy="afterInteractive">
          {`
            fbq('track', 'Purchase', {
              value: ${submittedOrder.total.toFixed(2)},
              currency: 'EUR',
              contents: ${JSON.stringify(submittedOrder.items.map(item => ({ id: item.content_id, quantity: item.quantity })))},
              content_ids: ${JSON.stringify(submittedOrder.items.map(item => item.content_id))},
              content_type: 'product'
            });
          `}
        </Script>
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-md mx-auto text-center bg-gray-50 p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Porosia u dërgua!</h2>
            <p className="text-gray-600 mb-6">
              Faleminderit për porosinë tuaj. Do të kontaktoheni së shpejti në email-in e dhënë.
            </p>
            <button
              onClick={() => window.location.href = '/product'}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Vazhdo blerjen
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-ultraBlack">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-thin tracking-tight text-white mb-6">
            Shporta
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Rishikoni artikujt e zgjedhur dhe plotësoni porosinë tuaj.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto space-y-8">
              <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
                </svg>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-light text-white">Shporta juaj është e zbrazët</h2>
                <p className="text-gray-400 leading-relaxed">
                  Zbuloni koleksionin tonë të veshjeve premium etnike shqiptare.
                </p>
              </div>
              <button
                onClick={() => window.location.href = '/product'}
                className="btn-primary mx-auto"
              >
                Vazhdo Blerjen
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Cart Error Message */}
            {cartError && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-md p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-700">{cartError}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={clearOldCart}
                      className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                    >
                      Pastro shportën
                    </button>
                    <button
                      onClick={forceClearCart}
                      className="bg-red-800 text-white px-3 py-1 rounded text-sm hover:bg-red-900"
                    >
                      Pastro plotësisht
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="lg:grid lg:grid-cols-12 lg:gap-x-16 lg:items-start">
              {/* Cart Items */}
              <section aria-labelledby="cart-heading" className="lg:col-span-7">
                <h2 id="cart-heading" className="sr-only">Cart Items</h2>

                <div className="space-y-8">
                  {validCartItems.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex gap-6 py-8 border-b border-white/10">
                      <div className="flex-shrink-0">
                        {item.images && item.images.length > 0 ? (
                          <div className="w-24 h-32 relative overflow-hidden">
                            {renderImage(item.images[0], item.alt)}
                          </div>
                        ) : (
                          <div className="w-24 h-32 bg-white/10 flex items-center justify-center">
                            <span className="text-white/50 text-xs">No image</span>
                          </div>
                        )}
                      </div>

                      <div className="flex-1 flex justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-white mb-2">
                            {item.name}
                          </h3>
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="text-white">{item.price.toFixed(2)}€</span>
                            <span className="text-gray-400 text-sm">Size: {getSizeName(item.size)}</span>
                          </div>

                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                              className="w-8 h-8 border border-white/30 text-white flex items-center justify-center hover:border-white transition-colors"
                            >
                              -
                            </button>
                            <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                              className="w-8 h-8 border border-white/30 text-white flex items-center justify-center hover:border-white transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="flex flex-col items-end justify-between">
                          <button
                            onClick={() => removeFromCart(item.id, item.size)}
                            className="text-white/50 hover:text-white transition-colors mb-4"
                          >
                            <TrashIcon className="w-5 h-5" />
                          </button>
                          <span className="text-lg font-medium text-white">
                            {(item.price * item.quantity).toFixed(2)}€
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Order Summary & Shipping */}
              <section
                aria-labelledby="summary-heading"
                className="lg:col-span-5"
              >
                <div className="bg-white/5 backdrop-blur-sm p-8">
                  <h2 id="summary-heading" className="text-xl font-medium text-white mb-8">
                    Detajet e Dërgesës
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-white uppercase tracking-wider mb-2">
                        Shteti
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={shippingDetails.country}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-3 focus:outline-none focus:border-white transition-colors"
                        required
                      >
                        {countries.map((country) => (
                          <option key={country.code} value={country.code} className="bg-ultraBlack text-white">
                            {country.name} (+{country.shippingFee}€ shipping)
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white uppercase tracking-wider mb-2">
                        Emri i Plotë
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={shippingDetails.name}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-3 focus:outline-none focus:border-white transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white uppercase tracking-wider mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={shippingDetails.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-3 focus:outline-none focus:border-white transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white uppercase tracking-wider mb-2">
                        Telefoni
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={shippingDetails.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-3 focus:outline-none focus:border-white transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-white uppercase tracking-wider mb-2">
                        Adresa
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        rows={3}
                        value={shippingDetails.address}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-white uppercase tracking-wider mb-2">
                          Qyteti
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={shippingDetails.city}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-3 focus:outline-none focus:border-white transition-colors"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="postalCode" className="block text-sm font-medium text-white uppercase tracking-wider mb-2">
                          Kodi Postar
                        </label>
                        <input
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          value={shippingDetails.postalCode}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-3 focus:outline-none focus:border-white transition-colors"
                          placeholder="e.g. 10000"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6 mt-8">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Nëntotali</span>
                        <span>{getTotalPrice().toFixed(2)}€</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Transporti ({countries.find(c => c.code === shippingDetails.country)?.name})</span>
                        <span>{getShippingFee().toFixed(2)}€</span>
                      </div>
                      <div className="flex justify-between text-lg font-medium text-white pt-3 border-t border-white/10">
                        <span>Totali</span>
                        <span>{(getTotalPrice() + getShippingFee()).toFixed(2)}€</span>
                      </div>
                    </div>

                    <p className="mt-4 text-xs text-gray-500">
                      * Porositë arrinë brenda 3-7 ditëve të punës.
                    </p>
                  </div>

                  <button
                    onClick={handleSubmitOrder}
                    disabled={isLoading}
                    className="w-full py-4 px-8 text-sm font-medium uppercase tracking-wider transition-all duration-300 border border-white text-white hover:border-albanianRed hover:text-albanianRed focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                  >
                    {isLoading ? 'Duke Përpunuar...' : 'Plotëso Porosinë'}
                  </button>
                </div>
              </section>
            </div>
          </>
        )}
      </div>
    </div>
  );
};


export default CartPage; 