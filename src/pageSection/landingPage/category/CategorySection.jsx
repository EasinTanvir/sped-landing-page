import React from "react";

// import MenuOffer from "./MenuOffer";
import { Container } from "@/index";
import CategoryWrapper from "./CategoryWrapper";

const CategorySection = ({ allCategories, locale }) => {
  return (
    <div className="bg-colors-bannerBgColor py-20">
      <Container className="space-y-20">
        <CategoryWrapper allCategories={allCategories} locale={locale} />
      </Container>
    </div>
  );
};

export default CategorySection;
