import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { scrollData } from "../../data";
import "./ScrollText.scss";

export const ScrollText = () => {
  const { scrollYProgress } = useScroll();
  const [yProgress, setYProgress] = useState(scrollYProgress.current);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setYProgress(latest);
    });
  }, [scrollYProgress]);

  const showText = (data) => {
    return data.start <= yProgress && data.end >= yProgress;
  };

  return (
    <div className="scrollText__container">
      {showText({ start: 0, end: 0.05 }) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="scrollText__initial"
        >
          <h1 className="scrollText__initial-title">Black helmet</h1>
          <p className="scrollText__initial-cta">Scroll down</p>
        </motion.div>
      )}
      {scrollData.map((data) => (
        <AnimatePresence>
          {showText(data) && (
            <motion.div
              transition={{ duration: 0.6 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="scrollText"
              key={data.index}
              style={{
                top: data.top,
                left: data.left,
              }}
            >
              {data.text}
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </div>
  );
};
