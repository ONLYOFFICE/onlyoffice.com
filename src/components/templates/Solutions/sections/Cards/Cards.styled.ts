import { Link } from "@src/components/ui/Link";
import { Heading } from "@src/components/ui/Heading";
import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledHeading = styled(Heading)`
  @media ${device.tablet} {
    padding: 0px 48px;
  }

  @media ${device.tabletS} {
    padding: 0px 40px;
  }
  @media ${device.mobile} {
    padding: 0px 16px;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 32px;
  padding: 56px 0 0px;

  @media ${device.tablet} {
    padding: 56px 48px 0px;
  }

  @media ${device.tabletS} {
    padding: 56px 40px 24px;
    overflow-x: scroll;
    width: 100%;
  }
  @media ${device.mobile} {
    gap: 16px;
    padding: 32px 16px 16px;
  }
`;

const CardButton = styled(Link)<{
  $icon: string;
  $width?: number;
  $height?: number;
}>`
  display: block;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 7px 15px rgba(85, 85, 85, 0.1);
  border-radius: 3px;
  position: relative;
  padding: ${(props) =>
    props.$height
      ? `calc(${props.$height}px + 72px) 32px 40px`
      : "306px 32px 40px"};
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  width: 100%;

  &:hover {
    color: #ff6f3d;
  }

  &::before {
    content: "";
    position: absolute;
    top: ${(props) => (props.$height ? `40px` : "0")};
    left: 50%;
    width: ${(props) => (props.$width ? `${props.$width}px` : "100%")};
    height: ${(props) => (props.$height ? `${props.$height}px` : "auto")};
    aspect-ratio: ${(props) =>
      props.$width && props.$height ? props.$width / props.$height : "1.28"};
    background: url(${(props) => props.$icon}) center/contain no-repeat;
    transform: translateX(-50%);
  }

  @media ${device.desktop} {
    padding: ${(props) =>
      props.$height
        ? `calc(${props.$height}px + 72px) 32px 40px`
        : "24vw 32px 40px"};
  }

  @media ${device.tabletS} {
    min-width: 292px;
    padding: ${(props) =>
      props.$height
        ? `calc(${props.$height}px + 72px) 32px 40px`
        : "259px 32px 40px"};
    width: 100%;
  }

  @media ${device.mobile} {
    min-width: ${(props) => (props.$width ? "196px" : "292px")};
    padding: ${(props) =>
      props.$height
        ? "188px 32px 40px"
        : "259px 32px 40px"};

    &::before {
      width: ${(props) => (props.$width ? `100px` : "100%")};
      height: ${(props) => (props.$height ? `100px` : "auto")};
    }
  }
`;

export { ButtonRow, CardButton, StyledHeading };
