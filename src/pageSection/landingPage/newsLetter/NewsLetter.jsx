import React from "react";

import NewsLetterCard from "./NewsLetterCard";
import { Container, H2 } from "@/index";
import { lobster } from "@/app/layout";

const NewsLetter = () => {
  return (
    <div className=" py-20 ">
      <Container className="space-y-20">
        <H2
          className={`lg:text-6xl sm:text-5xl text-4xl text-center font-bold italic sm:!leading-[80px] !leading-[50px] ${lobster.className}`}
        >
          Newsletter
        </H2>

        <NewsLetterCard />
      </Container>
    </div>
  );
};

export default NewsLetter;
