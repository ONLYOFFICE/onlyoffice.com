import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";

const StyledUsers = styled.div`
  text-align: center;

  @media ${device.tablet} {
    overflow-x: scroll;
  }
`;

const StyledUsersHeading = styled(Heading)`
  text-align: center;
  padding: 0 0 60px;

  @media ${device.mobile} {
    padding: 0 0 32px;
  }
`;

const StyledUsersItems = styled.ul`
  display: flex;
  justify-content: flex-start;
  max-width: 1120px;
  margin: auto;

  @media ${device.tablet} {
    margin-left: 40px;
    width: 1120px;
  }
`;

const StyledItem = styled.li<{ $width: number; $height: number; $backgroundImage: string; $backgroundPosition: string }>`
  width: ${props => props.$width}px;
  height: ${props => props.$height}px;
  background-image: ${props => props.$backgroundImage};
  background-position: ${props => props.$backgroundPosition};
  background-size: auto;
  background-repeat: no-repeat;
`;

export { StyledUsers, StyledUsersItems, StyledUsersHeading, StyledItem };
