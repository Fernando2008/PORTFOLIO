import { useEffect, useState, useRef } from "react";
import { ParticlesScene, AvatarScene } from "./canvas";
import { motion } from "framer-motion";
import HoverLink from "./elements/HoverLink";
import TypewriterComponent from "typewriter-effect";
import cv from "../assets/FERNANDO_TOGNA_CV_pdf.pdf";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
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
  }, []);

  return (
    <>
      <div className="relative w-full h-screen">
        <ParticlesScene />

        <div className="absolute w-auto max-w-max h-auto left-[12.5%] top-[10rem] transform -translate-y-3/4 text-lightText z-10 Cborder-2 Cborder-red-700">
          <div className="cursor-text font-bold text-5xl mb-8">
            <motion.h4
              className="font-normal text-base"
              ref={ref}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Hello there.
            </motion.h4>
            <h1>
              <motion.span
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                I&apos;m Fernando
              </motion.span>
              <br />
              <motion.span
                className="text-primary"
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                A Full Stack Developer
              </motion.span>
              <br />
              <motion.span
                className="text-primary"
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 2.3 }}
              >
                & Maker
              </motion.span>
            </h1>
            <motion.p
              className="font-normal text-base"
              ref={ref}
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 2.8 }}
            >
              <TypewriterComponent
                options={{
                  strings: [
                    "Code.",
                    "Create.",
                    "Connect.",
                    "Your Full-Stack Innovator.",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 25,
                  delay: 75,
                  cursor: "|",
                }}
              />
            </motion.p>
          </div>
          <motion.div
            className="w-max h-max hover:scale-105 transform transition-all ease-in-out duration-300"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 3.3 }}
          >
            <HoverLink href={cv} text={"Download CV"} download />
          </motion.div>
        </div>

        <AvatarScene />
      </div>
    </>
  );
};

export default Hero;
