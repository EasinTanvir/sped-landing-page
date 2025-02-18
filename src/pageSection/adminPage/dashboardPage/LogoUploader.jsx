"use client";
import { useState } from "react";

const LogoUploader = () => {
  const [logo, setLogo] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <label className="block text-gray-700 font-medium">Brand Logo</label>
      <input type="file" onChange={handleFileChange} className="mt-2 w-full" />
      {logo && (
        <img
          src={logo}
          alt="Brand Logo"
          className="mt-3 w-24 h-24 rounded-lg shadow-md"
        />
      )}
    </div>
  );
};

export default LogoUploader;
