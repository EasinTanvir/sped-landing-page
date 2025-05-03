import React from "react";

import HeroBanner from "@/pageSection/landingPage/banner/HeroBanner";
import MenuSection from "@/pageSection/landingPage/menu/MenuSection";
import TodayMenu from "@/pageSection/landingPage/todayMenu/TodayMenu";
import AreMenuService from "@/pageSection/landingPage/areMenu/AreMenuService";
import MasterChef from "@/pageSection/landingPage/masterChefs/MasterChef";
import NewsLetter from "@/pageSection/landingPage/newsLetter/NewsLetter";
import BookTable from "@/pageSection/landingPage/bookTable/BookTable";
import { serverApi } from "@/api";
import ErrorFallback from "@/components/shared/ErrorFallback";

const LandinPage = async ({ params }) => {
  let data = null;
  let menuData = null;

  const { locale } = await params;

  try {
    const res = await serverApi.get("/api/admin/hero-banner");

    data = res.data;

    const menuList = await serverApi.get("/api/admin/menu");
    menuData = menuList.data;
  } catch (error) {
    console.error("Failed to fetch hero banner:", error);
  }
  if (!data) {
    return (
      <ErrorFallback
        title="Failed to load Hero Banner"
        description="We could not load the banner data at the moment. Please refresh or try again later."
      />
    );
  }
  return (
    <div>
      <HeroBanner bannerData={data} />
      <MenuSection menuData={menuData} locale={locale} />
      <TodayMenu />
      <AreMenuService />
      <MasterChef />
      <NewsLetter />
      <BookTable />
    </div>
  );
};

export default LandinPage;
