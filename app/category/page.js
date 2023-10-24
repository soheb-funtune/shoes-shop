import Link from "next/link";
import React from "react";

const subMenuData = [
  { id: 1, name: "Jordan" },
  { id: 2, name: "Sneakers" },
  { id: 3, name: "Running_shoes" },
  { id: 4, name: "Football_shoes" },
];
const Categogy = () => {
  return (
    <div className="flex items-center gap-1 md:gap-8 px-10 py-6  cursor-mouse">
      <h1> Categories of Shoes</h1>
      <div className="flex gap-4 h-fit overflow-y-auto ">
        {subMenuData?.map(({ name }) => (
          <Link
            className="bg-red-500 px-2 py-1 rounded-md "
            href={`/category/${name}`}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categogy;
