import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";

const StyledTrustedHeading = styled(Heading)`
  margin-bottom: 56px;
`;

const StyledTrustedTabList = styled.ul<{
  $locale: string;
}>`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  gap: clamp(16px, 2vw, 32px);
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 56px;
  position: relative;
  scrollbar-width: none;

  ${({ $locale }) => ($locale === "zh" || $locale === "ja") && css`
    justify-content: center;
    overflow-x: auto;
  `}
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
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => (props.$isActive ? "#ff6f3d" : "")};
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

const StyledTrustedTabBtnWrapper = styled.div`
  position: relative;
`;

const ArrowBase = styled.button`
  width: 32px;
  height: 32px;
  position: absolute;
  top: calc(50% - 26px);
  z-index: 1;
  background:
    url("/images/templates/customers/trusted/arrow.svg") no-repeat center/24px 24px,
    radial-gradient(
      circle at center,
      rgba(245,245,245,1) 10%,
      rgba(245,245,245,0) 70%
    );
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition-duration: 300ms;
`;

const ScrollButtonLeft = styled(ArrowBase)<{
  $atStart: boolean;
}>`
  left: -10px;
  visibility: ${({ $atStart }) => ($atStart ? "visible" : "hidden")};
  opacity: ${({ $atStart }) => ($atStart ? 1 : 0)};
  transform: rotate(180deg);
`;

const ScrollButtonRight = styled(ArrowBase)<{
  $atEnd: boolean;
}>`
  right: 0;
  visibility: ${({ $atEnd }) => ($atEnd ? "visible" : "hidden")};
  opacity: ${({ $atEnd }) => ($atEnd ? 1 : 0)};
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
    max-height: ${({ $showMore }) => $showMore ? "250px" : "2500px"};
  }

  @media ${device.mobile} {
    column-gap: 0;
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

  @media ${device.mobile} {
    width: 144px;
    height: 77px;
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
  StyledTrustedTabBtnWrapper,
  ScrollButtonLeft,
  ScrollButtonRight,
  StyledTrustedTabBtn,
  StyledTrustedIconList,
  StyledTrustedIconItem,
  StyledTrustedButton
};