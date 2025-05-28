import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledMobileAppsSection = styled(Section)`
  padding: 90px 0;
  background-image: url("/images/templates/projects/mobile-apps/en/mobile.png");
  background-repeat: no-repeat;
  background-position: calc(50% + 380px) 0;

  @media ${device.mobile} {
    background-position-y: -32px;
  }
`;

const StyledMobileAppsContent = styled.div`
  max-width: 500px;
  display: grid;
  gap: 30px;

  @media ${device.tabletS} {
    max-width: 55vw;
  }
`;

const StyledMobileApps = styled.span`
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const StyledMobileAppsHeading = styled(Heading)`
  font-weight: 400;
  font-size: 30px;
  line-height: 30px;
  color: #ff6f3d;
`;

const StyledMobileAppsText = styled(Text)`
  font-size: 18px;
  line-height: 25px;
`;

const StyledMobileAppsButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;

  @media ${device.mobile} {
    display: grid;
  }
`;

export {
  StyledMobileAppsSection,
  StyledMobileAppsContent,
  StyledMobileApps,
  StyledMobileAppsHeading,
  StyledMobileAppsText,
  StyledMobileAppsButtonsWrapper,
};
