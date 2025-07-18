import { forwardRef } from "react";
import { StyledButton } from "./Button.styled";
import { IButton } from "./Button.types";
import Link from "next/link";

const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {
      id,
      className,
      label,
      children,
      disabled,
      tabIndex,
      type = "button",
      title,
      as = "button",
      href,
      target,
      download,
      rel,
      fullWidth,
      variant = "primary",
      size = "medium",
      borderRadius = "9px",
      backgroundColor,
      onClick,
      ...rest
    },
    ref,
  ) => {
    return (
      <StyledButton
        ref={ref}
        id={id}
        className={className}
        disabled={disabled}
        tabIndex={tabIndex}
        type={as === "button" ? type : undefined}
        title={title}
        as={download ? "a" : as === "a" ? Link : as}
        href={as === "a" ? (href ?? "") : undefined}
        target={as === "a" ? target : undefined}
        download={download}
        rel={
          as === "a"
            ? !rel && target === "_blank"
              ? "noopener noreferrer"
              : rel
            : undefined
        }
        onClick={onClick}
        $fullWidth={fullWidth ?? undefined}
        $variant={variant}
        $size={size}
        $borderRadius={borderRadius}
        $backgroundColor={backgroundColor}
        {...rest}
      >
        {children || label}
      </StyledButton>
    );
  },
);

Button.displayName = "Button";

export { Button };
