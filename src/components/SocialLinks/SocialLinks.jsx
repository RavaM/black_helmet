import { LinkButton } from "../../components";
import { socialData } from "../../data";
import "./SocialLinks.scss";

export const SocialLinks = () => {
  return (
    <div className="socialLinks">
      {socialData.map((social) => (
        <LinkButton
          bgColor={social.bgColor}
          icon={social.icon}
          alt={social.alt}
          href={social.href}
          key={social.index}
        />
      ))}
    </div>
  );
};
