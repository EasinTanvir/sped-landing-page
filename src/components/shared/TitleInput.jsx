import React from "react";

const TitleInput = ({ title, setTitle, label = "Title", type = "text" }) => {
  return (
    <div>
      <label className="block text-gray-700 font-bold">{label}</label>
      <input
        required
        type={type}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mt-1"
      />
    </div>
  );
};

export default TitleInput;
