import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledRatingWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 352px;
  align-items: start;
  column-gap: 32px;

  @media ${device.tablet} {
    grid-template-columns: initial;
    column-gap: initial;
    row-gap: 64px;
  }

  @media ${device.mobile} {
    row-gap: 48px;
  }
`;

const StyledRatingAwardsHeading = styled(Heading)`
  margin-bottom: 72px;

  @media ${device.tablet} {
    margin-bottom: 64px;
  }

  @media ${device.mobile} {
    margin-bottom: 32px;
    text-align: center;
  }
`;

const StyledRatingAwardsItems = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 56px 32px;

  @media ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
`;

const StyledRatingStars = styled.ul`
  li {
    padding: 31px 0 32px;

    &:not(:first-child) {
      border-top: 1px solid #efefef;
    }

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }

    &:nth-child(1) {
      @media ${device.tablet} {
        order: 1;
      }

      @media ${device.tabletS} {
        order: initial;
      }
    }

    &:nth-child(2) {
      @media ${device.tablet} {
        order: 3;
      }

      @media ${device.tabletS} {
        order: initial;
      }
    }

    &:nth-child(3) {
      @media ${device.tablet} {
        order: 5;
      }

      @media ${device.tabletS} {
        order: initial;
      }
    }

    &:nth-child(4) {
      @media ${device.tablet} {
        border-top: initial;
        padding-top: initial;
        order: 2;
      }

      @media ${device.tabletS} {
        border-top: 1px solid #efefef;
        padding-top: 23px;
        order: initial;
      }
    }

    &:nth-child(5) {
      @media ${device.tablet} {
        order: 4;
      }

      @media ${device.tabletS} {
        order: initial;
      }
    }

    &:nth-child(6) {
      @media ${device.tablet} {
        order: 6;
      }

      @media ${device.tabletS} {
        order: initial;
      }
    }

    &:nth-child(7) {
      @media ${device.tablet} {
        order: 7;
      }

      @media ${device.tabletS} {
        order: initial;
      }
    }

    &:nth-child(8) {
      @media ${device.tablet} {
        order: 8;
      }

      @media ${device.tabletS} {
        order: initial;
      }
    }

    @media ${device.mobile} {
      padding: 23px 0 24px;
    }
  }

  @media ${device.tablet} {
    display: grid;
    align-items: start;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }

  @media ${device.tabletS} {
    grid-template-columns: initial;
  }
`;

export {
  StyledRatingWrapper,
  StyledRatingAwardsHeading,
  StyledRatingAwardsItems,
  StyledRatingStars,
};
