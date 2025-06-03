import React from "react";

// import MenuOffer from "./MenuOffer";
import { Container } from "@/index";
import CategoryWrapper from "./CategoryWrapper";
import { getTranslations } from "next-intl/server";

const CategorySection = async ({ allCategories, locale }) => {
  const t = await getTranslations("categories");
  return (
    <div className="bg-colors-bannerBgColor py-20">
      <Container className="space-y-20">
        <CategoryWrapper allCategories={allCategories} locale={locale} t={t} />
      </Container>
    </div>
  );
};

export default CategorySection;
