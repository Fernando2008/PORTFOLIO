/* eslint-disable react-refresh/only-export-components */
import SectionMotion from "../utils/SectionMotion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { stringsUrls } from "../constants";
import rampone from "../assets/rampone.png";
import barbarossa from "../assets/barbarossa.jpg";
import pcto from "../assets/malta.jpg";

const Experiences = () => {
  return (
    <>
      <section
        id="experiences"
        className="relative min-h-screen w-screen h-auto"
      >
        <div className="timeline mb-12 py-2 pt-20">
          <h1 className="ml-auto mr-auto pb-4 cursor-text font-bold text-5xl text-lightText w-max">
            My Experiences
          </h1>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(18, 18, 18)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid rgb(18, 18, 18)" }}
              date="September 2021 - June 2026"
              icon={
                <img
                  src={rampone}
                  alt="education-icon"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    border: "7.5px solid #141414",
                    objectFit: "cover",
                  }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title font-bold">
                ICT Student
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                I.T.C. Salvatore Rampone
              </h5>
              <p>
                Development with programming languages, ICT infrastructure,
                robots prototypes, web applications and pages.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(18, 18, 18)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid rgb(18, 18, 18)" }}
              date="August 2024"
              icon={
                <img
                  src={barbarossa}
                  alt="work-icon"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    border: "7.5px solid #141414",
                    objectFit: "cover",
                  }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title font-bold">
                Creation of Website
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                Libreria Barbarossa
              </h5>
              <p>
                Creation and development of the website of Libreria Barbarossa
                {", "}
                <a
                  className="text-sky-600 cursor-pointer hover:underline"
                  href={stringsUrls[0]}
                  target="_blank"
                >
                  link.
                </a>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(18, 18, 18)", color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid rgb(18, 18, 18)" }}
              date="22 October 2024 - 18 November 2024"
              icon={
                <img
                  src={pcto}
                  alt="work-icon"
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: "scale(1.05)",
                    borderRadius: "50%",
                    border: "7.5px solid #141414",
                    objectFit: "cover",
                  }}
                />
              }
            >
              <h3 className="vertical-timeline-element-title font-bold">
                School-Work in Malta
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                I.T.C. Salvatore Rampone
              </h5>
              <p>
                Creation and development of two websites:
                <br />
                <ul className="mt-4 font-normal">
                  <li>
                    School-Work in Malta website for spread our experience in
                    Malta{", "}
                    <a
                      className="text-sky-600 cursor-pointer hover:underline"
                      href={stringsUrls[1]}
                      target="_blank"
                    >
                      link.
                    </a>
                  </li>
                  <li className="mt-2">
                    A website for &quot;Plasitc Factory Film&quot;{", "}
                    <a
                      className="text-sky-600 cursor-pointer hover:underline"
                      href={stringsUrls[2]}
                      target="_blank"
                    >
                      link.
                    </a>
                  </li>
                </ul>
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};

export default SectionMotion(Experiences, "experiences");
