"use client";

import React, { useState } from "react";

import Image from "next/image";
import Motion from "@/components/ui/Motion";
import { H3, Text } from "@/index";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";

const TodayMenuCard = ({ title, description, price, image, topSeller }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="  relative h-[400px] rounded-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image fill className="object-cover" src={image} alt="image" />

      <Motion
        initial={{ y: 0 }}
        animate={{ y: isHovered ? 150 : 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white h-[120px] flex flex-col items-center absolute bottom-0 left-0 w-full py-4 space-y-2.5 px-6"
      >
        <H3 className="text-2xl font-bold text-colors-heading italic">
          {title}
        </H3>
        <p className="text-colors-text !text-sm  text-center">{description}</p>
      </Motion>

      <Motion
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-t from-black/70 to-transparent absolute bottom-0 left-0 w-full h-full"
      ></Motion>

      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="h-20 bg-transparent z-10 flex items-center justify-center absolute bottom-4 left-0 w-full text-white font-bold px-6"
      >
        <div className="w-full flex justify-between items-center">
          <div>
            <H3 className="text-xl font-semibold text-white">{title}</H3>
            <H3 className="text-lg font-semibold text-white">{price}</H3>
          </div>
          <FaShoppingCart size={35} className="text-white" />
        </div>
      </Motion>
    </div>
  );
};

export default TodayMenuCard;
