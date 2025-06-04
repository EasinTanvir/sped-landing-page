import React, { Suspense } from "react";

import { spedApi } from "@/api";
import MenuPageWrapper from "@/pageSection/menus/MenuPageWrapper";
import InitialLoader from "@/components/InitialLoader";

const MenuPageSub = async ({ locale, menus }) => {
  const foodMenu = menus.data;

  const allDiscountedFoods = foodMenu.flatMap((group) =>
    group.foods
      .filter((food) => food.discount_price !== "0.00")
      .map((food) => {
        return {
          ...food,
          subcategory_name: group.subcategory_name,
        };
      })
  );

  return (
    <div className="">
      <MenuPageWrapper
        foodMenu={foodMenu}
        allDiscountedFoods={allDiscountedFoods}
        locale={locale}
      />
    </div>
  );
};

const MenuPage = async ({ params }) => {
  const { locale } = await params;
  const { data: menus } = await spedApi.get("/foods/2");
  return (
    <Suspense fallback={<InitialLoader className="min-h-screen" />}>
      <MenuPageSub params={params} locale={locale} menus={menus} />
    </Suspense>
  );
};

export default MenuPage;
