import { FunctionComponent } from "react";
import { Wrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { Tilt } from "react-tilt";
import { github } from "../assets";

interface WorkProps {}
const Work: FunctionComponent<WorkProps> = () => {
  return (
    <div>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Project</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          className="mt-4 text-[16px] text-secondary max-w-3xl"
          variants={fadeIn("", "", 0.1, 1)}
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 gap-7 flex flex-wrap">
        {projects.map((project, index) => (
          <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
              className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
              options={{
                max: 45,
                speed: 450,
                scale: 1,
              }}
            >
              <div className="relative h-[230px] w-full">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full rounded-2xl object-cover"
                />
                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    onClick={() =>
                      window.open(project.source_code_link, "_blank")
                    }
                    className="black-gradient w-10 h-10 rounded-full flex cursor-pointer   justify-center items-center"
                  >
                    <img src={github} alt="github" className="w-1/2 h-1/2" />
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">
                  {project.name}
                </h3>
                <p className="mt-2 text-secondary text-[14px]">
                  {project.description}
                </p>
              </div>
              <div className="mt-3 flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <p className={`${tag.color} text-[14px]`}>{tag.name}</p>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Wrapper(Work, "work");
