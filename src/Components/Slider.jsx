import React, { useState } from "react";
import Title from "./Title";
import { slide } from "../silder/silderimg";
import { ChevronRight, ChevronLeft } from "lucide-react"; // remove Dot here, since you’re using it separately
import { Dot } from "lucide-react";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const backgroundimg = {
    backgroundImage: `url(${slide[currentIndex].s1})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const gotoPrevious = () => {
    console.log('uxy')
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slide.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const gotoNext = () => {
    console.log('uxy')
    const isLastSlide = currentIndex === slide.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <div className="lg:px-10 mt-10 lg:py-10 bg-white rounded-lg shadow-lg h-120">
      <div className="w-full h-96">
        <div
          style={backgroundimg}
          className="w-full h-full  flex justify-between items-center"
        >
           
           <div className="flex  w-full h-full items-center
            justify-between text-white 
           bg-black/40 rounded-lg">
             <ChevronLeft onClick={gotoPrevious} className="cursor-pointer h-5" />
            
           <div className="flex flex-col justify-center items-center">
             <h1 className="text-4xl font-bold mb-2">The Food Hub</h1>
            <p className="text-lg mb-4 px-4 text-center max-w-lg">
              Discover the taste of fresh and delicious homemade recipes. We
              bring you the best quality and flavor straight from our kitchen.
            </p>
            <button className="border border-red-500 text-white 
            font-semibold px-6 py-2 rounded-md
             hover:bg-red-600 transition cursor-pointer"   onClick={() =>
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })
  }>
              Contact Us
            </button>
           </div>
            <ChevronRight onClick={gotoNext} className="cursor-pointer h-5" />
          </div>
        
          
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-3">
        {slide.map((_, index) => (
          <div key={index}>
            <Dot
              onClick={() => goToSlide(index)}
              className={`h-5 w-5 mx-1 cursor-pointer ${
                currentIndex === index ? "text-black" : "text-gray-400"
              }`}
            />
          </div>
        ))}
      </div>

      <Title />
    </div>
  );
};

export default Slider;
