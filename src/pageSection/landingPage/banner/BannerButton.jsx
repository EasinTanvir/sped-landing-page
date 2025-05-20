import React from "react";
import Motion from "@/components/ui/Motion";
import Link from "next/link";
import { useParams } from "next/navigation";

const BannerButton = ({ buttonOneText, buttonTwoText }) => {
  const { locale } = useParams();
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
        <Link
          target="_blank"
          href={`${process.env.NEXT_PUBLIC_SPED_FRONTEND_BASE_URL}/${locale}/fin/joensuu/restaurant/ravintola-sinet`}
          className="border-none py-2.5 px-7 text-white rounded-md bg-colors-button"
        >
          {buttonOneText}
        </Link>
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
        <Link
          target="_blank"
          href={`${process.env.NEXT_PUBLIC_SPED_FRONTEND_BASE_URL}/${locale}/fin/joensuu/restaurant/ravintola-sinet`}
          className="py-2.5 px-7 !text-colors-button rounded-md bg-transparent border !border-colors-button"
        >
          {buttonTwoText}
        </Link>
      </Motion>
    </div>
  );
};

export default BannerButton;
