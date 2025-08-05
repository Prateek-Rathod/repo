import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { assets } from "../assets/assets";

const slides = [
  {
    id: 1,
    image: assets.hero_img_2,
    title: "Latest Arrivals",
    subtitle: "OUR BESTSELLERS",
    buttonText: "SHOP NOW",
  },
  {
    id: 2,
    image: assets.hero_img,
    title: "Festive Collection",
    subtitle: "EXCLUSIVE DESIGNS",
    buttonText: "EXPLORE NOW",
  },
  {
    id: 3,
    image: assets.hero_img_1,
    title: "Formals Fashion Trends",
    subtitle: "TRENDING STYLES",
    buttonText: "DISCOVER MORE",
  },
  {
    id: 4,
    image: assets.hero_img_4, 
    title: "Sports Collection",
    subtitle: "GEAR UP FOR ACTION",
    buttonText: "SHOP SPORTS",
  },
];

const Hero = () => {
  return (
    <div className="border border-gray-400">
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col sm:flex-row">
              {/* Left Side - Dynamic Text Content */}
              <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                <div className="text-[#414141]">
                  <div className="flex items-center gap-2">
                    <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                    <p className="font-medium text-sm md:text-base">
                      {slide.subtitle}
                    </p>
                  </div>
                  <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
                    {slide.title}
                  </h1>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm md:text-base">
                      {slide.buttonText}
                    </p>
                    <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="w-full sm:w-1/2">
                <img
                  src={slide.image}
                  className="w-full h-full object-cover"
                  alt="Hero Slide"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
