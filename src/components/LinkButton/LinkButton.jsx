import { motion } from "framer-motion";
import { Button } from "../../components";
import "./LinkButton.scss";

export const LinkButton = ({ href, ...props }) => {
  const linkButton = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <motion.a
      variants={linkButton}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button {...props} />
    </motion.a>
  );
};
