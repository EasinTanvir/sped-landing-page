import React from "react";

import { H2 } from "@/index";
import { lobster } from "@/app/(routes)/[locale]/layout";
import CategorySlider from "./CategorySlider";

const CategoryWrapper = ({ allCategories, locale }) => {
  return (
    <div className="space-y-8">
      <H2
        className={`lg:text-6xl sm:text-5xl text-4xl font-bold italic text-center sm:!leading-[80px] !leading-[50px] ${lobster.className}  `}
      >
        Categories
      </H2>

      <CategorySlider allCategories={allCategories} locale={locale} />
    </div>
  );
};

export default CategoryWrapper;
