import React from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";

const Blocks = ({ input }) => {
  console.log(`Blocks: ${JSON.stringify(input)}`);
  // Blocks: [["#","Hello world"]]
  // Blocks: [["##"," goodbye"]]
  // Blocks: ["idk why you say goodbye"]
  const [block, emptyBlocks] = input;
  const getRenderedBlock = () => {
    if (!Array.isArray(block)) {
      return <p>{input.join("")}</p>;
    }
    switch (block[0]) {
      case "#":
        return <h1>{block[1]}</h1>;
      case "##":
        return <h2>{block[1]}</h2>;  
      case "```":
        const [_, language, code] = block;
        return <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>;
      case "1.":
        return <ol><li>{block[1]}</li></ol>
      default:
        return input;
    }    
  };
  return (
    <React.Fragment>
      {getRenderedBlock()}
      {emptyBlocks && emptyBlocks.map(_ => <br />)}
    </React.Fragment>
  );
};

Blocks.propTypes = {
  input: PropTypes.array.isRequired
};

export default Blocks;
