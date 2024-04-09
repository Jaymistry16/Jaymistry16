import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Wrapper = (Component: any, type: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={type}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default Wrapper;
