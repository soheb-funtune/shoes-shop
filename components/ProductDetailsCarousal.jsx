import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousal = () => {
  return (
    <div className="text-red-400 text-[20px] w-full max-w-[993px] mx-auto sticky top-[50px]">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        // showArrows={false}
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        <img
          src="./assets/slide-1.png"
          className="aspect-[16/10] md:aspect-auto"
        />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousal;
