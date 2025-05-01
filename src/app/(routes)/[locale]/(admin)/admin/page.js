import React from "react";

import DashBoardPage from "@/pageSection/adminPage/dashboardPage/DashBoardPage";
import { getServerCredentials } from "../../../../../../session/serverSesseion";
import { redirect } from "@/i18n/routing";

const Admin = async () => {
  const session = await getServerCredentials();

  if (!session || session.user.role !== "ADMIN") redirect("/");

  return (
    <React.Fragment>
      <DashBoardPage />
    </React.Fragment>
  );
};

export default Admin;
