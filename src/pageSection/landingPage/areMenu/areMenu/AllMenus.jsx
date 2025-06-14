import React from "react";

import { Container, H2 } from "@/index";
import AreMenuWrapper from "./AreMenuWrapper";
import { lobster } from "@/app/(routes)/[locale]/layout";

const AllMenus = ({ foodMenu, locale, menuT }) => {
  return (
    <Container className="mt-20 space-y-12 bg-white pb-24">
      <H2
        className={`lg:text-6xl sm:text-5xl text-4xl text-center font-bold italic sm:!leading-[80px] !leading-[50px] ${lobster.className} `}
      >
        {menuT("menuTitle")}
      </H2>

      <AreMenuWrapper foodMenu={foodMenu} locale={locale} />
    </Container>
  );
};

export default AllMenus;
