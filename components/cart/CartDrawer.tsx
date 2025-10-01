'use client'
import { useCart } from '@/contexts/CartContext';
import { Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react';
import { TrashIcon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { CldImage } from 'next-cloudinary';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

const CartDrawer = () => {
  const { state, closeCart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

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
            width={96}
            height={96}
            className="h-full w-full object-cover object-center"
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
        className="h-full w-full object-cover object-center"
      />
    );
  };

  return (
    <Transition show={state.isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeCart}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <DialogPanel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-ultraBlack shadow-xl">
                    <div className="flex-1 overflow-y-auto px-6 py-8">
                      <div className="flex items-start justify-between">
                        <DialogTitle className="text-xl font-medium text-white">
                          Shporta juaj
                        </DialogTitle>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative -m-2 p-2 text-white/50 hover:text-white transition-colors"
                            onClick={closeCart}
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="space-y-6">
                          {state.items.length === 0 ? (
                            <div className="text-center py-12">
                              <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l-1 12H6L5 9z" />
                                </svg>
                              </div>
                              <p className="text-white/70">Shporta është e zbrazët</p>
                            </div>
                          ) : (
                            <div className="space-y-6">
                              {state.items.map((item) => (
                                <div key={`${item.id}-${item.size}`} className="flex gap-4 py-4 border-b border-white/10">
                                  <div className="w-20 h-24 flex-shrink-0 overflow-hidden">
                                    {item.images && item.images.length > 0 ? (
                                      renderImage(item.images[0], item.alt)
                                    ) : (
                                      <div className="h-full w-full bg-white/10 flex items-center justify-center">
                                        <span className="text-white/50 text-xs">No image</span>
                                      </div>
                                    )}
                                  </div>

                                  <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                      <h3 className="text-sm font-medium text-white mb-1">
                                        <Link href={`/product/${item.slug}`} onClick={closeCart}>
                                          {item.name}
                                        </Link>
                                      </h3>
                                      <div className="flex items-center space-x-3 text-xs text-white/70">
                                        <span>Madhësia: {getSizeName(item.size)}</span>
                                        <span>{item.price.toFixed(2)}€</span>
                                      </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between mt-3">
                                      <div className="flex items-center space-x-2">
                                        <button
                                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                                          className="w-6 h-6 border border-white/30 text-white flex items-center justify-center hover:border-white transition-colors text-sm"
                                        >
                                          -
                                        </button>
                                        <span className="text-white text-sm w-6 text-center">{item.quantity}</span>
                                        <button
                                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                                          className="w-6 h-6 border border-white/30 text-white flex items-center justify-center hover:border-white transition-colors text-sm"
                                        >
                                          +
                                        </button>
                                      </div>

                                      <button
                                        type="button"
                                        onClick={() => removeFromCart(item.id, item.size)}
                                        className="text-white/50 hover:text-white transition-colors"
                                      >
                                        <TrashIcon className="w-4 h-4" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {state.items.length > 0 && (
                      <div className="border-t border-white/10 px-6 py-6">
                        <div className="flex justify-between text-lg font-medium text-white mb-2">
                          <span>Totali</span>
                          <span>{getTotalPrice().toFixed(2)}€</span>
                        </div>
                        <p className="text-sm text-white/70 mb-6">
                          Transporti do të llogaritet gjatë checkout.
                        </p>
                        <div className="space-y-3">
                          <Link
                            href="/cart"
                            onClick={closeCart}
                            className="w-full py-3 px-6 text-sm font-medium uppercase tracking-wider transition-all duration-300 border border-white text-white hover:border-albanianRed hover:text-albanianRed flex items-center justify-center"
                          >
                            Shko tek Checkout
                          </Link>
                          <button
                            type="button"
                            className="w-full text-sm text-white/70 hover:text-white transition-colors"
                            onClick={closeCart}
                          >
                            Vazhdo blerjen
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </DialogPanel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CartDrawer; 