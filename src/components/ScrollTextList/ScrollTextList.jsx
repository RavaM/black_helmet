import { motion, AnimatePresence } from "framer-motion";
import { scrollData } from "../../data.js";
import { showText } from "../../utils/helper";
import "./ScrollTextList.scss";

export const ScrollTextList = ({ yProgress }) => {
  return (
    <>
      {scrollData.map((data, i) => (
        <AnimatePresence key={data.index}>
          {showText(data, yProgress) && (
            <motion.div
              transition={{ duration: 0.7 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="scrollTextList"
                style={{
                  top: data.top,
                  left: data.left,
                }}
              >
                {data.text}
              </motion.div>
              <div
                className={`scrollTextList__line scrollTextList__line-${i + 1}`}
              ></div>
            </motion.div>
          )}
        </AnimatePresence>
      ))}
    </>
  );
};
