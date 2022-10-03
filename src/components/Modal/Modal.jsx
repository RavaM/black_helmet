import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { modalData } from "../../data";
import "./Modal.scss";

export const Modal = ({ isVisible }) => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.7,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          key="modal"
          className="modal__background"
        >
          <motion.div
            transition={{
              delay: 0.1,
              duration: 0.4,
            }}
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            className="modal"
          >
            <motion.h1
              transition={{
                delay: 0.6,
                duration: 0.3,
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="modal__title"
            >
              Modal
            </motion.h1>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={list}
              className="modal__text-container"
            >
              {modalData.map((data) => (
                <motion.p
                  variants={item}
                  className="modal__text"
                  key={data.index}
                >
                  {data.text}
                </motion.p>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
