import OurMenu from "@/pageSection/adminPage/ourMenu/OurMenu";
import React from "react";

const Menu = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/admin/menu");
  const data = await res.json();

  return (
    <div>
      <OurMenu menuList={data} />
    </div>
  );
};

export default Menu;
