import React from "react";
import "./App.css";
import Person from "./components/Person";
import Display from "./components/DisplayAll";
import Calc from "./components/States";
import Todo from "./components/Todo";

const App = () => (
  <div className="App">
    <Person />
    <Display />
    <Calc />
    <Todo />
  </div>
);

export default App;
