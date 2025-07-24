import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledHeroSection = styled(Section)`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 51%;
    width: 100%;
    height: 100%;
    background-color: #efefef;
    transform: skew(-23deg, 0deg);

    @media ${device.tabletS} {
      left: 50%;
      transform: skew(-10deg, 0deg);
    }

    @media ${device.mobile} {
      /* left: 51%; */
      transform: skew(-6deg, 0deg);
    }
  }
`;

const StyledHeroContainer = styled(Container)`
  position: relative;
  z-index: 1;
  display: grid;
  justify-items: center;
`;

const StyledHeroHeading = styled(Heading)`
  max-width: 682px;
  margin: 0 auto;
  margin-bottom: 88px;
  text-align: center;

  @media ${device.tabletS} {
    margin-bottom: 72px;
  }

  @media ${device.mobile} {
    margin-bottom: 40px;
  }
`;

const StyledHeroComparison = styled.div`
  max-width: 745px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 261px 64px 261px;
  gap: 80px;
  align-items: center;
  margin-bottom: 88px;

  @media ${device.tabletS} {
    max-width: 607.5px;
    width: 100%;
    grid-template-columns: 1fr 64px 1fr;
    gap: 0;
    margin-bottom: 72px;

    & > img:last-of-type {
      justify-self: end;
    }
  }

  @media ${device.mobile} {
    display: grid;
    grid-template-columns: none;
    justify-content: center;
    justify-items: center;
    row-gap: 24px;
    margin-bottom: 40px;

    & > img:last-of-type {
      justify-self: center;
    }
  }
`;

const StyledHeroComparisonItem = styled.img<{
  $type: string;
}>`
  ${({ $type }) =>
    $type === "onlyoffice" &&
    `
      @media ${device.tabletS} {
        width: 217.5px;
        height: 40px;
      }

      @media ${device.mobile} {
        width: 174px;
        height: 32px;
      }
    `}

  ${({ $type }) =>
    $type === "versus" &&
    `
      @media ${device.mobile} {
        width: 48px;
        height: 48px;
      }
    `}

  ${({ $type }) =>
    $type === "adobe" &&
    `
    width: 182px;
    height: 48px;

    @media ${device.tabletS} {
      width: 166px;
      height: 40px;
    }

    @media ${device.mobile} {
      width: 116px;
      height: 28px;
    }
  `}

  ${({ $type }) =>
    $type === "google-docs" &&
    `
    @media ${device.tabletS} {
      width: 206px;
      height: 40px;
    }
    @media ${device.mobile} {
      width: 165px;
      height: 32px;
    }
  `}

${({ $type }) =>
    $type === "hancom" &&
    `
    margin-right: auto;

    @media ${device.tabletS} {
      width: 173px;
      height: 42px;
      margin-right: 29px;
    }

    @media ${device.mobile} {
      width: 117px;
      height: 28px;
      margin-right: 0;
    }
  `}

  ${({ $type }) =>
    $type === "libreoffice" &&
    `
      @media ${device.tabletS} {
        width: 206px;
        height: 40px;
      }

      @media ${device.mobile} {
        width: 165px;
        height: 32px;
      }
    `}

  ${({ $type }) =>
    $type === "microsoft-office" &&
    `
    @media ${device.mobile} {
      width: 113px;
      height: 36px;
    }
  `}

  ${({ $type }) =>
    $type === "wps" &&
    `
     @media ${device.tabletS} {
      width: 168px;
      height: 40px;
    }

    @media ${device.mobile} {
      width: 135px;
      height: 32px;
    }
  `}

  ${({ $type }) =>
    $type === "zoho" &&
    `
    margin-right: auto;

    @media ${device.tabletS} {
      width: 117px;
      height: 40px;
      margin-right: 69px;
    }

    @media ${device.mobile} {
      width: 93px;
      height: 32px;
      margin-right: 0;
    }
  `}
`;

const StyledHeroButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media ${device.mobile} {
    width: 100%;
    display: grid;
    justify-content: initial;
  }
`;

const StyledHeroText = styled.span`
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  margin-top: 32px;
`;

export {
  StyledHeroSection,
  StyledHeroContainer,
  StyledHeroHeading,
  StyledHeroComparison,
  StyledHeroComparisonItem,
  StyledHeroButtonsWrapper,
  StyledHeroText,
};
