import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";

const StyledUsers = styled.div`
  text-align: center;
  max-width: 1120px;
  margin: auto;

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
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-between;
  margin: 0 40px;

  @media ${device.tablet} {
    margin-left: 40px;
    width: 1120px;
  }

  & li {
    filter: grayscale(1);
    transition: filter 0.3s ease;

    &:hover {
      filter: grayscale(0);
    }
  }
`;

export {
  StyledUsers,
  StyledUsersItems,
  StyledUsersHeading
};
