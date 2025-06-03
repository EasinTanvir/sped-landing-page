import React from "react";

import NewsLetterCard from "./NewsLetterCard";
import { Container, H2 } from "@/index";
import { lobster } from "@/app/(routes)/[locale]/layout";
import { useTranslations } from "next-intl";

const NewsLetter = () => {
  const t = useTranslations("newsLetter");
  return (
    <div className=" pt-20 pb-36 ">
      <Container className="space-y-20">
        <H2
          className={`lg:text-6xl sm:text-5xl text-4xl text-center font-bold italic sm:!leading-[80px] !leading-[50px] ${lobster.className}`}
        >
          {t("pageTitle")}
        </H2>

        <NewsLetterCard t={t} />
      </Container>
    </div>
  );
};

export default NewsLetter;
