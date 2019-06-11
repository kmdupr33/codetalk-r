import React, { useState } from "react";
import { render } from "react-dom";

import CodetalkRuntime from "../../src";
import parsedTalk from "./parsed_hello_world";

const Demo = () => {
  const [index, setIndex] = useState(-1);
  if (index === -1) {
    return (
      <React.Fragment>
        <a onClick={() => setIndex(0)}>Hello World</a>
      </React.Fragment>
    )
  }
  switch(index) {
    case 0:
      return <CodetalkRuntime parsed={parsedTalk} />;
    
  }
  
};

render(<Demo />, document.querySelector("#demo"));
