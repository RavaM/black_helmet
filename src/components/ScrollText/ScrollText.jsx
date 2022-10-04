import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { InitialText, ScrollTextList } from "../../components";
import "./ScrollText.scss";

export const ScrollText = () => {
  const { scrollYProgress } = useScroll();
  const [yProgress, setYProgress] = useState(scrollYProgress.current);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setYProgress(latest);
    });
  }, [scrollYProgress]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="scrollText"
    >
      <InitialText yProgress={yProgress} />
      <ScrollTextList yProgress={yProgress} />
    </motion.div>
  );
};
