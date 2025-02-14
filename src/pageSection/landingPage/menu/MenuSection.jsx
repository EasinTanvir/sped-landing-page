import React from "react";
import MenuOffer from "./MenuOffer";
import { Container } from "@/index";
import OurMenu from "./OurMenu";

const MenuSection = () => {
  return (
    <div className="bg-white py-20">
      <Container className="space-y-20">
        <MenuOffer />
        <OurMenu />
      </Container>
    </div>
  );
};

export default MenuSection;
