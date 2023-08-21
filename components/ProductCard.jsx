import React from "react";
import Link from "next/link";
import Image from "next/image";
// import logo from "@/public/assets/product-1.webp";

const ProductCard = () => {
  return (
    <Link
      href="/product/1"
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <img
        src={"/assets/product-1.webp"}
        className="w-full"
        alt="product image"
      />{" "}
      <div className="p-4 text-black/[0.9] ">
        <h2 className="text-lg font-medium"> product name</h2>
        <div className="flex items-center text-black-[0.5]">
          <p className=" text-lg font-semobold">$20.00</p>
          <p className="text-base font-medium line-through">$25.00</p>
          <p className="ml-auto text-base font-medium  text-green-500">
            20% off
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
