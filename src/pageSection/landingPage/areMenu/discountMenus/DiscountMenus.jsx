import React from "react";

import { Container, H2 } from "@/index";
import { lobster } from "@/app/(routes)/[locale]/layout";
import Motion from "@/components/ui/Motion";

import DiscountMenuSlider from "./DiscountMenuSlider";

const DiscountMenus = ({ allDiscountedFoods, locale, t }) => {
  return (
    <Motion
      initial={{ rotateX: 90, opacity: 0, y: 50 }}
      whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <Container className="sm:space-y-10 -mt-64">
        <H2
          className={`lg:text-6xl sm:text-5xl text-4xl text-center font-bold italic sm:!leading-[80px] !leading-[50px] ${lobster.className} `}
        >
          {t("discountTitle")}
        </H2>

        <div className=" bg-white  ">
          <DiscountMenuSlider
            allDiscountedFoods={allDiscountedFoods}
            locale={locale}
          />
        </div>
      </Container>
    </Motion>
  );
};

export default DiscountMenus;
