import React from "react";
import Wrapper from "@/components/Wrapper";
import ProductDetailsCarousal from "@/components/ProductDetailsCarousal";

const ProductDetails = () => {
  return (
    <div className="w-full max-w-[993px] md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className="w-full md:w-auto max-w-[500px] lg-max-w-full flex-[1.5] mx-auto lg:mx-0 ">
            <ProductDetailsCarousal />
          </div>
          {/* left column end */}
          {/* right column start */}
          <div className="flex-[1] py-3">right</div>
          {/* right column end */}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
