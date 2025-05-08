import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledEnvironmentHeading = styled(Heading)`
  margin-bottom: 112px;

  @media ${device.tablet} {
    margin-bottom: 64px;
  }

  @media ${device.tabletS} {
    margin-bottom: 32px;
  }

  @media ${device.mobile} {
    margin-bottom: 20px;
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

  @media ${device.tabletS} {
    gap: 64px;
  }

  @media ${device.mobile} {
    gap: 41px;
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
        width: 90vw;
        height: 67vw;
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
