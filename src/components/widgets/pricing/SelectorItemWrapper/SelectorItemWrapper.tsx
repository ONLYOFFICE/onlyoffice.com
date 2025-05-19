import { StyledSelectorItemWrapper } from "./SelectorItemWrapper.styled";
import { ISelectorItemWrapper } from "./SelectorItemWrapper.types";

const SelectorItemWrapper = ({ children }: ISelectorItemWrapper) => {
  return <StyledSelectorItemWrapper>{children}</StyledSelectorItemWrapper>;
};

export { SelectorItemWrapper };
