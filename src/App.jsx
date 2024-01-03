import { useState, useEffect } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBTN(true);
      } else {
        setshowScrollBTN(false);
      }
    });
  }, []);

  const [showSrollBTN, setshowScrollBTN] = useState(false);

  

  return (
    <div id="up" className="container">
      <Header />

      <Hero />
      <div id="Projects" className="divider" />
      <Main />
      <div id="Contact" className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      <a style={{ opacity: showSrollBTN ? 1 : 0, transition: "1s" }} href="#up">
        <button className="icon-keyboard_arrow_up scroll2Top"></button>
      </a>
    </div>
  );
}

export default App;
