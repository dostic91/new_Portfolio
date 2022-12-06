import React  from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Slider from "./components/slider/Slider";

const App = () => {
  return (
      <div>
        <Header />
        <Main />
        <Projects />
      </div>
  );
}

export default App;
