import styled from "styled-components";
import { Container } from "@src/components/ui/Container";
import { device } from "@src/utils/device";


const StyledContainer = styled(Container)`
  text-align: center;
`;

const StyledConnectorsList = styled.div`
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 56px 24px;
  padding: 64px 0;

  @media ${device.mobile} {
    gap: 32px 16px;
    padding: 32px 0;
  }
`;

const StyledConnector = styled.div<{
  $backgroundPositionX: number;
  $width: number;
}>`
  display: block;
  height: 40px;
  background-image: url(/images/templates/solutions/connectors/connectors.svg);
  background-position-x: ${({ $backgroundPositionX }) =>
    $backgroundPositionX}px;
  filter: grayscale(100%);
  transition: filter 0.5s;
  width: ${({ $width }) => $width}px;

  &:hover {
    filter: grayscale(0%);
  }
`;

const StyledBottomArea = styled.div`
  margin: 0 auto;
  text-align: center;
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;


export {
  StyledContainer,
  StyledConnectorsList,
  StyledConnector,
  StyledBottomArea,
};
