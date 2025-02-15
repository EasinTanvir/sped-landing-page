import React from "react";

import { Container, H2 } from "@/index";
import TodayMenuCard from "./TodayMenuCard";
import { todayMenuItems } from "@/utils";
import { lobster } from "@/app/layout";

const TodayMenu = () => {
  return (
    <div className="bg-colors-bannerBgColor py-20">
      <Container className="space-y-16">
        <H2
          className={`lg:text-6xl sm:text-5xl text-4xl text-center font-bold italic sm:!leading-[80px] !leading-[50px] ${lobster.className} `}
        >
          Today's Menu
        </H2>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
          {todayMenuItems.map((item, index) => (
            <TodayMenuCard key={index} {...item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TodayMenu;
