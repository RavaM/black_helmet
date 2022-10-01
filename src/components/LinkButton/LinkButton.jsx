import { Button } from "../../components";
import "./LinkButton.scss";

export const LinkButton = ({ href, ...props }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button {...props} />
    </a>
  );
};
