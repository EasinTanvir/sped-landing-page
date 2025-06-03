import React from "react";

import DiscountMenus from "./discountMenus/DiscountMenus";
import AllMenus from "./areMenu/AllMenus";

const AllMenusAndDiscount = ({ foodMenu, locale, allDiscountedFoods }) => {
  return (
    <div className="sm:pt-96 pt-80">
      <DiscountMenus allDiscountedFoods={allDiscountedFoods} locale={locale} />
      <AllMenus foodMenu={foodMenu} locale={locale} />
    </div>
  );
};

export default AllMenusAndDiscount;
