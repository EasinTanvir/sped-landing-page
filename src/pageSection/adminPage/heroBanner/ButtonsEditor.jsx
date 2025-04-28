import React from "react";

const ButtonsEditor = ({
  buttonOneText,
  setButtonOneText,
  buttonTwoText,
  setButtonTwoText,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium">
          Button One Text
        </label>
        <input
          type="text"
          value={buttonOneText}
          onChange={(e) => setButtonOneText(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mt-1"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-medium">
          Button Two Text
        </label>
        <input
          type="text"
          value={buttonTwoText}
          onChange={(e) => setButtonTwoText(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mt-1"
        />
      </div>
    </div>
  );
};

export default ButtonsEditor;
