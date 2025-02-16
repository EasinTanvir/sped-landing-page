import React from "react";

import { Container } from "@/index";
import BookTableForm from "./BookTableForm";

const BookTable = () => {
  return (
    <div className=" py-20  ">
      <Container className="space-y-20">
        <BookTableForm />
      </Container>
    </div>
  );
};

export default BookTable;
