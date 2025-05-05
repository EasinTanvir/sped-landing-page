import React from "react";

import QualityService from "./qualityService/QualityService";
import AreMenu from "./areMenu/AreMenu";

const AreMenuService = ({ foodMenu }) => {
  return (
    <div className="pt-96">
      <QualityService />
      <AreMenu foodMenu={foodMenu} />
    </div>
  );
};

export default AreMenuService;
