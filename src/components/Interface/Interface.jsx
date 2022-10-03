import { useEffect, useState } from "react";

import closeIcon from "../../assets/icons/close-icon.svg";
import menuIcon from "../../assets/icons/menu-icon.svg";
import { Button, Modal, ProgressBar, SocialLinks } from "../../components";

import "./Interface.scss";

export const Interface = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }, [modalOpen]);

  return (
    <div className="interface">
      <ProgressBar />
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
      <Modal isVisible={modalOpen} />
    </div>
  );
};
