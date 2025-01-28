import { useState } from "react";
import { navElements } from "../constants";
import { socialICons } from "../constants";
import * as FaIcons from "react-icons/fa";
import * as FaSIcons from "react-icons/fa6";
import logo from "../assets/logo_white-bg-removed.png";

const IconsMap = { ...FaIcons, ...FaSIcons };

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (tag) => {
    setHoveredIcon(tag);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const handleSocialClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-full h-auto flex flex-col p-4 py-6 pb-2">
      {/* SOCIALS */}
      <div className="flex justify-between items-center">
        <span className="!w-[40vw] bg-lightText border-b-[1px] border-lightText"></span>
        <ul className="w-min flex gap-3 items-center">
          {socialICons.map((item) => {
            const IconComponent = IconsMap[item.tag];

            if (!IconComponent) {
              return null;
            }

            return (
              <li
                key={item.tag}
                onMouseEnter={() => handleMouseEnter(item.tag)}
                onMouseLeave={handleMouseLeave}
                className="cursor-pointer"
                onClick={() => handleSocialClick(item.url)}
              >
                <IconComponent
                  className="transition-all duration-300 opacity-65 hover:opacity-100 transform hover:-translate-y-[5px]"
                  style={{
                    color: hoveredIcon === item.tag ? item.color : "#ffffff",
                  }}
                  size={25}
                />
              </li>
            );
          })}
        </ul>
        <span className="!w-[40vw] bg-lightText border-b-[1px] border-lightText"></span>
      </div>

      <img
        src={logo}
        alt="LOGO"
        className="ml-auto mr-auto mt-5 transition duration-300 opacity-65 hover:opacity-100"
        width={50}
      />

      {/* NAV */}
      <ul className="ml-auto mr-auto mt-5 flex gap-5 items-center text-lightText">
        {navElements.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer h-min transition duration-300 opacity-65 hover:opacity-100"
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      {/* COPYRIGHTS */}
      <div className="w-max ml-auto mr-auto mt-4 text-xs opacity-65 text-lightText">
        <p>&copy; Fernando Togna 2025. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
