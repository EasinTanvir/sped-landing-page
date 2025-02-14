import React from "react";
import OfferItems from "./OfferItems";
import { menuOffers } from "@/utils";

const MenuOffer = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 lg:justify-between gap-6">
      {menuOffers.map((offer, index) => (
        <div key={offer.id} className={`flex items-center `}>
          <OfferItems {...offer} />
        </div>
      ))}
    </div>
  );
};

export default MenuOffer;
