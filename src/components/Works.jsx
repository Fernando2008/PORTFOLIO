/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState, useRef } from "react";
import SectionMotion from "../utils/SectionMotion";
import { motion } from "framer-motion";
import { WorkCard } from "./elements";
import { workCardsData } from "../constants";

const Works = () => {
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
      <section
        id="works"
        className="relative px-48 min-h-screen w-screen h-auto"
      >
        <h1 className="ml-auto mr-auto mb-4 py-2 pb-4 pt-20 cursor-text font-bold text-5xl text-lightText w-max">
          My Works
        </h1>
        <div className="flex flex-wrap gap-20 justify-between md:justify-center">
          {workCardsData.map((item) => {
            return (
              <motion.div
                key={item.id}
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + item.id * 0.15 }}
              >
                <WorkCard
                  img={item.img}
                  alt={item.alt}
                  color={item.color}
                  title={item.title}
                  url={item.url}
                  tooltip={item.tooltip}
                />
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SectionMotion(Works, "works");
