import { useState } from "react";
import menuIcon from "../../assets/icons/menu-icon.svg";
import closeIcon from "../../assets/icons/close-icon.svg";
import { Button, SocialLinks, Modal } from "../../components";
import "./Interface.scss";
import { motion, useScroll } from "framer-motion";

export const Interface = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <div className="interface">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="interface__container">
        <Button
          icon={modalOpen ? closeIcon : menuIcon}
          alt="Menu icon"
          bgColor="#ffffff"
          className="interface__modal-button"
          onClick={() => setModalOpen((prev) => !prev)}
          zIndex={10}
        />
        <SocialLinks />
      </div>
      {modalOpen && <Modal />}
    </div>
  );
};
