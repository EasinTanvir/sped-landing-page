"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import SwiperSlider from "@/components/swiper/SwiperSlider";
import SwipperButton from "@/components/swiper/SwipperButton";
import DiscountMenuCard from "./DiscountMenuCard";

const DiscountMenuSlider = ({ allDiscountedFoods, locale }) => {
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
            spaceBetween: 1,
            spaceBetween: 6,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        }}
        lists={allDiscountedFoods}
        renderCard={(item) => (
          <DiscountMenuCard
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
        cardClassName=" py-10 sm:min-w-[500px] sm:max-w-[500px] min-w-full max-w-full"
        titleClassName="lg:text-4xl sm:text-3xl text-2xl font-bold text-headingColor"
      />
    </div>
  );
};

export default DiscountMenuSlider;
