import Button from "./Button";

interface IconButtonProps {
  label: any;
  icon?: any;
  SVG?: any;
  onClick: any;
  pClassName?: string;
  iconClassName?: string;
  buttonClassName?: string;
}

function IconButton({
  label,
  icon,
  SVG,
  onClick,
  pClassName = "",
  iconClassName = "",
  buttonClassName = "",
}: IconButtonProps) {
  return (
    <Button
      className={`flex items-center ${buttonClassName}`}
      onClick={onClick}
    >
      {icon ? (
        <img className={iconClassName} src={icon} alt="" />
      ) : SVG ? (
        <SVG className={iconClassName} />
      ) : null}
      <p className={pClassName}>{label}</p>
    </Button>
  );
}

export default IconButton;
