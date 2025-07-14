import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledFaqHeading = styled(Heading)`
  margin-bottom: 56px;
`;

const StyledFaqList = styled.ul``;

const StyledFaqItem = styled.li<{
  $isOpen: boolean;
}>`
  max-height: ${({ $isOpen }) => ($isOpen ? "200px" : "63px")};
  padding: 19px 0 19px 40px;
  border-top: 1px solid #e5e5e5;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  overflow: hidden;
  cursor: pointer;

  &:last-child {
    border-bottom: 1px solid #e5e5e5;
  }
`;

const StyledFaqItemHeading = styled(Heading)<{
  $isOpen: boolean;
}>`
  position: relative;

  &::before {
    content: "";
    width: 24px;
    height: 24px;
    background-image: url("/images/icons/dash.svg");
    background-image: url(${({ $isOpen }) => ($isOpen ? "/images/icons/dash.svg" : "/images/icons/plus.svg")});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 0;
    left: -40px;
  }
`;

const StyledFaqItemText = styled(Text)`
  padding-top: 16px;
`;

export {
  StyledFaqHeading,
  StyledFaqList,
  StyledFaqItem,
  StyledFaqItemHeading,
  StyledFaqItemText
}