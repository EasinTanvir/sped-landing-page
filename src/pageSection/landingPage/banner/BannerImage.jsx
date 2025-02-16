import Image from "next/image";
import React from "react";
import { bannerImage } from "@/utils/constant";
import Motion from "@/components/ui/Motion";

const BannerImage = () => {
  return (
    <Motion
      className="flex-1 relative aspect-[2/2]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image
        priority
        className="object-cover w-full"
        src={bannerImage}
        alt="banner image"
      />
    </Motion>
  );
};

export default BannerImage;
