import React from "react";

import HeroBanner from "@/pageSection/adminPage/heroBanner/HeroBanner";

const Herobanner = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/admin/hero-banner");
  const data = await res.json();

  return (
    <div>
      <HeroBanner bannerData={data} />
    </div>
  );
};

export default Herobanner;
