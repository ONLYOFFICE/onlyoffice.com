import { StyledLabeledWrapperLabel } from "./LabeledWrapper.styled";
import { ILabeledWrapper } from "./LabeledWrapper.types";

const LabeledWrapper = ({
  id,
  className,
  label,
  leftSide,
  rightSide,
  children,
}: ILabeledWrapper) => {
  return (
    <div id={id} className={className}>
      <StyledLabeledWrapperLabel>
        {leftSide}
        <div>{label}</div>
        {rightSide}
      </StyledLabeledWrapperLabel>
      {children}
    </div>
  );
};

export { LabeledWrapper };
