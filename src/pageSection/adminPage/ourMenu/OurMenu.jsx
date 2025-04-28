"use client";
import React, { useState } from "react";
import ImageUploader from "@/components/shared/ImageUploader";
import TitleInput from "@/components/shared/TitleInput";
import DescriptionInput from "@/components/shared/DescriptionInput";
import PriceDetailsEditor from "./PriceDetailsEditor";
import { Button } from "@/index"; // Assuming you have a Button component

const OurMenu = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priceTitle, setPriceTitle] = useState("");
  const [priceUnit, setPriceUnit] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <ImageUploader image={image} setImage={setImage} />
      <TitleInput title={title} setTitle={setTitle} />
      <DescriptionInput
        description={description}
        setDescription={setDescription}
      />
      <PriceDetailsEditor
        priceTitle={priceTitle}
        setPriceTitle={setPriceTitle}
        priceUnit={priceUnit}
        setPriceUnit={setPriceUnit}
        price={price}
        setPrice={setPrice}
      />
      <Button className="px-5 py-2 rounded-lg font-semibold">Save</Button>
    </div>
  );
};

export default OurMenu;
