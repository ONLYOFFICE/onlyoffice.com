import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledUsers = styled.div`
  text-align: center;
  max-width: 1120px;
  margin: auto;

  @media ${device.desktop} {
    overflow-x: scroll;
  }
`;

const StyledUsersHeading = styled(Heading)`
  text-align: center;
  padding: 0 0 24px;

  @media ${device.tabletS} {
    padding: 0 0 10px;
  }
  @media ${device.mobile} {
    padding: 0 0 24px;
  }
`;

const StyledUsersItems = styled.ul`
  display: flex;
  justify-content: space-between;

  @media ${device.desktop} {
    margin: 0 40px;
    width: 1120px;
  }

  @media ${device.mobile} {
    justify-content: start;
    margin: 0 16px;
    gap: 8px;
  }
`;

const UserItem = styled.li<{
  $width: number;
  $height: number;
  $positionX: number;
}>`
  background-image: url(${getAssetUrl('/images/templates/workspace-enterprise/trusted/logos.svg')});
  background-repeat: no-repeat;
  background-position: ${(props) => props.$positionX}px center;
  height: ${(props) => props.$height}px;
  width: ${(props) => props.$width}px;
  filter: grayscale(100%);

  &:hover {
    filter: grayscale(0%);
  }

  @media ${device.mobile} {
    //background-size: auto 44px;
    height: 74px;
   // width: 93px;
  }
`;

export { StyledUsers, StyledUsersItems, StyledUsersHeading, UserItem };
