import { ComponentProps, PropsWithChildren } from "react";
import "./Button.css";

interface ButtonProps extends ComponentProps<"button"> {
  action?: () => void;
  modifier?: string;
  type?: "button" | "submit";
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  action,
  type = "button",
  modifier,
  ...buttonProps
}) => {
  const modifierClass = modifier ? ` button--${modifier}` : "";

  return (
    <button
      className={`button${modifierClass}`}
      type={type}
      onClick={action}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
