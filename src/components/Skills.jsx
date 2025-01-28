/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState, useRef } from "react";
import SectionMotion from "../utils/SectionMotion";
import { motion } from "framer-motion";
import { programmingLanguages } from "../constants";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io5";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";
import * as SiIcons from "react-icons/si";
import * as AiIcons from "react-icons/ai";
import * as TbIcons from "react-icons/tb";

const IconsMap = {
  ...FaIcons,
  ...IoIcons,
  ...RiIcons,
  ...BiIcons,
  ...SiIcons,
  ...AiIcons,
  ...TbIcons,
};

const Skills = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 768) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [windowWidth]);

  return (
    <>
      <section className="relative min-h-screen w-screen h-auto bg-darkBackground">
        <div className="hard-skills w-full h-auto px-48 py-2 pt-20 pb-[4.5rem]">
          <h1 className=" ml-auto mr-auto cursor-text font-bold text-5xl text-lightText w-max">
            My Skills
          </h1>
          <div className="skills-cards ml-auto mr-auto mt-10 w-full h-auto flex flex-wrap gap-16 justify-center">
            {programmingLanguages.map((item, id) => {
              const IconComponent = IconsMap[item.tag];

              return (
                <motion.div
                  key={id}
                  className={`w-[80px] h-[80px] mb-1 group`}
                  ref={ref}
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + item.id * 0.15 }}
                >
                  <IconComponent
                    className="w-full h-auto cursor-pointer"
                    color={item.color}
                  />
                  <div className="absolute p-1 transform translate-y-[20px] transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-[0px] min-w-[80px] w-auto h-[50px] rounded-[50px] text-center items-center">
                    <h1
                      className="font-semibold text-3xl"
                      style={{ color: item.color }}
                    >
                      {item.name}
                    </h1>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionMotion(Skills, "skills");
