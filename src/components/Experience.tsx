import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { Wrapper } from "../hoc";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences } from "../constants";
import "react-vertical-timeline-component/style.min.css";

interface ExperienceProps {}

const Experience: FunctionComponent<ExperienceProps> = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>What i have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experiance</h2>
      </motion.div>

      <div className="mt-15 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "#1d1836",
                color: "white",
              }}
              contentArrowStyle={{ borderRight: "7px solid #232631" }}
              iconStyle={{ background: experience.iconBg }}
              date={experience.date}
              icon={
                <div className="flex  justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[40px] h-[40px]"
                  />
                </div>
              }
            >
              <div className="text-white text-[24px]">
                <h3>{experience.title}</h3>
                <p
                  style={{ margin: 0 }}
                  className="font-semibold text-secondary text-[16px]"
                >
                  {experience.company_name}
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-5">
                {experience.points.map((point, index) => (
                  <li
                    key={index}
                    className="text-white-100 pl-1 tracking-wider"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Wrapper(Experience, "work");
