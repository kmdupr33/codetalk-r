import React from "react";
import Line from "./Line";

const Slide = ({ input }) => {
  const stripFences = input.slice(1).slice(0, -1);
  console.log(`Slide: ${JSON.stringify(stripFences)}`);
  return stripFences[0].map(line => <Line input={line}/>);  
};

export default Slide;
