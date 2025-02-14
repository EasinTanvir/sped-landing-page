import React from "react";
import OfferItems from "./OfferItems";
import { menuOffers } from "@/utils";

const MenuOffer = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
      {menuOffers.map((offer, index) => (
        <div
          key={offer.id}
          className={`flex items-center ${
            index !== 0
              ? "lg:border-l border-dotted border-gray-300 lg:pl-6"
              : ""
          }`}
        >
          <OfferItems {...offer} />
        </div>
      ))}
    </div>
  );
};

export default MenuOffer;
