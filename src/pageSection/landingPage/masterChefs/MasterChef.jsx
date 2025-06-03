import React from "react";

import { lobster } from "@/app/(routes)/[locale]/layout";
import { Container, H2 } from "@/index";
// import ChefWarpper from "./ChefWarpper";
import SpedBanner from "../newsLetter/spedbanner/SpedBanner";

const MasterChef = () => {
  return (
    <div className="bg-colors-bannerBgColor sm:py-20  py-12">
      <H2
        className={`lg:text-6xl sm:text-5xl text-4xl text-center font-bold italic sm:!leading-[80px] !leading-[50px] ${lobster.className}`}
      >
        Join Sped Today
      </H2>

      {/* <ChefWarpper /> */}
      <SpedBanner />
    </div>
  );
};

export default MasterChef;
