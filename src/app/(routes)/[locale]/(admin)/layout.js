import React from "react";

import AdminSidebar from "@/pageSection/adminPage/AdminSidebar";
import AdminLayoutWrapper from "@/pageSection/adminPage/AdminLayoutWrapper";

function AdminLaout({ children }) {
  return (
    <div className="flex">
      <AdminSidebar />
      <AdminLayoutWrapper>{children}</AdminLayoutWrapper>
    </div>
  );
}
export default AdminLaout;
