/* eslint-disable react-refresh/only-export-components */
import SectionMotion from "../utils/SectionMotion";
import { styles } from "../utils/styles";
import { aboutData } from "../constants";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="relative text-lightText py-2 pt-20 min-h-screen w-full h-auto bg-darkBackground"
      >
        <div className="flex flex-col w-full h-full items-center gap-2">
          <h4 className="font-light text-sm mb-2 opacity-75">INTRODUCTION</h4>

          <div className="flex flex-col w-full h-full items-center">
            {aboutData.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col gap-1 h-full items-center w-[40%] text-center"
                >
                  <h1 className={styles.about.title}>{item.title}</h1>
                  <p className={styles.about.pharagraph}>{item.pharagraph}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionMotion(About, "about");
