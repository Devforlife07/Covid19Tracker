import React from "react";
import Spinnerimg from "./spinner.gif";
const Spinner = () => {
  return <img style={spinStyle} src={Spinnerimg} alt="Not Found" />;
};
const spinStyle = {
  width: "60vw",
  height: "70vw",
};
export default Spinner;
