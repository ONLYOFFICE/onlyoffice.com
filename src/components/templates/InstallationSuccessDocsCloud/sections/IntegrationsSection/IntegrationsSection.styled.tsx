import styled from "styled-components";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { Container } from "@src/components/ui/Container";

const StyledContainer = styled(Container)`
  text-align: center;
`;

const StyledDescription = styled(Text)`
  max-width: 800px;
  margin: 24px auto 56px;
  line-height: 1.6em;
  font-size: 18px;
  
  @media ${device.mobile} {
    margin-bottom: 40px;
    font-size: 16px;
  }
`;

const StyledConnectorsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 56px 80px;
  margin-bottom: 40px;

  @media ${device.tabletS} {
    gap: 56px 72px;
  }
  @media ${device.mobile} {
    gap: 40px 24px;
  }
`;

const StyledConnectorLink = styled(Link)<{ $positionX: number; $iconUrl?: string; $width: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  background-position: ${({ $positionX }) => `${$positionX}px`} center;
  background-size: ${({ $iconUrl }) => $iconUrl ? "contain" : "auto 48px"};
  background-image: ${({ $iconUrl }) => $iconUrl ? `url("${$iconUrl}")` : "url(/images/templates/installation-success-docs-cloud/connectors/connectors.svg)"};
  background-repeat: no-repeat;

  width: ${({ $width }) => `${$width}px`};
  filter: grayscale(100%);
  transition: filter 0.2s;
  
  &:hover {
    filter: none;
  }
`;

export { StyledContainer, StyledDescription, StyledConnectorsList, StyledConnectorLink };
