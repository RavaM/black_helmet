import { LinkButton } from "../LinkButton";
import twitterLogo from "../../assets/icons/twitter-logo.svg";
import dribbbleLogo from "../../assets/icons/dribbble-logo.svg";
import youtubeLogo from "../../assets/icons/youtube-logo.svg";
import "./SocialLinks.scss";

export const SocialLinks = () => {
  return (
    <div className="socialLinks">
      <LinkButton
        bgColor="#1DA1F2"
        icon={twitterLogo}
        alt="Twitter Logo"
        href="https://twitter.com/"
      />
      <LinkButton
        bgColor="#FF0000"
        icon={youtubeLogo}
        alt="Youtube Logo"
        href="https://youtube.com/"
      />
      <LinkButton
        bgColor="#EA6493"
        icon={dribbbleLogo}
        alt="Dribbble Logo"
        href="https://dribbble.com/"
      />
    </div>
  );
};
