import React, { Component } from "react";
import PropTypes from "prop-types";
import Slide from "./Slide";

export default class CodetalkRuntime extends Component {
  static propTypes = {
    parsed: PropTypes.array
  };

  slideReducer(acc, curr) {
    acc += curr.join("")
    return acc;
  }

  render() {    
    const { parsed } = this.props;
    // [["codetalk",["slide",[["hello, world"]],"end"]]]

    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {parsed[0]
          .slice(1)
          .reduce((acc, curr) => {
            if (curr[0] === "slide") {
              // we're dealing w/ slides then
              acc.push(<Slide input={curr}/>);
            }
            return acc;
          }, [])}          
      </div>
    );
  }
}
