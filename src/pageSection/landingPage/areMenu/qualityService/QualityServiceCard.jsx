import React from "react";

import { H2, Icon, Text } from "@/index";

const QualityServiceCard = ({ icon, title, desc }) => {
  return (
    <div className="w-full  flex flex-col items-center text-center space-y-5">
      <Icon size={60} icon={icon} className="text-colors-button" />
      <H2 className="text-2xl  font-bold mt-2 text-colors-heading">{title}</H2>
      <Text className="text-colors-text !text-sm">{desc}</Text>
    </div>
  );
};

export default QualityServiceCard;
