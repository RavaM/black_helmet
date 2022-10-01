import { Button } from "../Button";
import twitterLogo from "../../icons/twitterLogo.svg";
import "./Interface.scss";

export const Interface = () => {
  return (
    <div className="interface">
      <div className="interface__container">
        <Button
          bgColor="#1DA1F2"
          icon={twitterLogo}
          alt="Twitter Logo"
          className="interface__button"
        />
      </div>
    </div>
  );
};
