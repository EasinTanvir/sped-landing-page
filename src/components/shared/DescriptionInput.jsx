import React from "react";

const DescriptionInput = ({ description, setDescription }) => {
  return (
    <div>
      <label className="block text-gray-700 font-medium">
        Short Description
      </label>
      <input
        required
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mt-1"
      />
    </div>
  );
};

export default DescriptionInput;
