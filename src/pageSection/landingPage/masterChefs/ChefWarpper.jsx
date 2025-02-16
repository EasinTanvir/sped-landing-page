"use client";

import React from "react";
import { Autoplay } from "swiper/modules";

import ChefCard from "./ChefCard";
import { masterChefs } from "@/utils";
import SwiperSlider from "@/components/swiper/SwiperSlider";
import SwipperButton from "@/components/swiper/SwipperButton";

const ChefWarpper = () => {
  return (
    <div>
      <SwiperSlider
        loop
        autoplay={{ delay: 2000 }}
        speed={1000}
        modules={[Autoplay]}
        scrollbar={{ draggable: true }}
        seeAll
        swiperClassName="relative"
        customSwiperButton={() => <SwipperButton />}
        breakpoints={{
          1280: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 6,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        }}
        lists={masterChefs}
        renderCard={(item) => <ChefCard chef={item} />}
        showControls
        wrapperClassName="sm:flex hidden justify-end"
        seeAllClassName=""
        swiperStyle={{ display: "flex", flexDirection: "column-reverse" }}
        cardClassName=" py-5 "
        titleClassName="lg:text-4xl sm:text-3xl text-2xl font-bold text-headingColor"
      />
    </div>
  );
};

export default ChefWarpper;
