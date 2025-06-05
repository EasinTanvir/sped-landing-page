import React, { useContext, useEffect, useState } from "react";

const GlobalContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [openNav, setOpenNav] = useState(false);
  const [dashBoardSideBar, setBoardSideBar] = useState(true);
  const [switcher, setSwitcher] = useState("delivery");

  useEffect(() => {
    const handleResize = () => {
      setBoardSideBar(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sendData = {
    openNav,
    setOpenNav,
    dashBoardSideBar,
    setBoardSideBar,
    switcher,
    setSwitcher,
  };

  return (
    <GlobalContext.Provider value={sendData}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (context === null) {
    throw new Error("someting went wrong in global context");
  }

  return context;
};

export default ContextProvider;
