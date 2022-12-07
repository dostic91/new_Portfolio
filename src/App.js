import React  from "react";
import About from "./components/About";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
      <div>
        <Header />
        <Main />
        <About />
        <Projects />
        <Footer />
      </div>
  );
}

export default App;
