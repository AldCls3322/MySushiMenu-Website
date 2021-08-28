import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import TtileMenu from "./components/TtileMenu";
import { GlobalStyle } from "./globalStyles";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <TtileMenu />
    </Router>
  );
}

export default App;
