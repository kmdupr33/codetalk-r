import React, { useState } from "react";
import Slide from "./Slide";

const CodetalkRuntime = ({ codetalk }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // [["codetalk",["slide",[["hello, world"]],"end"]]]

  const slides = codetalk[0].slice(1);
  console.log(`Slides: ${JSON.stringify(slides)}`);
  return (
    <div
      onClick={() => {
        const nextSlideIndex = currentSlide + 1;
        if (nextSlideIndex < slides.length) setCurrentSlide(nextSlideIndex);
      }}
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <Slide input={slides[currentSlide]} />
    </div>
  );
};
export default CodetalkRuntime;
