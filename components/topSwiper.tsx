"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

export default function MarqueeSwiper({title}: {title: string}) {
  const text =
    title
  return (
    <div className="bg-albanianRed text-white text-sm font-medium uppercase tracking-wider">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000} // control scroll speed
      >
        {Array(10)
          .fill(text)
          .map((item, i) => (
            <SwiperSlide key={i} className="!w-auto">
              {item}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
