import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { IDocSpaceCard } from "./DocSpaceCards.types";

export const StyledCardLink = styled.div<{
  $color: IDocSpaceCard["color"];
}>`
  display: block;
  cursor: pointer;
  color: ${(props) => props.$color || "#FF6F3D"};
  text-decoration: underline;
  font-weight: ${(props) => (props.$color === "white" ? 700 : 400)};

  ${(props) => {
    const isWhiteText =
      props.$color === "white" ||
      props.$color === "#FFFFFF" ||
      props.$color === "rgb(255, 255, 255)";

    const arrowIconUrl = isWhiteText
      ? "/images/templates/docspace/budgets/arrow-icon-white.svg"
      : "/images/templates/docspace/budgets/arrow-icon.svg";

    return `
      &::after {
        content: "";
        display: inline-block;
        vertical-align: middle;
        margin-left: 5px;
        width: 21px;
        height: 20px;
        background-image: url(${arrowIconUrl});
        background-repeat: no-repeat;
        background-position: center center;
        background-size: contain;
        opacity: 0;
        transform: translateX(-10px);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
    `;
  }}

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const StyledCard = styled.div<{
  $bgColor: IDocSpaceCard["bgColor"];
  $borderColor: IDocSpaceCard["borderColor"];
}>`
  text-align: left;
  border: 1px solid ${(props) => props.$borderColor || "#cccccc"};
  border-radius: 6px;
  padding: 32px;
  width: 100%;
  background: ${(props) => props.$bgColor};

  @media ${device.tabletS} {
    padding: 16px;
  }

  &:hover ${StyledCardLink}::after {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const StyledCardHeading = styled(Heading)<{
  $image: IDocSpaceCard["image"];
  $color: IDocSpaceCard["color"];
}>`
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${(props) => props.$color};

  &::before {
    content: "";
    display: inline-block;
    width: 56px;
    min-width: 56px;
    height: 56px;
    background-image: ${(props) => `url(${props.$image?.url})`};
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: ${(props) => props.$image?.positionX};
  }

  @media ${device.tabletS} {
    font-size: 20px;
    line-height: 27px;
  }

  @media ${device.mobile} {
    font-size: 18px;
  }
`;

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledCardText = styled(Text)<{ $color: IDocSpaceCard["color"] }>`
  font-size: 18px;
  line-height: 1.5em;
  color: ${(props) => props.$color || "#666666"};

  @media ${device.tabletS} {
    font-size: 16px;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;
