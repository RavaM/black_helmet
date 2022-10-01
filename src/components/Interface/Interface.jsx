import menuIcon from "../../assets/icons/menu-icon.svg";
import { Button, SocialLinks } from "../../components";
import "./Interface.scss";

export const Interface = () => {
  return (
    <div className="interface">
      <div className="interface__container">
        <Button
          icon={menuIcon}
          alt="Menu icon"
          bgColor={"#ffffff"}
          className="interface__modal-button"
        />
        <SocialLinks />
      </div>
    </div>
  );
};
