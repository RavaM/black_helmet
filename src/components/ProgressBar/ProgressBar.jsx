import { motion, useScroll } from "framer-motion";

import "./ProgressBar.scss";

export const ProgressBar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="progressBar" style={{ scaleX: scrollYProgress }} />
  );
};
