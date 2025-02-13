import React from "react";
import BannerText from "./BannerText";
import BannerImage from "./BannerImage";

const HeroBanner = () => {
  return (
    <div className="flex gap-10 lg:flex-row flex-col">
      <BannerText />
      <BannerImage />
    </div>
  );
};

export default HeroBanner;
