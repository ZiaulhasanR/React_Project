import React, { useState } from "react";
const Listgroup = () => {
  const items = ["New York", "San Francisco", "London", "Tokyo"];
  const [selectedItem, setSelectedItem] = useState(-1)

  return (
    <div className="w-full max-w-sm mx-auto">
      <h4 className="text-lg font-semibold mb-2">Cities</h4>
      <div className="flex flex-col border rounded-md divide-y">
        {items.map((item) => (
          <button
            key={item}
            className={`px-4 py-2 text-left transition ${
              item === selectedItem
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setSelectedItem(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Listgroup;
