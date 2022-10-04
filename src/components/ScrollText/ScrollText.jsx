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
      <AnimatePresence>
        {showText({ start: 0, end: 0.02 }) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0 } }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="scrollText__initial"
          >
            <h1 className="scrollText__initial-title">Black helmet</h1>
            <motion.p
              animate={{
                y: [0, 20],
                opacity: [1, 0],
                transition: {
                  duration: 0.8,
                  repeat: Infinity,
                  repeatDelay: 1,
                },
              }}
              className="scrollText__initial-cta"
            >
              Scroll down
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      {scrollData.map((data) => (
        <AnimatePresence key={data.index}>
          {showText(data) && (
            <motion.div
              transition={{ duration: 0.7 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="scrollText"
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
