import React, { Component } from "react";
import { render } from "react-dom";

import "./style.css";
import DynamicListModal from "./DynamicListModal";

const App = () => {
  return <DynamicListModal />;
};
render(<App />, document.getElementById("root"));
