import React from "react";

const ItemsListEditor = ({ items, setItems }) => {
  const handleItemChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index] = value;
    setItems(updatedItems);
  };

  const addItem = () => {
    setItems([...items, ""]);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, idx) => idx !== index);
    setItems(updatedItems);
  };

  return (
    <div className="space-y-2">
      <label className="block text-gray-700 font-bold">Items List</label>
      {items.map((item, index) => (
        <div key={index} className="flex gap-2">
          <input
            type="text"
            value={item}
            onChange={(e) => handleItemChange(index, e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
          <button
            type="button"
            onClick={() => removeItem(index)}
            className="text-red-500 font-bold"
          >
            ✕
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addItem}
        className="text-blue-600 font-medium mt-2"
      >
        + Add Item
      </button>
    </div>
  );
};

export default ItemsListEditor;
