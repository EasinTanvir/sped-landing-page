import React from "react";

import { lobster } from "@/app/(routes)/[locale]/layout";
import { H2 } from "@/index";
// import ChefWarpper from "./ChefWarpper";
import SpedBanner from "../newsLetter/spedbanner/SpedBanner";
import { getTranslations } from "next-intl/server";

const MasterChef = async ({ locale }) => {
  const t = await getTranslations("spedBanner");
  return (
    <div className="bg-colors-bannerBgColor sm:py-20  py-12">
      <H2
        className={`lg:text-6xl sm:text-5xl text-4xl text-center font-bold italic sm:!leading-[80px] !leading-[50px] ${lobster.className}`}
      >
        {t("mainTitle")}
      </H2>

      {/* <ChefWarpper /> */}
      <SpedBanner locale={locale} />
    </div>
  );
};

export default MasterChef;
