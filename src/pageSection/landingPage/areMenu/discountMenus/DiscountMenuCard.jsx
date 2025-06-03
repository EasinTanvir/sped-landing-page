import React from "react";
import Image from "next/image";
import { Text } from "@/index";
import Link from "next/link";
import calculateDiscountPercentage from "@/utils/calculateDiscountPercentage";
import { FaTags } from "react-icons/fa";

const DiscountMenuCard = ({ item, locale, discountPrice, price }) => {
  return (
    <Link
      target="_blank"
      href={`${process.env.NEXT_PUBLIC_SPED_FRONTEND_BASE_URL}/${locale}/fin/joensuu/restaurant/ravintola-sinet`}
      className={`flex flex-row relative cursor-pointer gap-2 items-center border-2 border-yellow-500 bg-colors-button/30  rounded-lg  sm:py-6 py-3 sm:px-3 px-1.5  w-full max-w-[480px]`}
    >
      <div className="flex-grow flex flex-col justify-between h-full">
        <div>
          <div className="flex flex-wrap items-center gap-1">
            <h3 className="text-headingColor font-semibold text-base">
              {item.food_name}
            </h3>
            {discountPrice && (
              <span className="inline-block bg-colors-button text-white text-xs px-2 py-1 rounded-lg">
                {calculateDiscountPercentage(price, discountPrice)}% Off
              </span>
            )}
          </div>

          <Text className="text-inputTextColor !text-sm mt-1 line-clamp-2">
            {item.food_description || "No description"}
          </Text>
        </div>

        <div className="flex items-center mt-4 space-x-2">
          <div className="flex items-center gap-2 bg-colors-button border  px-3 py-1 rounded-lg ">
            <FaTags className="text-white text-lg" />
            <div className="flex flex-row items-center gap-2">
              <span className="text-base text-gray-200 line-through">
                €{price}
              </span>
              <span className="text-base text-red-600 font-bold">
                €{discountPrice}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        {item.food_image && (
          <Image
            src={item.food_image}
            alt={item.food_alt_txt || item.food_name}
            height={110}
            width={110}
            sizes="112px"
            className="w-28 h-full sm:w-44 sm:h-32 object-cover rounded-lg"
          />
        )}
      </div>
    </Link>
  );
};

export default DiscountMenuCard;
