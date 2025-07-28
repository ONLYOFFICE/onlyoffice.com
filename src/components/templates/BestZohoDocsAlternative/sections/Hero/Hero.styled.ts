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
      left: 51%;
      transform: skew(-10deg, 0deg);
    }

    @media ${device.mobile} {
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

const StyledHeroСomparison = styled.div`
  max-width: 745px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 80px;
  align-items: center;
  margin-bottom: 88px;

  @media ${device.tabletS} {
    margin-bottom: 72px;
    max-width: 627px;
    width: 100%;
    gap: 0;
    justify-content: space-between;
  }

  @media ${device.mobile} {
    margin-bottom: 40px;
    display: grid;
    justify-content: center;
    justify-items: center;
    row-gap: 16px;
  }
`;

const StyledHeroСomparisonItem = styled.img`
  &.onlyoffice {
    @media ${device.tabletS} {
      width: 217.5px;
      height: 40px;
    }

    @media ${device.mobile} {
      width: 174px;
      height: 32px;
    }
  }

  &.versus {
    @media ${device.mobile} {
      width: 48px;
      height: 48px;
    }
  }

  &.zoho {
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
  }
`;

const StyledHeroText = styled.span`
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  margin-top: 32px;

  @media ${device.mobile} {
    margin-top: 16px;
  }
`;

export {
  StyledHeroSection,
  StyledHeroContainer,
  StyledHeroHeading,
  StyledHeroСomparison,
  StyledHeroСomparisonItem,
  StyledHeroText,
};
