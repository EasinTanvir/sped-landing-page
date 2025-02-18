import React from "react";

import { Button, Icon } from "@/index";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "@/utils/icons";
import { useGlobalContext } from "@/contextStore/GlobalContext";

const ToggleIcon = () => {
  const { dashBoardSideBar, setBoardSideBar } = useGlobalContext();

  const onToggleHandler = () => {
    setBoardSideBar(!dashBoardSideBar);
  };
  return (
    <div
      className={`flex ${dashBoardSideBar ? "justify-end" : "justify-center"}`}
    >
      <Button className="!bg-transparent" onClick={onToggleHandler}>
        <Icon
          className="text-white"
          icon={dashBoardSideBar ? FaLongArrowAltLeft : FaLongArrowAltRight}
          size={20}
        />
      </Button>
    </div>
  );
};

export default ToggleIcon;
