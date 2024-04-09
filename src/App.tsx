import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Starcanvas,
  Tech,
  Work,
} from "./components";
import { useEffect, useState } from "react";

const App = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    // This will calculate how many pixels the page is vertically
    const winScroll = document.documentElement.scrollTop;
    // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // This will calculate the final total of the percentage of how much the user has scrolled.
    const scrolled = (winScroll / height) * 100;
    console.log(scrolled);

    setScrollTop(scrolled);
  };

  // window.addEventListener("scroll", onScroll);
  useEffect(() => {
    // Fires when the document view has been scrolled
    window.addEventListener("scroll", onScroll);

    //
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="progressMainWrapper">
          <div
            className="progressMainStyle"
            style={{ width: `${scrollTop}%` }}
          />
        </div>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Work />
        <div className="relative z-0">
          <Contact />
          <Starcanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
