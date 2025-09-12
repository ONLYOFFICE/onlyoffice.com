import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledIntegrationSection = styled(Section)`
  background-color: #3A6870;
  background-image: url(${getAssetUrl('/images/templates/customers/integration/sciebo.svg')});
  background-repeat: no-repeat;
  background-position: -8vw center;
  background-size: auto 51vw;

  @media ${device.tablet} {
    background-position: -70vw center;
    background-size: auto 115vw;
  }

  @media ${device.mobileS} {
    background-position: -54vw center;
  }
`;

const StyledIntegrationContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.mobile} {
    flex-direction: column;
  }

  @media ${device.mobileS} {
    padding-right: 25px;
  }
`;

const StyledIntegrationLeft = styled.div`
  @media ${device.mobile} {
    align-self: flex-start;
  }
`;

const StyledIntegrationHeading = styled(Heading)`
  max-width: 500px;
  margin-bottom: 17px;

  @media ${device.tabletS} {
    font-size: 22px;
    max-width: 416px;
  }

  @media ${device.mobile} {
    font-size: 18px;
  }
`;

const StyledIntegrationRight = styled.div`
  width: 296px;
  height: 266px;
  position: relative;

  @media ${device.mobile} {
    width: 136px;
    height: 122px;
    align-self: flex-end;
  }
`;

const StyledIntegrationIcon = styled.div<{
  $iconUrl: string;
}>`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background-image: url(${(props) => props.$iconUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 75px 75px;
  background-color: #43767E;
  position: absolute;

  &:nth-child(1) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &:nth-child(2) {
    bottom: 0;
    left: 0;
  }

  &:nth-child(3) {
    bottom: 0;
    right: 0;
  }

  @media ${device.mobile} {
    width: 58.87px;
    height: 58.87px;
    background-size: 35px 35px;
  }
`;

export {
  StyledIntegrationSection,
  StyledIntegrationContainer,
  StyledIntegrationLeft,
  StyledIntegrationHeading,
  StyledIntegrationRight,
  StyledIntegrationIcon
};