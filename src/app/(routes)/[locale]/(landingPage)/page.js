import React from "react";

import HeroBanner from "@/pageSection/landingPage/banner/HeroBanner";
import MenuSection from "@/pageSection/landingPage/menu/MenuSection";
import TodayMenu from "@/pageSection/landingPage/todayMenu/TodayMenu";
import AreMenuService from "@/pageSection/landingPage/areMenu/AreMenuService";
import MasterChef from "@/pageSection/landingPage/masterChefs/MasterChef";
import NewsLetter from "@/pageSection/landingPage/newsLetter/NewsLetter";
import BookTable from "@/pageSection/landingPage/bookTable/BookTable";
import { serverApi, spedApi } from "@/api";
import ErrorFallback from "@/components/shared/ErrorFallback";
import Restaurants from "@/pageSection/landingPage/menu/Restaurants/Restaurants";

const LandinPage = async ({ params }) => {
  let data = null;
  let menuData = null;
  let allRestaurants = [];
  let foodMenu = null;

  const { locale } = await params;

  try {
    const res = await serverApi.get("/api/admin/hero-banner");

    data = res.data;

    const menuList = await serverApi.get("/api/admin/menu");
    menuData = menuList.data;

    // const { data: allres } = await spedApi.get("/restaurants/fin/joensuu");
    // allRestaurants = allres.data;

    const { data: oneRes } = await spedApi.get(
      "/restaurants-by-slug/ravintola-sinet"
    );

    allRestaurants.push(oneRes.data.restaurant);

    const { data: menus } = await spedApi.get("/foods/2");

    foodMenu = menus.data;
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
      <Restaurants allRestaurants={allRestaurants} locale={locale} />
      <MenuSection menuData={menuData} locale={locale} />
      {/* <TodayMenu /> */}
      <AreMenuService foodMenu={foodMenu} />
      <MasterChef />
      <NewsLetter />
      <BookTable />
    </div>
  );
};

export default LandinPage;
