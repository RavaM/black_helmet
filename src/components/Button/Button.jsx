import { motion } from "framer-motion";

import "./Button.scss";

export const Button = ({ bgColor, alt, icon, className, onClick, zIndex }) => {
  return (
    <motion.button
      transition={{
        type: "spring",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{
        backgroundColor: bgColor,
        zIndex: zIndex,
      }}
      className={`button ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <img alt={alt} src={icon} width="20" height="20" />
    </motion.button>
  );
};
