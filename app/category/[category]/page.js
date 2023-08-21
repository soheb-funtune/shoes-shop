import React from "react";
// import { useRouter } from "next/router";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";

const Category = () => {
  //   const router = useRouter();
  //   const { slug } = router.query;
  return (
    <div className="w-full max-w-[993px] mx-auto md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md-mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold loading-tight">
            Running Shoes
          </div>
        </div>
      </Wrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Category;
