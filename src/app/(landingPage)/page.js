import React from "react";

import HeroBanner from "@/pageSection/landingPage/banner/HeroBanner";
import { Container } from "@/index";

const page = () => {
  return (
    <div className="bg-colors-bannerBgColor  pt-52">
      <Container>
        <HeroBanner />
      </Container>
    </div>
  );
};

export default page;
