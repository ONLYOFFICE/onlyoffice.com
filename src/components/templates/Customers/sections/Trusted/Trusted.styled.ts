import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";

const StyledTrustedHeading = styled(Heading)`
  margin-bottom: 56px;
`;

const StyledTrustedTabList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(16px, 2vw, 32px);
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 56px;
  position: relative;

  @media ${device.desktop} {
    justify-content: flex-start;
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

const StyledTrustedTabItem = styled.li<{
  $isActive: boolean;
}>`
  position: relative;
  white-space: nowrap;
  transition-duration: 300ms;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => (props.$isActive ? "#ff6f3d" : "#e2e2e2")};
    transition-duration: 300ms;
  }
`;

const StyledTrustedTabBtn = styled(Button)<{
  $isActive: boolean;
}>`
  border: 0;
  background-color: transparent;
  padding: 0 0 24px;
  color: ${(props) => (props.$isActive ? "#ff6f3d" : "#444444")};
`;

const StyledTrustedIconList = styled.div<{
  $showMore: boolean;
}>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 8px;
  column-gap: 64px;
  opacity: 1;
  transition: opacity 500ms, max-height 800ms cubic-bezier(0.25, 0.1, 0.25, 1.0);
  max-height: ${({ $showMore }) => $showMore ? "250px" : "1500px"};
  overflow: hidden;

  @media ${device.tabletS} {
    column-gap: 32px;
  }

  @starting-style {
    opacity: 0;
  }
`;

const StyledTrustedIconItem = styled.div<{
  $backgroundUrl: string;
}>`
  width: 224px;
  height: 120px;
  background-image: ${(props) => `url(${props.$backgroundUrl})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  transition-duration: 300ms;
  filter: grayscale(1);
  cursor: pointer;

  &:hover {
    filter: grayscale(0);
  }
`;

const StyledTrustedButton = styled(Button)`
  display: block;
  margin: 75px auto 0;

  @media ${device.tablet} {
    margin: 48px auto 0;
  }

  @media ${device.mobile} {
    margin: 32px auto 0;
  }
`;

export {
  StyledTrustedHeading,
  StyledTrustedTabList,
  StyledTrustedTabItem,
  StyledTrustedTabBtn,
  StyledTrustedIconList,
  StyledTrustedIconItem,
  StyledTrustedButton
};