import { H3, Icon, Text } from "@/index";
import React from "react";

const OfferItems = ({ icon, title, description }) => {
  return (
    <div className="flex  gap-4 items-center   max-w-80  ">
      <div className="min-h-14 min-w-14 rounded-full flex-center bg-colors-button   ">
        <Icon className="text-white" icon={icon} size={14} />
      </div>
      <div>
        <H3 className="text-lg font-semibold text-colors-heading">{title}</H3>
        <Text className="text-colors-text !text-sm">{description}</Text>
      </div>
    </div>
  );
};

export default OfferItems;
