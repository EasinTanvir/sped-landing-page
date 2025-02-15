import React from "react";

import HeroBanner from "@/pageSection/landingPage/banner/HeroBanner";
import MenuSection from "@/pageSection/landingPage/menu/MenuSection";
import TodayMenu from "@/pageSection/landingPage/todayMenu/TodayMenu";
import AreMenuService from "@/pageSection/landingPage/areMenu/AreMenuService";

const page = () => {
  return (
    <div>
      <HeroBanner />
      <MenuSection />
      <TodayMenu />
      <AreMenuService />
    </div>
  );
};

export default page;
