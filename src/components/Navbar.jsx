import { Link } from "react-router-dom";
import { navElements } from "../constants";

import { styles } from "../utils/styles";
import { useEffect, useState } from "react";

import logo from "../assets/logo_white-bg-removed.png";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleTopScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleTopScroll);

    return () => window.removeEventListener("scroll", handleTopScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        id="navbar-id"
        className={`fixed ${
          (styles.normalTransition,
          scrolled ? `bg-darkBackground` : `bg-transparent`)
        } w-full h-min flex flex-row justify-between p-[1.5vw] px-[3vw] text-lightText z-[999]`}
      >
        <Link
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="cursor-pointer"
        >
          <div className="flex gap-2">
            <img src={logo} alt="LOGO" width={27.2} height={27.2} />
            <h1 className="bottom-0">
              <b>FERNANDO TOGNA</b>
            </h1>
          </div>
        </Link>
        {windowWidth >= 769 ? (
          <ul className="flex flex-row gap-8">
            {navElements.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`${styles.normalTransition} cursor-pointer text-[18px] font-normal opacity-65 hover:opacity-100`}
                >
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        ) : (
          <>
            <div
              className={`mt-1 group ${isOpen ? "open" : ""}`}
              onClick={toggleHamburger}
            >
              <span className="flex mb-[4px] h-[3px] w-[25px] rounded-full transform transition-all group-[.open]:rotate-[45deg] group-[.open]:translate-x-[5px] group-[.open]:translate-y-[7px] bg-lightText"></span>
              <span className="flex mb-[4px] h-[3px] w-[25px] rounded-full transform transition-opacity group-[.open]:opacity-0 bg-lightText"></span>
              <span className="flex h-[3px] w-[25px] rounded-full transform transition-all group-[.open]:-rotate-[45deg] group-[.open]:translate-x-[5px] group-[.open]:-translate-y-[7px] bg-lightText"></span>
            </div>

            <div
              className="absolute p-4 w-auto h-auto flex right-0 top-[50px] rounded-l-2xl backdrop-blur-lg bg-transparent z-[9999] border-2 border-white/20"
              style={isOpen ? { display: "flex" } : { display: "none" }}
            >
              <ul className="flex flex-col gap-2">
                {navElements.map((item) => {
                  return (
                    <li key={item.id} className="">
                      <a href={`#${item.id}`}>{item.title}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
