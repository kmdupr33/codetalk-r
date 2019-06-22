import React from "react";
import Blocks from "./Blocks";

const Slide = ({ input }) => {
  const markdown = input
    .slice(1) // slide keyword
    .slice(0, -1); // end keyword
  console.log(`Slide: ${JSON.stringify(markdown)}`);  
  return markdown.map(blocks => <Blocks input={blocks} />);
};

export default Slide;
