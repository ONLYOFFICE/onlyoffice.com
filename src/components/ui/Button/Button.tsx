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
      as = "button",
      href,
      target,
      rel,
      fullWidth,
      variant = "primary",
      size = "medium",
      onClick,
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
        as={as === "a" ? Link : as}
        href={as === "a" ? href ?? "" : undefined}
        target={as === "a" ? target : undefined}
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
      >
        {children || label}
      </StyledButton>
    );
  },
);

Button.displayName = "Button";

export { Button };
