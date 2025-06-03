import React, { Suspense } from "react";

import HeroBanner from "@/pageSection/landingPage/banner/HeroBanner";

import MasterChef from "@/pageSection/landingPage/masterChefs/MasterChef";
import NewsLetter from "@/pageSection/landingPage/newsLetter/NewsLetter";
import BookTable from "@/pageSection/landingPage/bookTable/BookTable";
import { serverApi, spedApi } from "@/api";
import ErrorFallback from "@/components/shared/ErrorFallback";
import Restaurants from "@/pageSection/landingPage/menu/Restaurants/Restaurants";
import AllMenusAndDiscount from "@/pageSection/landingPage/areMenu/AllMenusAndDiscount";
import CategorySection from "@/pageSection/landingPage/category/CategorySection";
import InitialLoader from "@/components/InitialLoader";

const LandinPage = async ({ params }) => {
  let menuData = null;
  let allRestaurants = [];
  let foodMenu = null;
  let mergedFoods = null;
  let allDiscountedFoods = [];
  let allCategories = [];

  const { locale } = await params;

  try {
    const menuList = await serverApi.get("/api/admin/menu");
    menuData = menuList.data;

    const { data: oneRes } = await spedApi.get(
      "/restaurants-by-slug/ravintola-sinet"
    );

    const { data: getAllCat } = await spedApi.get("/categories/fin/joensuu");
    allCategories = getAllCat?.data;

    allRestaurants.push(oneRes.data.restaurant);

    const { data: menus } = await spedApi.get("/foods/2");

    foodMenu = menus.data;

    // mergedFoods = foodMenu?.flatMap((subcategory) =>
    //   subcategory.foods.map((food) => ({
    //     ...food,
    //     subcategory_slug: subcategory.subcategory_slug,
    //     subcategory_name: subcategory.subcategory_name,
    //   }))
    // );

    allDiscountedFoods = foodMenu.flatMap((group) =>
      group.foods
        .filter((food) => food.discount_price !== "0.00")
        .map((food) => {
          return {
            ...food,
            subcategory_name: group.subcategory_name,
          };
        })
    );
  } catch (error) {
    console.error("Failed to fetch hero banner:", error);
  }

  return (
    <div>
      <Restaurants allRestaurants={allRestaurants} locale={locale} />
      <CategorySection allCategories={allCategories} locale={locale} />
      {/* <TodayMenu /> */}
      <AllMenusAndDiscount
        foodMenu={foodMenu}
        locale={locale}
        allDiscountedFoods={allDiscountedFoods}
      />
      <MasterChef />
      {/* <SpeddBanner /> */}
      <NewsLetter />
      <BookTable />
    </div>
  );
};

const LandinPageWrapper = async ({ params }) => {
  const res = await serverApi.get("/api/admin/hero-banner");

  const data = res.data;

  return (
    <div>
      <HeroBanner bannerData={data} />
      <Suspense fallback={<InitialLoader />}>
        <LandinPage params={params} />
      </Suspense>
    </div>
  );
};

export default LandinPageWrapper;
