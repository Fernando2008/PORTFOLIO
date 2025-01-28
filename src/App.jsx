import { BrowserRouter } from "react-router-dom";
// import { useEffect, useRef } from "react";
// import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import {
  Navbar,
  Hero,
  About,
  Experiences,
  Skills,
  Works,
  GetInTouch,
  Footer,
} from "./components/";

function App() {
  // const scrollRef = useRef(null);

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //     multiplier: 1.2,
  //   });

  //   return () => scroll.destroy();
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <div className="flex flex-col xl:gap-[48vh] lg:gap-[78vh] md:gap-[118vh]">
          <About />
          <Experiences />
        </div>
        <div className="flex flex-col xl:mt-[48vh] lg:mt-[38vh] md:mt-[38vh]">
          <Skills />
        </div>
        <div className="flex flex-col xl:mt-[0] lg:mt-[38vh] md:mt-[88vh]">
          <Works />
        </div>
        <div className="flex flex-col xl:mt-[38vh] lg:mt-[38vh] md:mt-[158vh]">
          <GetInTouch />
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
