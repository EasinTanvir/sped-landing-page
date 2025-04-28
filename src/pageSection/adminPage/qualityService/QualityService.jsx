"use client";
import React, { useState } from "react";
import ImageUploader from "@/components/shared/ImageUploader";
import TitleInput from "@/components/shared/TitleInput";
import DescriptionInput from "@/components/shared/DescriptionInput";
import { Button } from "@/index"; // Assuming you have a shared Button component

const QualityService = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
      <ImageUploader image={image} setImage={setImage} />
      <TitleInput title={title} setTitle={setTitle} />
      <DescriptionInput
        description={description}
        setDescription={setDescription}
      />
      <Button className="px-5 py-2 rounded-lg font-semibold">Save</Button>
    </div>
  );
};

export default QualityService;
