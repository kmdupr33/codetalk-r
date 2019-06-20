import React from "react";
import Blocks from "./Blocks";

const Slide = ({ input }) => {
  /* 
    we name the variables even though we don't use them so its
    clearer where we are in the AST  
  */
  //eslint-disable-next-line no-unused-vars 
  const [slidesKeyword, markdown, endSlideKeyword] = input;
  console.log(`Slide: ${JSON.stringify(markdown)}`);
  return markdown.map(line => <Blocks input={line}/>);  
};

export default Slide;
