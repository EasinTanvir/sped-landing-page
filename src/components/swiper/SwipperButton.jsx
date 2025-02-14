"use client";

import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const SwipperButton = () => {
  const swiper = useSwiper();
  const [data, setData] = useState(false);

  const onNextHandler = () => {
    swiper.slideNext();
    setData(!data);
  };

  const onPrevHandler = () => {
    swiper.slidePrev();
    setData(!data);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onPrevHandler}
        className={`h-10 w-10 rounded-full bg-colors-button  flex-center `}
      >
        <FaArrowLeftLong size={18} className="text-white" />
      </button>
      <button
        onClick={onNextHandler}
        className={`h-10 w-10 rounded-full bg-colors-button flex-center `}
      >
        <FaArrowRightLong size={18} className="text-white" />
      </button>
    </div>
  );
};

export default SwipperButton;
