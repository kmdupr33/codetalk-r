import React from "react";

export default ({ input }) => {
  const stripFences = input.slice(1).slice(0, -1)
  return stripFences.map(line => <p>{line}</p>)  
};
