import React from "react";

import { Container, H2 } from "@/index";
import { lobster } from "@/app/(routes)/[locale]/layout";
import Motion from "@/components/ui/Motion";
import DiscountMenu from "../areMenu/DiscountMenu";

const DiscountMenus = ({ allDiscountedFoods, locale }) => {
  return (
    <Motion
      initial={{ rotateX: 90, opacity: 0, y: 50 }}
      whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <Container className="space-y-10 -mt-64">
        <H2
          className={`lg:text-6xl sm:text-5xl text-4xl text-center font-bold italic sm:!leading-[80px] !leading-[50px] ${lobster.className}`}
        >
          Exclusive Discounts
        </H2>
        <div className=" bg-white  py-16 px-8    flex flex-wrap gap-4">
          {allDiscountedFoods.map((item, index) => (
            <DiscountMenu
              key={index}
              locale={locale}
              item={item}
              price={item.original_price ? item.original_price : 0}
              discountPrice={
                item.food_price && Number(item?.discount_price || 0) !== 0
                  ? item.food_price
                  : null
              }
            />
          ))}
        </div>
      </Container>
    </Motion>
  );
};

export default DiscountMenus;
