"use client";
import Image from "next/image";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const images = [
  "nextjs.svg",
  "tailwindcss.svg",
  "typescript.svg",
  "vercel.svg",
  "github.svg",
  "openai.svg",
  "claude.svg",
  "perplexity.svg",
  "anthropic.svg",
  "htmx.svg",
];

export const Brands = () => {
  return (
    <section id="brands" className="bg-white dark:bg-primary">
      <div className="container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView={4}
          loop={true}
          speed={6000}
          freeMode={true}
          autoplay={{ delay: 0 }}
          centeredSlides={true}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {images.map((slideContent, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center py-8 lg:py-10"
            >
              <Image
                src={slideContent}
                alt="brands"
                className="w-full h-8 select-none"
                width={1000}
                height={1000}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
