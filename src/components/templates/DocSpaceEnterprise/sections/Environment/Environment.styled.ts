import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

const StyledEnvironment = styled(Section)`
  background: #f8f9f9;

  @media ${device.tabletS} {
    background: #ffffff;
  }
`;

const StyledEnvironmentHeading = styled(Heading)`
  letter-spacing: -0.02em;
  line-height: 1.33em;
  padding-bottom: 112px;

  @media ${device.tabletS} {
    letter-spacing: -0.01em;
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

  @media ${device.tabletS} {
    gap: 48px;
  }

  @media ${device.tabletS} {
    gap: 32px;
  }

  .item {
    justify-content: center;

    & > div:last-child > div {
      width: 640px;
      height: 500px;
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

export { StyledEnvironment, StyledEnvironmentHeading, StyledEnvironmentList };
