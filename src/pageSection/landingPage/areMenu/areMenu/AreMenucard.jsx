import React from "react";
import Image from "next/image";
import { H3, H4, Text } from "@/index";
import Link from "next/link";
import { FaTags } from "react-icons/fa";
import calculateDiscountPercentage from "@/utils/calculateDiscountPercentage";

const AreMenucard = ({ item, locale, discountPrice, price }) => {
  return (
    <Link
      target="_blank"
      href={`${process.env.NEXT_PUBLIC_SPED_FRONTEND_BASE_URL}/${locale}/fin/joensuu/restaurant/ravintola-sinet`}
      className={`flex lg:flex-row sm:flex-col flex-row ${
        discountPrice ? "bg-yellow-100" : "hover:bg-gray-100"
      }  cursor-pointer p-1.5 rounded-lg   lg:items-center sm:items-start items-center lg:space-x-4 space-x-0   sm:gap-4 gap-2 relative sm:w-full w-[90%] xl:max-w-[460px] `}
    >
      <div className="rounded-full overflow-hidden w-20 h-20">
        {item.food_image && (
          <Image
            src={item.food_image}
            alt={item.food_alt_txt || item.food_name}
            width={80}
            height={80}
            className="object-cover w-full h-full"
          />
        )}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center gap-2">
          <h3 className="sm:text-lg font-bold">{item.food_name}</h3>
          {discountPrice ? (
            <>
              {" "}
              <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-300 px-2 py-1 rounded-lg shadow-sm">
                <div className="flex flex-row items-center gap-2">
                  <span className="text-sm text-gray-400 line-through">
                    {price}
                  </span>
                  <span className="text-sm text-red-600 font-semibold">
                    {discountPrice}
                  </span>{" "}
                  <span className="inline-block bg-orange-500  text-white text-xs  px-2 py-1 rounded-lg ">
                    {calculateDiscountPercentage(price, discountPrice)}%
                  </span>
                </div>
              </div>
            </>
          ) : (
            <span className="text-yellow-500 font-bold">€{price}</span>
          )}
        </div>

        <Text className="text-colors-text !text-sm">
          {item.food_description || "No description"}
        </Text>
      </div>
    </Link>
  );
};

export default AreMenucard;
