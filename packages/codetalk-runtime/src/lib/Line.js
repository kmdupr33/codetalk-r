import React from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-syntax-highlighter";

const Line = ({ input }) => {
  console.log(`Line: ${JSON.stringify(input)}`);
  // Line: [["#","Hello world"]]
  // Line: [["##"," goodbye"]]
  // Line: ["idk why you say goodbye"]
  if (!input.some(element => Array.isArray(element))) {
    return <p>{input.join("")}</p>;
  }
  if (input[0][0] === "#") {
    return <h1>{input[0][1]}</h1>;
  }
  if (input[0][0] === "##") {
    return <h2>{input[0][1]}</h2>;
  }
  if (input[0][0] === "```") {
    const [_, language, code] = input[0];
    return <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>;
  }
  return input;
};

Line.propTypes = {
  input: PropTypes.array.isRequired
};

export default Line;
