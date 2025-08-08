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
      status = "default",
      size = "medium",
      variant = "primary",
      onClick,
      ...rest
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
        $status={status}
        $size={size}
        $variant={variant}
        onClick={onClick}
        {...rest}
      >
        {children || label}
      </StyledLoaderButton>
    );
  },
);

LoaderButton.displayName = "LoaderButton";

export { LoaderButton };
