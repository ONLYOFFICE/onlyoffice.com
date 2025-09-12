import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledGetAccessSection = styled(Section)`
  background: url(${getAssetUrl('/images/templates/nonprofit-organizations/get-access/bg.png')}), linear-gradient(162.82deg, #FFC671 0%, #FF7541 64.06%, #FF6F3D 100%);
  background-size: 2210px auto;
  background-position: 50% 70%;
  background-repeat: no-repeat;
`;

const StyledGetAccessIcon = styled.div`
  width: 152px;
  height: 75px;
  background: url(${getAssetUrl('/images/templates/nonprofit-organizations/get-access/icon.svg')});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto 24px;
`;

const StyledGetAccessHeading = styled(Heading)`
  margin-bottom: 24px;
`;

const StyledGetAccessText = styled (Text)`
  margin-bottom: 40px;
`;

const StyledGetAccessButtonsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const StyledGetAccessButtonsLink = styled(Link)<{
  $iconUrl: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 100%;
  padding: 16px 12px;
  white-space: nowrap;
  cursor: pointer;

  &::before {
    content: "";
    width: 32px;
    height: 32px;
    background-image: url(${({ $iconUrl}) => $iconUrl});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

const StyledGetAccessButtonsItem = styled.li`
  width: 170px;
  height: 64px;
  border-radius: 3px;
  background-color: #f6f6f6;
  transition-duration: 300ms;

  &:hover {
    background-color: #ffffff;
    box-shadow: 0 7px 25px rgba(85,85,85,0.15);
  }

  &:nth-last-child(-n + 2) {
    ${StyledGetAccessButtonsLink} {
      padding: 0;

      &::before {
        width: 100%;
        height: 100%;
      }
    }
  }
`;



export {
  StyledGetAccessSection,
  StyledGetAccessIcon,
  StyledGetAccessHeading,
  StyledGetAccessText,
  StyledGetAccessButtonsList,
  StyledGetAccessButtonsItem,
  StyledGetAccessButtonsLink
};