"use client";
import React, { useState } from "react";
import TitleInput from "@/components/shared/TitleInput";
import DescriptionInput from "@/components/shared/DescriptionInput";
import ItemsListEditor from "@/components/shared/ItemsListEditor";
import ButtonsEditor from "./ButtonsEditor";
import { Button } from "@/index";

const HeroBanner = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([""]);
  const [buttonOneText, setButtonOneText] = useState("");
  const [buttonTwoText, setButtonTwoText] = useState("");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <TitleInput title={title} setTitle={setTitle} />
      <DescriptionInput
        description={description}
        setDescription={setDescription}
      />
      <ItemsListEditor items={items} setItems={setItems} />
      <ButtonsEditor
        buttonOneText={buttonOneText}
        setButtonOneText={setButtonOneText}
        buttonTwoText={buttonTwoText}
        setButtonTwoText={setButtonTwoText}
      />

      <Button className="px-5 py-2 rounded-lg font-semibold">Save</Button>
    </div>
  );
};

export default HeroBanner;
