import React from "react";

import { lobster } from "@/app/layout";
import { Container, H2 } from "@/index";
import ChefWarpper from "./ChefWarpper";

const MasterChef = () => {
  return (
    <div className="bg-colors-bannerBgColor py-20 ">
      <Container className="space-y-12">
        <H2
          className={`lg:text-6xl sm:text-5xl text-4xl text-center font-bold italic sm:!leading-[80px] !leading-[50px] ${lobster.className}`}
        >
          Master Chefs
        </H2>

        <ChefWarpper />
      </Container>
    </div>
  );
};

export default MasterChef;
