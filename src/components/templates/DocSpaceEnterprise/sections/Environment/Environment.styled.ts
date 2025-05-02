import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledEnvironmentHeading = styled(Heading)`
  padding-bottom: 112px;

  @media ${device.tablet} {
    padding-bottom: 64px;
  }

  @media ${device.tabletS} {
    padding-bottom: 32px;
  }

  @media ${device.mobile} {
    padding-bottom: 20px;
  }
`;

const StyledEnvironmentList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 112px;

  @media ${device.tablet} {
    gap: 0;
  }

  .item {
    justify-content: center;

    & > div:last-child > div {
      width: 640px;
      height: 500px;

      @media ${device.tablet} {
        width: 500px;
      }

      @media ${device.tabletS} {
        width: 688px;
        height: 516px;
      }

      @media ${device.mobile} {
        width: 560px;
      }

      @media ${device.mobileS} {
        width: 337px;
        height: 234px;
      }
    }

    &:nth-child(2n) {
      text-align: right;

      @media ${device.tabletS} {
        text-align: left;
      }
    }

    @media ${device.tabletS} {
      & > div:first-child > div {
        padding-bottom: 16px;
      }
    }

    h3 {
      @media ${device.tabletS} {
        font-size: 22px;
      }

      @media ${device.mobile} {
        font-size: 18px;
      }
    }

    a {
      @media ${device.tabletS} {
        font-size: 13px;
      }

      @media ${device.mobile} {
        font-size: 14px;
      }
    }
  }
`;

export { StyledEnvironmentHeading, StyledEnvironmentList };
