"use client";
import React, { useState, useEffect } from "react";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousal from "@/components/ProductDetailsCarousal";
import { IoMdHeartEmpty } from "react-icons/io";
import MultiCarousel from "@/components/MultiCarousel";
import { useParams } from "next/navigation";
import { getShoes } from "@/components/axios-req";

const ProductDetails = () => {
  const [shoesData, setShoesData] = useState();
  const { product } = useParams();
  useEffect(async () => {
    const res = await getShoes(product);
    setShoesData(res?.data);
  }, []);
  console.log("product id", product, shoesData);

  return (
    <div className="w-full max-w-[993px] md:py-20 mx-[auto] ">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10  lg:gap-[100px] max-w-[993px] mx-auto">
          {/* left column start */}
          <div className="w-full md:w-auto max-w-[500px] lg-max-w-full flex-[1.5] mx-auto lg:mx-0 ">
            <ProductDetailsCarousal
              rating={shoesData?.rating?.rate}
              image={shoesData?.image}
            />
          </div>
          {/* left column end */}
          {/* right column start */}
          <div className="flex-[1] py-3">
            {/* product title */}
            <p className="text-[20px] font-semibold mb-2">{shoesData?.name}</p>
            {/* PRODUCT SUB-TITLE */}
            {!shoesData?.name && (
              <div className="text-lg font-semibold mb-5">
                Men&apos;s Golf Shoes
              </div>
            )}
            {/* PRODUCT PRICE */}
            <div className="text-lg font-semibold ">
              MRP : $ {shoesData?.price} . 00
            </div>
            <div className="text-md font-medium text-black-[0.5]  ">
              incl. of Taxes
            </div>
            <div className="text-md font-medium text-black-[0.5] mb-20  ">
              {`(Also include all aplicable duties)`}
            </div>
            {/* PRODUCT END */}
            {/* PRODUCT SIZE RANGE START */}
            <div className="mb-10">
              <div className="flex justify-between mb-2">
                <div className="text-md font-semibold">Select Size </div>
                <div className="text-md font-semibold text-black/[0.5] cursor-pointer">
                  Select Guide{" "}
                </div>
              </div>
              {/* SIZE SELECTION START */}
              <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
              </div>
              <div className="text-red-600 mt-1">
                Size selection is required
              </div>
              {/* SIZE SELECTION END*/}
            </div>
            <div>
              <button className="w-[100%] rounded-full text-white bg-black text-lg py-4 font-medium transition-transfrom active:scale-95 mb-3 hover:opacity-75">
                Add to Card{" "}
              </button>
              <button className="w-[100%] rounded-full bg-white border border-black text-black text-lg py-4 font-medium transition-transfrom active:scale-95  hover:opacity-75 mb-10 flex justify-center items-center gap-2">
                Wish List <IoMdHeartEmpty size={20} />
              </button>
            </div>
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                {shoesData?.description ||
                  `Integrate Hubspot with Webflow for automated emails I am looking
                for a freelancer who can integrate Hubspot with Webflow to
                automate our email marketing processes and streamline our
                marketing and sales efforts. Specific features that I have in
                mind for this integration`}
              </div>
              <div className="text-md mb-5">
                Integrate Hubspot with Webflow for automated emails I am looking
                for a freelancer who can integrate Hubspot with Webflow to
                automate our email marketing processes and streamline our
                marketing and sales efforts. Specific features that I have in
                mind for this integration
              </div>
            </div>
          </div>
          {/* right column end */}
        </div>
        <MultiCarousel />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
