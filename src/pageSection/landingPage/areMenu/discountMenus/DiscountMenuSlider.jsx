"use client";

import React from "react";

import { Autoplay } from "swiper/modules";
import SwipperButton from "@/components/swiper/SwipperButton";
import SwiperSlider from "@/components/swiper/SwiperSlider";
import DiscountMenus from "./DiscountMenus";

const DiscountMenuSlider = ({ allDiscountedFoods, locale }) => {
  console.log("allDiscountedFoods", allDiscountedFoods);
  return (
    <div>
      <SwiperSlider
        grabCursor
        loop
        autoplay={{ delay: 2000 }}
        speed={1000}
        modules={[Autoplay]}
        scrollbar={{ draggable: true }}
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
            spaceBetween: 3,
            spaceBetween: 6,
          },
          300: {
            slidesPerView: 1.5,
            spaceBetween: 5,
          },
        }}
        lists={allDiscountedFoods}
        renderCard={(item) => (
          <DiscountMenus
            key={item.id}
            locale={locale}
            item={item}
            price={item.original_price ? item.original_price : 0}
            discountPrice={
              item.food_price && Number(item?.discount_price || 0) !== 0
                ? item.food_price
                : null
            }
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

export default DiscountMenuSlider;
