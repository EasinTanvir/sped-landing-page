import React from "react";

import HeroBanner from "@/pageSection/landingPage/banner/HeroBanner";
import MenuSection from "@/pageSection/landingPage/menu/MenuSection";
import TodayMenu from "@/pageSection/landingPage/todayMenu/TodayMenu";

const page = () => {
  return (
    <div>
      <HeroBanner />
      <MenuSection />
      <TodayMenu />
    </div>
  );
};

export default page;
