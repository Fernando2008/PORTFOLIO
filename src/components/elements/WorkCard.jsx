/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Tilt } from "react-tilt";
import "../../index.css";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, //Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  //   easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const WorkCard = ({ img, alt, color, title, url, tooltip }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setIsHovered(true);
    }, 2000);
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setIsHovered(false);
  };

  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <React.Fragment>
      <div className="w-auto flex flex-col">
        <Tilt
          options={defaultOptions}
          className={`tilt relative will-change-transform cursor-pointer ${color} w-64 h-64 rounded-full`}
        >
          <div
            className="w-full h-full rounded-full flex justify-center items-center group"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={img}
              alt={alt}
              className="w-auto h-auto absolute transform -translate-x-1/2 transition-all duration-500 ease-out"
            />
          </div>
        </Tilt>
        <div className="mt-4 max-w-64 text-center text-lightText z-[998]">
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
      </div>

      {/* <div
        className="absolute transition-all duration-300"
        style={isHovered ? { opacity: 100 } : { opacity: 0 }}
      >
        {tooltip}
      </div> */}
    </React.Fragment>
  );
};

export default WorkCard;
