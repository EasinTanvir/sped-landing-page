import Image from "next/image";
import React from "react";

import { bannerImage } from "@/utils/constant";

const BannerImage = () => {
  return (
    <div className="flex-1 relative  aspect-[2/2]  ">
      <Image
        className="object-cover  w-full"
        src={bannerImage}
        alt="banner image"
      />
    </div>
  );
};

export default BannerImage;
