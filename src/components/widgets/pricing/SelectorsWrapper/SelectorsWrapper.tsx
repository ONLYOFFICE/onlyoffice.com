import { StyledSelectorsWrapper } from "./SelectorsWrapper.styled";
import { ISelectorsWrapper } from "./SelectorsWrapper.types";

const SelectorsWrapper = ({ children }: ISelectorsWrapper) => {
  return <StyledSelectorsWrapper>{children}</StyledSelectorsWrapper>;
};

export { SelectorsWrapper };
