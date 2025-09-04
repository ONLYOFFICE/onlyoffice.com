import styled from "styled-components";
import { ILogosBlockItems } from "../../NonprofitOrganizations.types";
import { device } from "@src/utils/device";

const StyledLogosBlockContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media ${device.tablet} {
    overflow-x: scroll;
    padding: 0 32px;
  }
`;

const StyledLogosBlockList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;

  @media ${device.tablet} {
    width: 1200px;
  }
`;

const StyledLogosBlockItem = styled.li<{
  $width: ILogosBlockItems["width"];
  $bgPositionX: ILogosBlockItems["bgPositionX"];
}>`
  width: ${({ $width }) => $width};
  height: 100%;
  background-image: url("/images/templates/nonprofit-organizations/logos-block/logo-non-profit.png");
  background-position-x: ${({ $bgPositionX }) => $bgPositionX};
  background-position-y: 50%;
  background-repeat: no-repeat;
  background-size: auto 70px;
  transition-duration: 500ms;
  filter: grayscale(1);

  &:hover {
    filter: grayscale(0);
  }
`;

export {
  StyledLogosBlockContainer,
  StyledLogosBlockList,
  StyledLogosBlockItem
};
