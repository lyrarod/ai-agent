"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const images = [
  "nextjs.svg",
  "github.svg",
  "vercel.svg",
  "netlify.svg",
  "react-query.svg",
  "claude.svg",
  "perplexity.svg",
  "daisyUI.svg",
  "htmx.svg",
  "anthropic.svg",
  "google-gemini.svg",
  "hugging-face.svg",
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
              spaceBetween: 50,
            },
          }}
        >
          {images.map((slideContent, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center py-8 lg:py-10"
            >
              <img
                src={slideContent}
                alt="brands"
                className="w-full h-8 select-none lg:h-10"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
