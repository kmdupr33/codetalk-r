import React, { useState } from "react";

import CodetalkRuntime from "./lib";
import parsedTalks from "./parsed_code_talks";
import JSONPretty from "react-json-pretty";

const Demo = () => {
  const [index, setIndex] = useState(-1);
  if (index === -1) {
    return (
      <div>
        {parsedTalks.map((talk, index) => (
          <JSONPretty
            key={index}
            style={{
              marginTop: 30,
              maxWidth: "70vw",
              backgroundColor: index % 2 === 0 ? "white" : "grey"
            }}
            onClick={() => setIndex(index)}
            data={talk}
          />
        ))}
      </div>
    );
  }
  return <CodetalkRuntime codetalk={parsedTalks[index]} />;
};

export default Demo;
