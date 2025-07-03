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

    @media ${device.tablet} {
    overflow-x: scroll;
  }
`;

const StyledUsersItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-between;

  @media ${device.tablet} {
    width: 1120px;
  }

  > div {
    @media ${device.desktop} {
      width: calc(33.333% - 24px);
      max-width: 100%;
    }

    @media ${device.tablet} {
      width: calc(50% - 16px);
    }

    @media ${device.mobile} {
      width: 100%;
    }
  }
`;

export {
  StyledUsers,
  StyledUsersItems,
  StyledUsersHeading
};
