"use client";
import { useState } from "react";

import LogoUploader from "./LogoUploader";
import FooterEditor from "./FooterEditor";
import { Button } from "@/index";

const BrandSettings = () => {
  const [brandTitle, setBrandTitle] = useState("SwiftDrop");

  return (
    <div className="bg-white lg:p-6 p-2 rounded-lg shadow-md space-y-6">
      <div>
        <label className="block text-gray-700 font-medium">Brand Title</label>
        <input
          type="text"
          value={brandTitle}
          onChange={(e) => setBrandTitle(e.target.value)}
          className="w-full  p-2 border border-gray-300 rounded-md mt-1"
        />
      </div>
      <LogoUploader />

      <FooterEditor />
      <Button className=" px-5 py-2 rounded-lg font-semibold ">Save</Button>
    </div>
  );
};

export default BrandSettings;
