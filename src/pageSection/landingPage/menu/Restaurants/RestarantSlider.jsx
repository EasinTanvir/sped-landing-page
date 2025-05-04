"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import SwiperSlider from "@/components/swiper/SwiperSlider";
import SectionCard from "./SectionCard";
import SwipperButton from "@/components/swiper/SwipperButton";

const RestarantSlider = ({ allRestaurants, locale }) => {
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
            spaceBetween: 2,
            spaceBetween: 6,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
        }}
        lists={allRestaurants}
        renderCard={(item) => (
          <SectionCard key={item.id} {...item} item={item} locale={locale} />
        )}
        showControls
        title=""
        wrapperClassName="flex justify-end items-center"
        seeAllClassName=""
        swiperStyle={{ display: "flex", flexDirection: "column-reverse" }}
        cardClassName=" py-5 max-w-96 "
        titleClassName="lg:text-4xl sm:text-3xl text-2xl font-bold text-headingColor"
      />
    </div>
  );
};

export default RestarantSlider;
