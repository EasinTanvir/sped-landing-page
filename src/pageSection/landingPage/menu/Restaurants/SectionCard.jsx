import React from "react";
import Image from "next/image";
import { CiFaceSmile } from "react-icons/ci";
import { H4, Text } from "@/index";
import Link from "next/link";

const SectionCard = ({ priceCategory, rating, item, locale }) => {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_SPED_FRONTEND_BASE_URL}/${locale}/fin/joensuu/restaurant/${item?.restaurant_slug}`}
      target="_blank"
      className={`lg:min-h-[290px] w-full shadow-lg relative rounded-xl cursor-pointer sm:hover:scale-[1.02] transition-transform duration-300 flex flex-col overflow-hidden`}
    >
      <div className="relative aspect-[6/3] z-10">
        <div className="w-full h-full relative">
          <Image
            alt={item?.restaurant_name || "card_image"}
            src={item?.restaurant_cover_image || item?.restaurant_image}
            fill
            className="rounded-t-xl object-cover transition-all duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      <div className="flex flex-grow flex-col bg-white rounded-b-xl">
        <div className="p-3 flex justify-between items-center flex-1">
          <div className="xs:w-[calc(100%-80px)] max-w-[340px] overflow-hidden">
            <H4 className="text-headingColor sm:font-bold font-medium truncate block lg:!text-lg !text-sm">
              {item?.restaurant_name}
            </H4>
            <Text className="text-inputTextColor sm:!text-sm !text-xs truncate block sm:mt-0 mt-1">
              {item?.restaurant_short_description}
            </Text>
          </div>

          <div className="bg-colors-button xs:flex-center hidden xs:hidden flex-col text-brandColor text-sm px-1.5 py-1.5 rounded-md min-w-[68px] max-w-[68px] text-center">
            <span className="text-white text-xs">
              {item?.restaurant_delivery_time}
            </span>
          </div>
        </div>

        <div className="border-t px-3 py-2 text-xs flex items-center gap-1.5 bg-white rounded-b-xl">
          <Text className="text-colors-button !text-sm">
            € {item?.restaurant_delivery_fee}
          </Text>
          <Text className="text-brandColor sm:block hidden">
            {priceCategory}
          </Text>
          <span className="sm:block hidden">
            <CiFaceSmile size={16} className="text-headingColor" />
          </span>
          <Text className="text-headingColor sm:block hidden">{rating}</Text>

          {/* Delivery Time (Mobile) */}
          <div className="sm:hidden text-colors-button ml-auto text-xs">
            <span>{item?.restaurant_delivery_time}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SectionCard;
