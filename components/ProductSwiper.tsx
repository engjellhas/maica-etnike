"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/sanity";

interface ProductSwiperProps {
    products: Product[];
}

export default function ProductSwiper({ products }: ProductSwiperProps) {
    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            navigation
            pagination={{clickable: true}}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 4,
                },
            }}
        >
            {products.map((product, index) => (
                <SwiperSlide key={index} className={'my-12'}>
                    <div className="group">
                        <Link href={`/product/${product.slug}`}>
                            <div
                                className="relative h-[380px] md:h-[380px]  md:w-full bg-gray-200 overflow-hidden group-hover:opacity-75 cursor-pointer">
                                {/* PRICE TAG */}
                                <div
                                    className="absolute top-4 right-4 z-10 bg-white text-right bg-opacity-90 px-3 py-1 rounded-full shadow text-sm font-semibold text-gray-900">
                                    {product.comparePrice && product.comparePrice > product.price &&
                                        <p className={'text-sm text-red-600 line-through'}>{product.comparePrice}€
                                        </p>
                                    }
                                    {product.price}€
                                </div>

                                {/* IMAGE */}
                                <Image
                                    alt={product.alt}
                                    src={product?.images?.[0] || '/images/placeholder.jpg'}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>

                        {/* PRODUCT NAME */}
                        <h3 className="mt-4 text-lg font-medium tracking-wider text-gray-200">{product.name}</h3>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
