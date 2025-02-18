import React from "react";
import AdminSidebar from "@/pageSection/adminPage/AdminSidebar";

function AdminLaout({ children }) {
  return (
    <div className="">
      <AdminSidebar />
      <div>{children}</div>
    </div>
  );
}
export default AdminLaout;
