'use client';
import React, {useState} from 'react';
import {Swiper, SwiperClass, SwiperSlide} from 'swiper/react';
import {Navigation, Thumbs} from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const GalleryProduct = ({images}: { images: string[] }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

    return (
        <div className="w-full bg-gray-200 p-6">

            <Swiper
                spaceBetween={10}
                navigation
                modules={[Navigation, Thumbs]}
                thumbs={{swiper: thumbsSwiper}}
                className="overflow-hidden mb-4"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-[480px] md:h-[560px]">
                            <Image
                                alt=""
                                src={image}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Thumbnail Slider */}
            {images.length > 1 && <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={Math.min(images.length, 5)}
                watchSlidesProgress
                className=""
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative  border border-black w-full h-36 cursor-pointer">
                            <Image
                                alt=""
                                src={image}
                                fill
                                className="object-cover rounded-xl border border-gray-200"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>}
        </div>
    );
};

export default GalleryProduct;
