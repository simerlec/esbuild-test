import React from "react";
import ReactDOM from "react-dom";
import { Greet } from "./Component";

const App = () => (
  <>
    <Greet />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
