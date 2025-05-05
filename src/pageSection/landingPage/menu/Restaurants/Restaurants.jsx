import React from "react";
import { Container, H2 } from "@/index";
import { lobster } from "@/app/(routes)/[locale]/layout";
import RestarantSlider from "./RestarantSlider";
import { getTranslations } from "next-intl/server";

const Restaurants = async ({ allRestaurants, locale }) => {
  const t = await getTranslations("restaurant");

  return (
    <div className="bg-white sm:pt-16 sm:pb-24  py-14 ">
      <Container className="space-y-8">
        <H2
          className={`lg:text-6xl sm:text-5xl text-4xl font-bold italic text-center sm:!leading-[80px] !leading-[50px] ${lobster.className}  `}
        >
          {t("title")}
        </H2>

        <div>
          {allRestaurants?.length > 0 ? (
            <RestarantSlider allRestaurants={allRestaurants} locale={locale} />
          ) : (
            <p className="text-center text-rose-600">No Restaurants Found</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Restaurants;
