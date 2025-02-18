import React from "react";

import { Button, Icon } from "@/index";
import { FaBars, RxCross2 } from "@/utils/icons";
import { useGlobalContext } from "@/contextStore/GlobalContext";

const ResponsiveButton = () => {
  const { openNav, setOpenNav } = useGlobalContext();

  return (
    <React.Fragment>
      {!openNav ? (
        <Button
          onClick={() => setOpenNav(true)}
          className="lg:hidden flex-center p-2 rounded-md z-50"
        >
          <Icon icon={FaBars} size={20} className="text-white" />
        </Button>
      ) : (
        <Button
          onClick={() => setOpenNav(false)}
          className="lg:hidden flex-center p-2 rounded-md z-50"
        >
          <Icon icon={RxCross2} size={20} className="text-white" />
        </Button>
      )}
    </React.Fragment>
  );
};

export default ResponsiveButton;
