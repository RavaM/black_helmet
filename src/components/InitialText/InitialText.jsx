import { motion, AnimatePresence } from "framer-motion";

import { showText } from "../../utils/helper";
import "./InitialText.scss";

export const InitialText = ({ yProgress }) => {
  return (
    <AnimatePresence>
      {showText({ start: 0, end: 0.02 }, yProgress) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0 } }}
          transition={{ duration: 0.6 }}
          className="initialText"
        >
          <h1 className="initialText-title">Black helmet</h1>
          <motion.p
            animate={{
              y: [0, 20],
              opacity: [1, 0],
              transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatDelay: 1.3,
                delay: 4.5,
              },
            }}
            className="initialText-cta"
          >
            Scroll down
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
