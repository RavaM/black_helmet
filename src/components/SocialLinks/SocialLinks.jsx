import { motion } from "framer-motion";

import { LinkButton } from "../../components";
import { socialData } from "../../data";
import "./SocialLinks.scss";

export const SocialLinks = () => {
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
        delay: 2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  return (
    <motion.div
      className="socialLinks"
      initial="hidden"
      animate="visible"
      variants={list}
    >
      {socialData.map((social) => (
        <LinkButton
          bgColor={social.bgColor}
          icon={social.icon}
          alt={social.alt}
          href={social.href}
          key={social.index}
        />
      ))}
    </motion.div>
  );
};
