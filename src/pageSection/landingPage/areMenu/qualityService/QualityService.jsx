import React from "react";

import QualityServiceCard from "./QualityServiceCard";
import { qualityServices } from "@/utils";
import { Container, H2 } from "@/index";
import { lobster } from "@/app/(routes)/[locale]/layout";
import Motion from "@/components/ui/Motion";

const QualityService = () => {
  return (
    <Motion
      initial={{ rotateX: 90, opacity: 0, y: 50 }}
      whileInView={{ rotateX: 0, opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <Container className="space-y-10 -mt-64">
        <H2
          className={`lg:text-6xl sm:text-5xl text-4xl text-center font-bold italic sm:!leading-[80px] !leading-[50px] ${lobster.className}`}
        >
          Quality Services
        </H2>
        <div className=" bg-white grid lg:grid-cols-4 sm:grid-cols-2  py-16 px-8 gap-10  rounded-lg">
          {qualityServices.map((item, index) => (
            <QualityServiceCard key={index} {...item} />
          ))}
        </div>
      </Container>
    </Motion>
  );
};

export default QualityService;
