import React from "react";
import { H3, Icon, Text } from "@/index";
import Motion from "@/components/ui/Motion";

const OfferItems = ({ icon, title, description }) => {
  return (
    <Motion
      className="flex gap-4 items-center max-w-80"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="min-h-14 min-w-14 rounded-full flex-center bg-colors-button">
        <Icon className="text-white" icon={icon} size={14} />
      </div>
      <div>
        <H3 className="text-lg font-semibold text-colors-heading">{title}</H3>
        <Text className="text-colors-text !text-sm">{description}</Text>
      </div>
    </Motion>
  );
};

export default OfferItems;
