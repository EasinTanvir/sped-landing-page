import React from "react";

import HeroBanner from "@/pageSection/landingPage/banner/HeroBanner";
import MenuSection from "@/pageSection/landingPage/menu/MenuSection";
import TodayMenu from "@/pageSection/landingPage/todayMenu/TodayMenu";
import AreMenuService from "@/pageSection/landingPage/areMenu/AreMenuService";
import MasterChef from "@/pageSection/landingPage/masterChefs/MasterChef";
import NewsLetter from "@/pageSection/landingPage/newsLetter/NewsLetter";
import BookTable from "@/pageSection/landingPage/bookTable/BookTable";

const LandinPage = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/admin/hero-banner");
  const data = await res.json();

  return (
    <div>
      <HeroBanner bannerData={data} />
      <MenuSection />
      <TodayMenu />
      <AreMenuService />
      <MasterChef />
      <NewsLetter />
      <BookTable />
    </div>
  );
};

export default LandinPage;
