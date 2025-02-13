import { forwardRef } from "react";
import { StyledCodeButton } from "./CodeButton.styled";
import { ICodeButton } from "./CodeButton.types";

const CodeButton = forwardRef<HTMLButtonElement, ICodeButton>(
  ({ id, className, disabled, onClick }, ref) => {
    return (
      <StyledCodeButton
        ref={ref}
        id={id}
        className={className}
        disabled={disabled}
        onClick={onClick}
      ></StyledCodeButton>
    );
  },
);

CodeButton.displayName = "CodeButton";

export { CodeButton };
