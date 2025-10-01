'use client'

import CartIcon from "@/components/cart/CartIcon";
import TopSwiper from "@/components/topSwiper";
import { Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline';
import Link from "next/link";
import { Fragment, useState } from 'react';

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-ultraBlack/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
            <TopSwiper title="Serbi, Serbi Q*fsha Motren" />
            <nav aria-label="Global" className="max-w-7xl mx-auto flex container items-center justify-between
            px-6 lg:px-8 py-6">
                {/* Left Navigation */}
                <div className="flex justify-center items-center gap-x-8">
                    <Link href="/" className="text-2xl font-thin tracking-wider text-albanianRed titleFont">
                        Maica Etnike
                    </Link>
                    <Link href="/product" className="hidden lg:block text-sm text-white hover:text-albanianRed transition-colors font-medium uppercase tracking-wider">
                        Kundër Serbisë
                    </Link>
                    <Link href="/product" className="hidden lg:block text-sm text-white hover:text-albanianRed transition-colors font-medium uppercase tracking-wider">
                        Krenaria 1999
                    </Link>
                </div>
                <div className="hidden lg:flex lg:gap-x-8">

                </div>

                {/* Center Logo */}

                {/* Right Navigation */}
                <div className="flex items-center gap-8">
                    <CartIcon />

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="text-white hover:text-albanianRed transition-colors p-2"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                </div>
            </nav>
            <Transition show={mobileMenuOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={setMobileMenuOpen}>
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
                                                    <DialogTitle className="text-xl font-thin tracking-wider text-white">
                                                        Maica Etnike
                                                    </DialogTitle>
                                                    <div className="ml-3 flex h-7 items-center">
                                                        <button
                                                            type="button"
                                                            className="relative -m-2 p-2 text-white/50 hover:text-white transition-colors"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            <span className="absolute -inset-0.5" />
                                                            <span className="sr-only">Close menu</span>
                                                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="mt-8">
                                                    <div className="space-y-6">
                                                        <Link
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            href="/"
                                                            className="block py-4 text-lg text-white hover:text-albanianRed transition-colors font-medium uppercase tracking-wider border-b border-white/10"
                                                        >
                                                            Kryefaqja
                                                        </Link>
                                                        <Link
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            href="/product"
                                                            className="block py-4 text-lg text-white hover:text-albanianRed transition-colors font-medium uppercase tracking-wider border-b border-white/10"
                                                        >
                                                            Kundër Serbisë
                                                        </Link>
                                                        <Link
                                                            onClick={() => setMobileMenuOpen(false)}
                                                            href="/product"
                                                            className="block py-4 text-lg text-white hover:text-albanianRed transition-colors font-medium uppercase tracking-wider border-b border-white/10"
                                                        >
                                                            Krenaria 1999
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-t border-white/10 px-6 py-6">
                                                <div className="flex items-center justify-center">
                                                    <div className="text-sm text-white/70">
                                                        © 2024 Maica Etnike. Të gjitha të drejtat e rezervuara.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </DialogPanel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </header>
    )
}
