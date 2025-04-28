import React from "react";

import { Button, Icon } from "@/index";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "@/utils/icons";
import { useGlobalContext } from "@/contextStore/GlobalContext";
import Tooltip from "@/components/shared/Tooltip";

const ToggleIcon = () => {
  const { dashBoardSideBar, setBoardSideBar } = useGlobalContext();

  const onToggleHandler = () => {
    setBoardSideBar(!dashBoardSideBar);
  };
  return (
    <div
      className={`flex ${dashBoardSideBar ? "justify-end" : "justify-center"}`}
    >
      <Tooltip
        text={`Click To ${
          dashBoardSideBar ? "Close Sidebar" : "Open Sidebar"
        } `}
      >
        <Button
          className="px-2 py-0.5 rounded-md !bg-white"
          onClick={onToggleHandler}
        >
          <Icon
            className="text-black"
            icon={dashBoardSideBar ? FaLongArrowAltLeft : FaLongArrowAltRight}
            size={20}
          />
        </Button>
      </Tooltip>
    </div>
  );
};

export default ToggleIcon;
