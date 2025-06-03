import React from "react";

import QualityService from "./qualityService/QualityService";
import AreMenu from "./areMenu/AreMenu";

const AreMenuService = ({ foodMenu, locale, allDiscountedFoods }) => {
  return (
    <div className="pt-96">
      <QualityService allDiscountedFoods={allDiscountedFoods} locale={locale} />
      <AreMenu foodMenu={foodMenu} locale={locale} />
    </div>
  );
};

export default AreMenuService;
