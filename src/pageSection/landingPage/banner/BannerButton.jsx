import { Button } from "@/index";
import React from "react";
import Motion from "@/components/ui/Motion";

const BannerButton = ({ buttonOneText, buttonTwoText }) => {
  return (
    <div className="space-x-5 flex">
      <Motion
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay: 0.6 },
        }}
        whileHover={{ scale: 1.05 }}
      >
        <Button className="border-none py-2.5 px-7 text-white rounded-md">
          {buttonOneText}
        </Button>
      </Motion>

      <Motion
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, delay: 0.8 },
        }}
        whileHover={{ scale: 1.05 }}
      >
        <Button className="py-2.5 px-7 !text-colors-button rounded-md bg-transparent border !border-colors-button">
          {buttonTwoText}
        </Button>
      </Motion>
    </div>
  );
};

export default BannerButton;
