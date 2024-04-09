import { FunctionComponent } from "react";
import { styles } from "../styles";
import { Computer } from ".";
import { motion } from "framer-motion";

interface HeroProps {}

export const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <section className="relative w-full h-screen max-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[150px] max-w-6xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#975eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#975eff]">Jay Mistry</span>
          </h1>
          <p className={` ${styles.heroSubText} mt-2 text-white-100`}>
            A Software Developer specializing in React-Native,{" "}
            <br className="sm:block hidden" /> React, Javascript and Docker
          </p>
        </div>
      </div>
      <Computer />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex p-2 justify-center items-start">
            <motion.div
              animate={{ y: [0, 25, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
