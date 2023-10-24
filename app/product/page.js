import React from "react";
import { getShoes } from "@/components/axios-req";
import CardCompo from "@/components/card-compo/card-compo";

const Product = async () => {
  const res = await getShoes();
  return (
    <div className="md:p-2">
      <h1 className="pl-5">Products page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14">
        {res?.data &&
          res?.data?.map((item) => <CardCompo key={item?.id} item={item} />)}
      </div>
    </div>
  );
};

export default Product;
