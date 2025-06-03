import React from "react";
import Image from "next/image";

import { Link } from "@/i18n/routing";
import { H3, Text } from "@/index";

const CategorySectionCard = ({
  category_name,
  category_restaurants_count,
  category_image,
  category_alt_txt,
  category_slug,
  category_id,
  containerClass,
  imgContaineClass,
  textContaineClass,
  city,
  country,
  locale,
  category_name_translate,
  category_restaurants_count_translate,
}) => {
  return (
    <Link
      target="_blank"
      href={`${process.env.NEXT_PUBLIC_SPED_FRONTEND_BASE_URL}/${locale}/${country}/${city}/category/${category_slug}`}
    >
      <div
        className={`rounded-lg w-full sm:max-w-[250px] max-w-[300px] cursor-pointer ${containerClass} `}
      >
        <div className={` relative ${imgContaineClass}`}>
          <Image
            className="rounded-t-lg w-full h-full object-cover"
            src={category_image}
            alt={category_alt_txt}
            width={100}
            height={95}
            sizes="(max-width: 1024px) 400px, 300px"
          />
        </div>
        <div
          className={`bg-white rounded-b-lg sm:py-7 py-5 md:px-4 px-2 space-y-2 min-h-28 max-h-28 ${textContaineClass}`}
        >
          <H3 className="!lg:text-2xl !text-sm  ">
            {" "}
            {category_name_translate || category_name}
          </H3>
          <Text className="sm:text-base text-xs">
            {category_restaurants_count_translate || category_restaurants_count}
          </Text>
        </div>
      </div>
    </Link>
  );
};

export default CategorySectionCard;
