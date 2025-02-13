"use client";

import React from "react";
import ContextProvider from "@/contextStore/GlobalContext";

const ContextWrapper = ({ children }) => {
  return <ContextProvider>{children}</ContextProvider>;
};

export default ContextWrapper;
