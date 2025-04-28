import React from "react";

const PriceDetailsEditor = ({
  priceTitle,
  setPriceTitle,
  priceUnit,
  setPriceUnit,
  price,
  setPrice,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-gray-700 font-medium">Price Title</label>
        <input
          type="text"
          value={priceTitle}
          onChange={(e) => setPriceTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mt-1"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Price Unit</label>
        <input
          type="text"
          value={priceUnit}
          onChange={(e) => setPriceUnit(e.target.value)}
          placeholder="e.g. per plate, per item, etc."
          className="w-full p-2 border border-gray-300 rounded-md mt-1"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mt-1"
        />
      </div>
    </div>
  );
};

export default PriceDetailsEditor;
