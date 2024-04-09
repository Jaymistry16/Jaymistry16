import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { bio, services } from "../constants";
import { Tilt } from "react-tilt";
import { Wrapper } from "../hoc";
interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>INTRODUCTION</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        className="mt-5 text-[17px] leading-[30px] max-w-3xl "
        variants={fadeIn("", "", 1.5, 1)}
      >
        {bio}
      </motion.p>
      <div className=" flex flex-wrap mt-20 gap-10  ">
        {services.map((service, index) => (
          <Tilt className="xs:w-[250px] w-full">
            <motion.div
              variants={fadeIn("right", "spring", 0.8 * index, 1)}
              className="w-full p-[2px] rounded-[20px] shadow-card green-pink-gradient"
            >
              <div className=" bg-tertiary flex py-5 px-12 min-h-[280px] rounded-[20px] justify-evenly items-center flex-col">
                <img
                  src={service.icon}
                  alt="icon"
                  className="w-14 h-14 object-contain tar"
                />
                <h3 className="text-white text-[20px] font-bold text-center">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </>
  );
};

export default Wrapper(About, "about");
