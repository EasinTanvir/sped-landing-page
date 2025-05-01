"use client";

import React from "react";
import { SessionProvider } from "next-auth/react";

const SessionPrivider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionPrivider;
