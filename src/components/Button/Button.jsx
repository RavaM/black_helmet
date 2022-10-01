import "./Button.scss";

export const Button = ({ bgColor, alt, icon, className, onClick, zIndex }) => {
  return (
    <button
      style={{ backgroundColor: bgColor, zIndex: zIndex }}
      className={`button ${className}`}
      onClick={onClick}
    >
      <img alt={alt} src={icon} width="20" height="20" />
    </button>
  );
};
