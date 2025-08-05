import React from "react";
import "./App.css";
import Counter from "./Counter/Counter";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="container">
      <Counter />
    </div>
  );
};

export default App;
