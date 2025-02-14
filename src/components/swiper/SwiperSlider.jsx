"use client";

import React from "react";
import { Swiper, SwiperSlide as Slide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

import { H2 } from "@/index";

const SwiperSlider = ({
  grabCursor,
  autoplay = {},
  speed = 500,
  modules = [],
  scrollbar = {},
  slidesPerView,
  spaceBetween,
  breakpoints = {},
  lists = [],
  renderCard,
  swiperClassName,
  loop = false,
  title,
  showControls = false,
  cardClassName = "",
  titleClassName = "",
  wrapperClassName = "",
  containerStyle = {},
  swiperStyle = {},
  seeAll,
  seeAllClassName,

  customSwiperButton,
}) => {
  return (
    <div style={{ ...containerStyle }}>
      <Swiper
        grabCursor={grabCursor}
        autoplay={autoplay}
        speed={speed}
        modules={modules}
        scrollbar={scrollbar}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
        className={swiperClassName}
        loop={loop}
        style={{ ...swiperStyle }}
      >
        <div className={wrapperClassName}>
          {title && <H2 className={titleClassName}>{title}</H2>}

          {showControls && (
            <>{customSwiperButton ? customSwiperButton() : null}</>
          )}
        </div>

        {lists.map((item, index) => (
          <Slide key={index} className={cardClassName}>
            {renderCard ? renderCard(item) : null}
          </Slide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
