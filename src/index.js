import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>Hi welcome to your react app</p>;
}

render(<Hi />, document.getElementById("app"));
