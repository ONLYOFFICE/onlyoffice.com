import styled from "styled-components";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledText = styled(Text)`
  font-size: 16px;
  line-height: 1.6em;
  margin: 0 auto;
  padding: 32px 0 62px;
  max-width: 806px;
  width: 100%;

  @media ${device.tabletS} {
    padding: 24px 0 64px;
  }

  @media ${device.mobile} {
    padding: 16px 0 32px;
  }
`;

const StyledContainer = styled(Container)`
  text-align: center;
`;

const StyledConnectorsList = styled.div`
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 56px;

  @media ${device.mobile} {
    gap: 32px 8px;
  }
`;

const StyledConnector = styled(Link)<{
  $backgroundPositionY: number;
  $width: number;
}>`
  display: block;
  height: 48px;
  background-image: url(${getAssetUrl('/images/templates/docs-enterprise/connectors/logos-connectors.svg')});
  background-position-y: ${({ $backgroundPositionY }) =>
    $backgroundPositionY}px;
  filter: grayscale(100%);
  transition: filter 0.5s;
  width: ${({ $width }) => $width}px;

  &:hover {
    filter: grayscale(0%);
  }
`;

const StyledBottomArea = styled.div`
  margin: 0 auto;
  padding: 48px 0 0;
  text-align: center;
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;

  @media ${device.mobile} {
    padding: 32px 0 48px;
    font-size: 14px;
    gap: 5px;
  }
`;

const StyledShowMore = styled.div<{$transformIcon: string;}>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #FF6F3D;
  cursor: pointer;
  text-decoration: underline;

  &:after {
    content: "";
    transform: ${({ $transformIcon }) => $transformIcon};
    background-image: url(${getAssetUrl('/images/templates/docs-enterprise/connectors/orange-arrow.svg')});
    width: 24px;
    height: 24px;
    display: inline-flex;
  }

  &:hover {
    text-decoration: none;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export {
  StyledContainer,
  StyledConnectorsList,
  StyledConnector,
  StyledBottomArea,
  StyledShowMore,
  StyledText,
};
