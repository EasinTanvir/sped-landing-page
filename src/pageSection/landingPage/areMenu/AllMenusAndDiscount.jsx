import React from "react";

import DiscountMenus from "./discountMenus/DiscountMenus";
import AllMenus from "./areMenu/AllMenus";
import { getTranslations } from "next-intl/server";

const AllMenusAndDiscount = async ({
  foodMenu,
  locale,
  allDiscountedFoods,
}) => {
  const t = await getTranslations("discountMenus");
  const menuT = await getTranslations("allMenus");
  return (
    <div className="sm:pt-96 pt-80">
      {allDiscountedFoods?.length > 0 && (
        <DiscountMenus
          allDiscountedFoods={allDiscountedFoods}
          locale={locale}
          t={t}
        />
      )}
      <AllMenus foodMenu={foodMenu} locale={locale} menuT={menuT} />
    </div>
  );
};

export default AllMenusAndDiscount;
