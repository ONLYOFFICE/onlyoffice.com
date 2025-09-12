import styled, { css } from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { ICardProps } from "@src/components/templates/Vacancies/Vacancies.types";
import { Button } from "@src/components/ui/Button";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const CardItem = styled.li`
  background-color: #fff;
  box-shadow: 0 7px 15px rgba(85, 85, 85, 0.15);
  border: 1px solid #EFEFEF;
  padding: 32px;
`;

const CardDepartment = styled(Text)<{
  $departmentColor: ICardProps["department"]["color"];
}>`
  width: fit-content;
  padding: 4px 8px;
  border-radius: 3px;
  margin-bottom: 24px;

  ${({ $departmentColor }) => {
    switch ($departmentColor) {
      case "red":
        return css`
          color: #FF6F3D;
          background: rgba(255, 111, 61, 0.1);
          border: 1px solid #FFB7A0;
        `;
      case "blue":
        return css`
          background-color: rgba(220, 244, 255, 0.7);
          border: 1px solid #9ADAF3;
          color: #37719B;
        `;
      case "green":
        return css`
          background-color: #F9FEEF;
          border: 1px solid #8BB825;
          color: #668E0C;
        `;
      default:
        return css`
          color: #FF6F3D;
          background: rgba(255, 111, 61, 0.1);
          border: 1px solid #FFB7A0;
        `;
    }
  }}
`;

const CardHeading = styled(Heading)`
  margin-bottom: 28px;
`;

const CardInfoWrapper = styled.div`
  margin-bottom: 28px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
  column-gap: 34px;
`;

const CardInfoLocation = styled(Text)`
  padding-left: 20px;
  position: relative;
  font-size: 12px;

  &::before {
    content: "";
    width: 16px;
    height: 16px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(${getAssetUrl('/images/icons/location.svg')});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const CardInfoTime = styled(Text)`
  padding-left: 20px;
  position: relative;
  font-size: 12px;

  &::before {
    content: "";
    width: 16px;
    height: 16px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(${getAssetUrl('/images/icons/clock.svg')});
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const CardInfoLanguageWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const CardInfoLanguageIcon = styled.div<{
  $iconUrl: string;
}>`
  width: 18px;
  height: 14px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: ${({ $iconUrl }) => `url(${$iconUrl})`};
`;

const CardInfoLanguageLabel = styled(Text)`
  font-size: 12px;
`;

const CardContent = styled.div<{
  $isCardOpen: boolean;
}>`
  display: ${({ $isCardOpen }) => ($isCardOpen ? "block" : "none")};
  opacity: ${({ $isCardOpen }) => ($isCardOpen ? 1 : 0)};
  transition: opacity 400ms ease-out, display 400ms allow-discrete;

  @starting-style {
    opacity: 0;
  }
`;

const CardRequirementsHeading = styled(Heading)`
  margin: 24px 0;
`;

const CardRequirementsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardRequirementsItem = styled.li`
  list-style-type: auto;
  list-style-image: url(${getAssetUrl('/images/icons/rectangle-orange.svg')});
  list-style-position: inside;
  line-height: 1.6em;

  &:last-child {
    padding-bottom: 8px;
  }
`;

const CardSkillsHeading = styled(Heading)`
  margin: 24px 0;
`;

const CardSkillsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardSkillsItem = styled.li`
  list-style-type: auto;
  list-style-image: url(${getAssetUrl('/images/icons/rectangle-orange.svg')});
  list-style-position: inside;
  line-height: 1.6em;

  &:last-child {
    padding-bottom: 8px;
  }
`;


const CardBenefitsHeading = styled(Heading)`
  margin: 24px 0;
`;

const CardBenefitsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CardBenefitsItem = styled.li`
  list-style-type: auto;
  list-style-image: url(${getAssetUrl('/images/icons/rectangle-dark.svg')});
  list-style-position: inside;
  line-height: 1.6em;

  &:last-child {
    padding-bottom: 8px;
  }
`;

const CardInterestedText = styled(Text)`
  margin: 16px 0;
`;

const CardOpenButton = styled(Button)<{
  $isCardOpen: boolean;
}>`
  display: block;
  width: 24px;
  height: 24px;
  min-height: auto;
  padding: 0;
  background-image: url(${getAssetUrl('/images/icons/chevron-down.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  transform: rotate(${({ $isCardOpen }) => ($isCardOpen ? "180deg" : "0deg")});
  transition: transform 400ms ease;

  @media ${device.mobile} {
    margin: 0 auto;
  }
`;

export {
  CardItem,
  CardDepartment,
  CardHeading,
  CardInfoWrapper,
  CardInfoLocation,
  CardInfoTime,
  CardInfoLanguageWrapper,
  CardInfoLanguageIcon,
  CardInfoLanguageLabel,
  CardContent,
  CardRequirementsHeading,
  CardRequirementsList,
  CardRequirementsItem,
  CardSkillsHeading,
  CardSkillsList,
  CardSkillsItem,
  CardBenefitsHeading,
  CardBenefitsList,
  CardBenefitsItem,
  CardInterestedText,
  CardOpenButton
};