"use client";

import React from "react";

import { Autoplay } from "swiper/modules";
import SwipperButton from "@/components/swiper/SwipperButton";
import SwiperSlider from "@/components/swiper/SwiperSlider";
import CategorySectionCard from "./CategorySectionCard";

const CategorySlider = ({ allCategories, locale }) => {
  return (
    <div>
      <SwiperSlider
        autoplay={{ delay: 3000 }}
        speed={1000}
        modules={[Autoplay]}
        scrollbar={{ draggable: true }}
        loop
        grabCursor
        swiperClassName="relative"
        customSwiperButton={() => <SwipperButton />}
        breakpoints={{
          1280: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 12,
          },
          640: {
            spaceBetween: 4,
            spaceBetween: 6,
          },
          300: {
            slidesPerView: 1.5,
            spaceBetween: 5,
          },
        }}
        lists={allCategories}
        renderCard={(item) => (
          <CategorySectionCard
            key={item.id}
            {...item}
            locale={locale}
            country="fin"
            city="joensuu"
          />
        )}
        showControls
        title=""
        wrapperClassName="flex justify-end items-center"
        seeAllClassName=""
        swiperStyle={{ display: "flex", flexDirection: "column-reverse" }}
        cardClassName="py-5"
        titleClassName="lg:text-4xl sm:text-3xl text-2xl font-bold text-headingColor"
      />
    </div>
  );
};

export default CategorySlider;
