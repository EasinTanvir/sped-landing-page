import React from "react";

import BannerText from "./BannerText";
import BannerImage from "./BannerImage";
import { Container } from "@/index";

const HeroBanner = ({ bannerData }) => {
  return (
    <div className="bg-colors-bannerBgColor  lg:pt-52 md:pt-40 pt-32 lg:pb-40 pb-0">
      <Container>
        <div className="flex lg:flex-row flex-col lg:gap-10 gap-20">
          <BannerText bannerData={bannerData} />
          <BannerImage />
        </div>
      </Container>
    </div>
  );
};

export default HeroBanner;
