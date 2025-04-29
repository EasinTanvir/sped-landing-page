import React from "react";

import DashBoardPage from "@/pageSection/adminPage/dashboardPage/DashBoardPage";
import { getServerCredentials } from "../../../../../../session/serverSesseion";
import { redirect } from "@/i18n/routing";

const Admin = async () => {
  const user = await getServerCredentials();

  if (!user) redirect("/login");

  return (
    <React.Fragment>
      <DashBoardPage />
    </React.Fragment>
  );
};

export default Admin;
