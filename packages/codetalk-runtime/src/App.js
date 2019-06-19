import React, { useState } from "react";
import { render } from "react-dom";

import CodetalkRuntime from "./lib";
import parsedTalks from "./parsed_code_talks";

const Demo = () => {
  const [index, setIndex] = useState(-1);
  if (index === -1) {
    return (
      <div>
        {parsedTalks.map((talk, index) => (
          <section style={{marginTop: 30, maxWidth: '70vw'}} onClick={() => setIndex(index)}>{JSON.stringify(talk, null, 2)}</section>
        ))}        
      </div>
    );
  }
  return <CodetalkRuntime parsed={parsedTalks[index]} />;
};

export default Demo;
