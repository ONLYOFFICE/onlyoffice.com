import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledEnvironment = styled(Section)`
  background: #f8f9f9;

  @media ${device.tabletS} {
    background: #ffffff;
  }

  .title {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.33em;
    text-align: center;
    padding-bottom: 112px;

    @media ${device.tabletS} {
      font-size: 30px;
      letter-spacing: -0.01em;
      padding-bottom: 32px;
    }

    @media ${device.mobile} {
      font-size: 20px;
      padding-bottom: 20px;
    }
  }
`;

const StyledEnvironmentList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 112px;

  @media ${device.tabletS} {
    gap: 48px;
  }

  @media ${device.tabletS} {
    gap: 32px;
  }

  .item {
    justify-content: center;

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

    @media ${device.tablet} {
      &:nth-child(-n + 3) > div:first-child {
        transform: translateY(-30px);
      }
    }

    @media ${device.tabletS} {
      &:nth-child(-n + 3) > div:first-child {
        transform: translateY(0);
      }
    }

    &:nth-child(n + 3) > div:first-child {
      transform: translateY(-30px);

      @media ${device.tablet} {
        transform: translateY(-45px);
      }

      @media ${device.tabletS} {
        transform: translateY(0);
      }
    }

    @media ${device.tablet} {
      &:last-child > div:first-child {
        transform: translateY(-70px);
      }
    }

    @media ${device.tabletS} {
      &:last-child > div:first-child {
        transform: translateY(0);
      }
    }

    @media ${device.tabletS} {
      h3 {
        font-size: 20px;
      }

      a {
        font-size: 13px;
      }
    }

    @media ${device.mobile} {
      h3 {
        font-size: 16px;
      }

      a {
        font-size: 13px;
      }
    }
  }
`;

export { StyledEnvironment, StyledEnvironmentList };
