import React from "react";

import DiscountMenus from "./qualityService/DiscountMenus";
import AllMenus from "./areMenu/AllMenus";

const AllMenusAndDiscount = ({ foodMenu, locale, allDiscountedFoods }) => {
  return (
    <div className="pt-96">
      <DiscountMenus allDiscountedFoods={allDiscountedFoods} locale={locale} />
      <AllMenus foodMenu={foodMenu} locale={locale} />
    </div>
  );
};

export default AllMenusAndDiscount;
