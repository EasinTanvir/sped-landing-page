import React from "react";

const ImageUploader = ({ image, setImage }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div>
      <label className="block text-gray-700 font-medium">Upload Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="w-full mt-1"
      />
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="Preview"
          className="mt-4 w-32 h-32 object-cover rounded-md shadow-md"
        />
      )}
    </div>
  );
};

export default ImageUploader;
