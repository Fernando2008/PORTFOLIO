import { motion } from "framer-motion";

const SectionMotion = (Component, id) =>
  function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`relative w-full h-screen`}
        id={id}
      >
        <Component />
      </motion.section>
    );
  };

export default SectionMotion;
