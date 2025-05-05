import React from "react";

import MenuOffer from "./MenuOffer";
import { Container } from "@/index";
import OurMenu from "./OurMenu";

const MenuSection = ({ mergedFoods, locale }) => {
  return (
    <div className="bg-colors-bannerBgColor py-20">
      <Container className="space-y-20">
        {/* <MenuOffer /> */}
        <OurMenu mergedFoods={mergedFoods} locale={locale} />
      </Container>
    </div>
  );
};

export default MenuSection;
