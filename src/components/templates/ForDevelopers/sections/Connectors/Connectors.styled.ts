import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledConnectors = styled.div`
  text-align: center;
  max-width: 1120px;
  margin: auto;

  @media ${device.tablet} {
    overflow-x: scroll;
  }
`;

const StyledConnectorsItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-between;
  margin: 0 40px;

  @media ${device.tablet} {
    width: 1120px;
  }
`;

const StyledItem = styled.li<{ $width: number; $height: number; $backgroundImage: string; $backgroundPosition: string }>`
  width: ${props => props.$width}px;
  height: ${props => props.$height}px;
  background-image: ${props => props.$backgroundImage};
  background-position: ${props => props.$backgroundPosition};
  background-size: 840px auto;
  background-repeat: no-repeat;
  filter: grayscale(100%);
  transition: filter 0.5s;

  &:hover {
    filter: grayscale(0);
  }
`;

export {
  StyledConnectors,
  StyledConnectorsItems,
  StyledItem
};
