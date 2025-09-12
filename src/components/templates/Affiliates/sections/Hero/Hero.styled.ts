import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHeroSection = styled(Section)`
  margin-top: -72px;
  background-image: url(${getAssetUrl('/images/templates/affiliates/hero/hero_bg.svg')});
  background-repeat: no-repeat;
  background-position: calc(50% + 275px) 72px;
  background-color: #f5f5f5;

  @media ${device.desktop} {
    background-position: calc(50% - 25px) bottom;
  }

  @media ${device.tablet} {
    margin-top: -64px;
    background-position: calc(50% - 25px) calc(100% + 40px);
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    background-position: calc(50% - 50px) calc(100% + 30px);
  }

  @media ${device.mobile} {
    background-size: 472px 280px;
    background-position: calc(50% - 10px) calc(100% - 20px);
  }
`;

const StyledHeroWrapper = styled.div`
  margin-left: 65px;
  display: grid;
  grid-template-columns: 600px auto;
  align-items: center;
  gap: 40px;

  @media ${device.desktop} {
    grid-template-columns: 1fr;
    text-align: center;
    margin-left: 0;
  }

  @media ${device.mobile} {
    text-align: start;
  }
`;

const StyledHeroContent = styled.div`
  display: grid;
  justify-items: start;
  row-gap: 32px;

  @media ${device.desktop} {
    justify-items: center;
    text-align: center;
  }

  @media ${device.tabletS} {
    justify-items: start;
    text-align: initial;
  }

  @media ${device.mobile} {
    row-gap: 24px;
  }
`;

const StyledHeroHeading = styled(Heading)`
  letter-spacing: -0.03em;

  @media ${device.desktop} {
    max-width: 795px;
  }

  @media ${device.tablet} {
    font-size: 44px;
    line-height: 59px;
    letter-spacing: -0.02em;
  }

  @media ${device.mobile} {
    font-size: 24px;
    line-height: 32px;
  }
`;

const StyledHeroList = styled.ul`
  display: grid;
  align-items: start;
  gap: 8px;
  font-size: 22px;
  line-height: 33px;
  width: 100%;

  @media ${device.desktop} {
    display: flex;
    justify-content: center;
    font-size: 18px;
    line-height: 27px;
  }

  @media ${device.tabletS} {
    display: grid;
    justify-content: start;
    line-height: 24px;
  }

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const StyledHeroListItem = styled.li`
  position: relative;
  padding-left: 32px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 8px;
    width: 6px;
    height: 6px;
    background: #ff6f3d;
    transform: rotate(45deg) translateY(-50%);

    @media ${device.mobile} {
      top: 8px;
    }
  }
`;

const StyledHeroImage = styled.div`
  padding-bottom: 75.71%;
  background-image: url(${getAssetUrl('/images/templates/affiliates/hero/hero_image.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media ${device.desktop} {
    margin: 0 auto;
    padding-bottom: 0;
    max-width: 634px;
    width: 100%;
    height: 480px;
  }

  @media ${device.tabletS} {
    padding-bottom: 75.71%;
    height: initial;
  }

  @media ${device.mobile} {
    padding-bottom: 0;
    width: 288px;
    height: 218px;
  }
`;

export {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroImage,
  StyledHeroList,
  StyledHeroListItem,
};
