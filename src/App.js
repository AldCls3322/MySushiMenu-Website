import React, {useState, useEffect, createRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";
import TitleMenu from "./components/TitleMenu";
import { GlobalStyle } from "./globalStyles";
import { useWindowScroll } from "react-use";
// import database from "./firebase/config";

function App() {
  const SushiSection = createRef();
  const NigiriSection = createRef();

  const goToSushiSection = () => window.scrollTo( {top: SushiSection.current.offsetTop , behavior: "smooth"} );
  // window.scrollTo( {top: SushiSection.current.offsetTop , behavior: "smooth"} );
  // {top: SushiSection.current, behavior: "smooth"}
  // SushiSection.current.scrollIntoView()
  const goToNigiriSection = () => window.scrollTo( {top: NigiriSection.current.offsetTop , behavior: "smooth"} );

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

  // const [japaneseFood, setJapaneseFood] = useState([])
  // const getJapaneseFood = () => {
  //   database.collection('japaneseFood').onSnapshot((snapshot) => {
  //     setJapaneseFood(snapshot.docs.map((doc) => {
  //       return { id: doc.id, name: doc.data().name}
  //     }))
  //   })
  // }
  // useEffect(() => {
  //   getJapaneseFood();
  // }, [])

  return (
    <Router>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle} goToSushiSection={goToSushiSection} goToNigiriSection={goToNigiriSection} visibility={visible}/>
      <TitleMenu goToSushiSection={goToSushiSection} />
      <Products heading="Our Artwork Sushi" collection="sushiMenu" ref={SushiSection}/>
      <Feature scrollToTop={scrollToTop}/>
      <Products heading="Our Famous Nigiri" collection="nigiriMenu" ref={NigiriSection}/>
      <Footer />
    </Router>
  );
}

export default App;
