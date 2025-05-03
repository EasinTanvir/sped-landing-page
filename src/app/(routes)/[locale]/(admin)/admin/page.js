import React from "react";

import DashBoardPage from "@/pageSection/adminPage/dashboardPage/DashBoardPage";
import { getServerCredentials } from "../../../../../../session/serverSesseion";
import { redirect } from "@/i18n/routing";

const Admin = async () => {
  const session = await getServerCredentials();

  if (!session || session.user.role !== "ADMIN") return redirect("/");

  const res = await fetch(process.env.BASE_URL + "/api/admin/brand-setting");
  const data = await res.json();

  return (
    <React.Fragment>
      <DashBoardPage data={data?.data} />
    </React.Fragment>
  );
};

export default Admin;
