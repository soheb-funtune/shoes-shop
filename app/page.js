// import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import ProductCard from "@/components/ProductCard";

import { getShoes } from "@/components/axios-req";
import CardCompo from "@/components/card-compo/card-compo";

export default async function Home() {
  const res = await getShoes();
  // console.log("api called from front-end:", res?.data);
  return (
    <main className="min-h-[80vh] w-full max-w-[993px] mx-auto">
      <HeroBanner />
      <Wrapper>
        {/* heading and paragaph start */}
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>
        {/* heading and paragaph end */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14">
          {res?.data &&
            res?.data.map((item) => <CardCompo key={item?.id} item={item} />)}
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
    </main>
  );
}
