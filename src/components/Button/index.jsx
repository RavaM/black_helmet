import "./Button.scss";

export const Button = ({ bgColor, alt, icon, className }) => {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className={`button ${className}`}
    >
      <img alt={alt} src={icon} width="20" height="20" />
    </button>
  );
};
