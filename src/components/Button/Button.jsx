import { motion } from "framer-motion";

import "./Button.scss";

export const Button = ({ bgColor, alt, icon, className, onClick, zIndex }) => {
  return (
    <motion.button
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{
        backgroundColor: bgColor,
        zIndex: zIndex,
      }}
      className={`button ${className}`}
      onClick={onClick}
    >
      <img alt={alt} src={icon} width="20" height="20" />
    </motion.button>
  );
};
