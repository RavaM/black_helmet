import twitterLogo from "../../icons/twitterLogo.svg";
import { LinkButton } from "../LinkButton";
import "./Interface.scss";

export const Interface = () => {
  return (
    <div className="interface">
      <div className="interface__container">
        <LinkButton
          bgColor="#1DA1F2"
          icon={twitterLogo}
          alt="Twitter Logo"
          className="interface__button"
          href="https://twitter.com/"
        />
      </div>
    </div>
  );
};
