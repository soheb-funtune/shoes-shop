import React from "react";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousal = ({ image, rating }) => {
  // const ratingArr = new Array(rating);
  console.log({ rating });
  return (
    <div className=" text-red-400 text-[20px] w-full max-w-[993px] mx-auto sticky top-[50px]">
      {/* <Carousel
      autoPlay={true}
      infiniteLoop={true}
      // showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
      > */}
      <img
        src={image ? image : "/assets/slide-1.png"}
        alt={image}
        className=" md:aspect-auto"
      />
      {/* <div className="absolute top-2 right-2">
        {ratingArr?.map((item) => (
          <span>{item}</span>
        ))}
      </div> */}
      {/* <div>hello world</div> */}
      {/* </Carousel> */}
    </div>
  );
};

export default ProductDetailsCarousal;
