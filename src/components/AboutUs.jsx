import React from "react";
import { FaUtensils, FaLeaf, FaHeart, FaPeopleCarry } from "react-icons/fa";
import { Container } from "@/index";
import { getTranslations } from "next-intl/server";

const AboutUs = async () => {
  const t = await getTranslations("aboutUs");
  const restaurantName = "Ravintola Sinet";

  return (
    <Container className="md:py-40 py-12 space-y-12 ">
      <div className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold italic">{t("title")}</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {t("description", { name: restaurantName })}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="text-center space-y-3">
          <FaUtensils className="text-4xl text-colors-button mx-auto" />
          <h3 className="text-xl font-semibold">
            {t("features.authenticTitle")}
          </h3>
          <p className="text-gray-600 text-sm">
            {t("features.authenticDescription")}
          </p>
        </div>
        <div className="text-center space-y-3">
          <FaLeaf className="text-4xl text-colors-button mx-auto" />
          <h3 className="text-xl font-semibold">{t("features.freshTitle")}</h3>
          <p className="text-gray-600 text-sm">
            {t("features.freshDescription")}
          </p>
        </div>
        <div className="text-center space-y-3">
          <FaHeart className="text-4xl text-colors-button mx-auto" />
          <h3 className="text-xl font-semibold">{t("features.loveTitle")}</h3>
          <p className="text-gray-600 text-sm">
            {t("features.loveDescription")}
          </p>
        </div>
        <div className="text-center space-y-3">
          <FaPeopleCarry className="text-4xl text-colors-button mx-auto" />
          <h3 className="text-xl font-semibold">
            {t("features.hospitalityTitle")}
          </h3>
          <p className="text-gray-600 text-sm">
            {t("features.hospitalityDescription")}
          </p>
        </div>
      </div>

      <div className="text-center pt-10 border-t border-gray-200">
        <p className="text-gray-700 italic">
          {t("closing", { name: restaurantName })}
        </p>
      </div>
    </Container>
  );
};

export default AboutUs;
