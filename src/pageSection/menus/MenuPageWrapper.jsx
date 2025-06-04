import React from "react";
import DiscountMenuCard from "../landingPage/areMenu/discountMenus/DiscountMenuCard";
import { Container, H2 } from "@/index";
import { lobster } from "@/app/(routes)/[locale]/layout";
import { getTranslations } from "next-intl/server";

const MenuPageWrapper = async ({ foodMenu, allDiscountedFoods, locale }) => {
  const t = await getTranslations("discountMenus");
  const menuT = await getTranslations("allMenus");
  return (
    <Container className="sm:py-16 py-12 sm:space-y-24 space-y-16">
      {/* Discount Section */}
      <section className="space-y-6">
        <H2
          className={`text-center font-bold italic ${lobster.className} 
            text-4xl sm:text-5xl lg:text-6xl 
            !leading-[50px] sm:!leading-[80px]`}
        >
          {t("discountTitle")}
        </H2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {allDiscountedFoods.map((item, index) => (
            <DiscountMenuCard
              key={index}
              locale={locale}
              item={item}
              price={item.original_price || 0}
              discountPrice={
                item.food_price && Number(item?.discount_price || 0) !== 0
                  ? item.food_price
                  : null
              }
            />
          ))}
        </div>
      </section>

      {/* Food Menu Section */}
      <section className="sm:space-y-14 space-y-10">
        <H2
          className={`text-center font-bold italic ${lobster.className}
            text-4xl sm:text-5xl lg:text-6xl 
            !leading-[50px] sm:!leading-[80px]`}
        >
          {menuT("menuTitle")}
        </H2>

        <div className="space-y-14">
          {foodMenu?.map((subcategory, i) => (
            <div
              key={subcategory?.subcategory_id}
              className="space-y-6 border-b-2 border-colors-button pb-10 last:border-b-0"
            >
              <H2
                className={`font-medium ${lobster.className}
                  text-2xl lg:text-4xl`}
              >
                {subcategory?.subcategory_name}
              </H2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {subcategory?.foods?.map((item, index) => (
                  <DiscountMenuCard
                    key={index}
                    locale={locale}
                    item={item}
                    {...item}
                    price={item.original_price || 0}
                    discountPrice={
                      item.food_price && Number(item?.discount_price || 0) !== 0
                        ? item.food_price
                        : null
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default MenuPageWrapper;
