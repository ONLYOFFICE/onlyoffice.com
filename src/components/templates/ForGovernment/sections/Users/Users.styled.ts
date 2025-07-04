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
`;

const StyledUsersItems = styled.ul`
  display: flex;
  justify-content: flex-start;
  max-width: 1120px;
  margin: auto;

  @media ${device.tablet} {
    margin-left: 40px;
  }
`;

export {
  StyledUsers,
  StyledUsersItems,
  StyledUsersHeading
};
