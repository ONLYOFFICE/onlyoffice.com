import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled, { css } from "styled-components";
import { ITeamworkCard } from "./sub-components/TeamworkCard.types";

const StyledTeamworkHeading = styled(Heading)`
  font-size: 32px;

  @media ${device.tabletS} {
    font-size: 30px;
  }

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

const StyledTeamworkText = styled(Text)`
  padding-top: 24px;

  @media ${device.tabletS} {
    font-size: 16px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    padding-top: 16px;
  }
`;

const StyledFirstLine = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 56px 0 32px;

  @media ${device.tablet} {
    padding: 32px 0;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 32px 0 24px;
  }
`;

const StyledSecondLine = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const StyledCardTitle = styled(Heading)`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 24px;
  line-height: 133%;
  font-weight: 700;

  &::before {
    content: "";
    display: inline-block;
    width: 56px;
    height: 56px;
    background-image: url("/images/templates/collaboration-rooms/ideal-for-teamwork/teamwork-icons.svg");
    background-repeat: no-repeat;
  }

  @media ${device.tabletS} {
    font-size: 20px;
  }

  @media ${device.mobile} {
    font-size: 18px;
  }
`;

const StyledCardText = styled(Text)`
  font-size: 18px;

  @media ${device.tabletS} {
    font-size: 16px;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledTeamworkCard = styled.div<{
  $type: ITeamworkCard["type"];
}>`
  padding: 32px;
  border: 1px solid #cccccc;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${({ $type }) =>
    $type === "education" &&
    css`
      margin-right: 32px;
    `}

  ${({ $type }) =>
    $type === "business" &&
    css`
      border: none;
      background-color: #ff6f3d;
      color: #fff;
    `}

  ${({ $type }) =>
    $type === "individuals" &&
    css`
      border-color: #8bb825;
      background-color: #f9feef;
    `}

  ${({ $type }) =>
    $type === "legal" &&
    css`
      margin-left: 32px;
    `}

  ${StyledCardTitle} {
    color: ${({ $type }) => $type === "business" && "#fff"};
  }

  ${StyledCardTitle}::before {
    background-position: ${({ $type }) =>
      $type === "business"
        ? "-94px -20px"
        : $type === "individuals"
        ? "-170px -20px"
        : $type === "legal"
        ? "-245px -20px"
        : "-18px -20px"};
  }

  @media ${device.tabletS} {
    padding: 16px;
  }

  @media ${device.mobile} {
    ${({ $type }) =>
      $type === "education" &&
      css`
        order: 2;
        margin: 0;
      `}

    ${({ $type }) =>
      $type === "business" &&
      css`
        order: 1;
      `}

    ${({ $type }) =>
      $type === "legal" &&
      css`
        margin: 0;
      `}
  }
`;

export {
  StyledTeamworkHeading,
  StyledTeamworkText,
  StyledFirstLine,
  StyledSecondLine,
  StyledTeamworkCard,
  StyledCardTitle,
  StyledCardText,
};
