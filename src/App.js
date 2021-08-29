import React, {useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { products } from "./components/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";
import TtileMenu from "./components/TtileMenu";
import { GlobalStyle } from "./globalStyles";


function App() {
  const [isOpen,setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <TtileMenu />
      <Products heading="Choose your favorite" data={products} />
      <Feature />
      <Footer />
    </Router>
  );
}

export default App;
