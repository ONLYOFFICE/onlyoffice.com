import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledCustomers = styled.div`
  margin-bottom: 88px;
  text-align: center;

  @media ${device.tablet} {
    margin-bottom: 56px;
  }

  @media ${device.mobile} {
    margin-bottom: 48px;
  }
`;

const StyledCustomersHeading = styled(Heading)`
  margin-bottom: 88px;

  @media ${device.tablet} {
    margin-bottom: 40px;
  }

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

const StyledCustomersItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px 56px;
  margin-bottom: 32px;

  li {
    display: flex;

    &:nth-child(1) {
      @media ${device.mobile} {
        order: 2;
      }
    }

    &:nth-child(2) {
      @media ${device.mobile} {
        order: 1;
      }
    }

    &:nth-child(3) {
      @media ${device.mobile} {
        order: 4;
      }
    }

    &:nth-child(4) {
      @media ${device.mobile} {
        order: 7;
      }
    }

    &:nth-child(5) {
      @media ${device.mobile} {
        order: 3;
      }
    }

    &:nth-child(6) {
      @media ${device.mobile} {
        order: 5;
      }
    }

    &:nth-child(7) {
      @media ${device.mobile} {
        order: 6;
      }
    }
  }

  @media ${device.tablet} {
    gap: 40px 120px;
    margin-bottom: 40px;
  }

  @media ${device.mobile} {
    gap: 28px 24px;
    margin-bottom: 32px;
  }
`;

const StyledSuccessStoriesLinkWrapper = styled.div`
  text-align: center;

  @media ${device.mobile} {
    text-align: initial;
  }
`;

const StyledSuccessStoriesItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 32px;
  margin-bottom: 40px;

  @media ${device.tabletS} {
    grid-template-columns: initial;
  }

  @media ${device.mobile} {
    row-gap: 32px;
    margin-bottom: 32px;
  }
`;

export {
  StyledCustomers,
  StyledCustomersHeading,
  StyledCustomersItems,
  StyledSuccessStoriesItems,
  StyledSuccessStoriesLinkWrapper,
};
