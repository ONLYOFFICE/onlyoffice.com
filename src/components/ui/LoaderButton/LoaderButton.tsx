import { forwardRef } from "react";
import { StyledLoaderButton } from "./LoaderButton.styled";
import { ILoaderButton } from "./LoaderButton.types";

const LoaderButton = forwardRef<HTMLButtonElement, ILoaderButton>(
  (
    {
      id,
      className,
      label,
      children,
      disabled,
      tabIndex,
      type = "button",
      fullWidth,
      variant = "default",
      size = "medium",
      onClick,
    },
    ref,
  ) => {
    return (
      <StyledLoaderButton
        ref={ref}
        id={id}
        className={className}
        disabled={disabled}
        tabIndex={tabIndex}
        type={type}
        $fullWidth={fullWidth ?? undefined}
        $variant={variant}
        $size={size}
        onClick={onClick}
      >
        {children || label}
      </StyledLoaderButton>
    );
  },
);

LoaderButton.displayName = "LoaderButton";

export { LoaderButton };
