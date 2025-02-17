import React from "react";

import Image from "next/image";

const ChefCard = ({ chef }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
      <div className="relative w-full sm:aspect-[4/4.5] aspect-[4/3.5]">
        <Image src={chef.image} alt={chef.name} fill />
      </div>
      <div className="px-4 py-6 text-center">
        <h3 className="text-lg font-semibold">{chef.name}</h3>
        <p className="text-yellow-600 font-medium">{chef.position}</p>
      </div>
    </div>
  );
};

export default ChefCard;
