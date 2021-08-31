import React, {useState, useEffect, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { products } from "./components/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";
import TitleMenu from "./components/TitleMenu";
import { GlobalStyle } from "./globalStyles";
import { useWindowScroll } from "react-use";

function App() {
  const SushiSection = useRef(null);

  const goToSushiSection = () => window.scrollTo( {top: SushiSection.current.offsetTop , behavior: "smooth"} );
  // window.scrollTo( {top: SushiSection.current.offsetTop , behavior: "smooth"} );
  // {top: SushiSection.current, behavior: "smooth"}
  // SushiSection.current.scrollIntoView()

  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisibility] = useState(false);
  useEffect(() => {
    if (pageYOffset > 80){
      setVisibility(true);
    }
    else{
      setVisibility(false);
    }
  }, [pageYOffset]);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const [isOpen,setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle} goToSushiSection={goToSushiSection} visibility={visible}/>
      <TitleMenu goToSushiSection={goToSushiSection}/>
      <Products ref={SushiSection} heading="Choose your favorite" data={products}/>
      <Feature scrollToTop={scrollToTop}/>
      <Footer />
    </Router>
  );
}

export default App;
