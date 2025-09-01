import styled from "styled-components";
import { device } from "@src/utils/device";
import { Container } from "@src/components/ui/Container";

const StyledContainer = styled(Container)`
  text-align: center;
`;

const ClientsGroup = styled.div`
  margin: 64px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
  overflow-x: scroll;
  max-width: 1120px;
  scrollbar-width: none;

  @media ${device.tablet} {
  }
  
  @media ${device.tabletS} {
    margin-top: 48px;
  }
  
  @media ${device.mobile} {
    margin-top: 32px;
  }
`;

const ClientItem = styled.span<{ $width: number; $positionX: string }>`
  background-image: url("/images/templates/developer-edition/customers/customers-articles.png");
  background-size: auto 86px;
  background-position: ${(props) => props.$positionX} 50%;
  height: 51px;
  flex-shrink: 0;
  transition: filter 0.5s, -webkit-filter 0.5s;
  filter: grayscale(100%);
  width: ${(props) => props.$width}px;
  
  &:hover {
    filter: grayscale(0%);
  }
`;

export { ClientItem, StyledContainer, ClientsGroup };