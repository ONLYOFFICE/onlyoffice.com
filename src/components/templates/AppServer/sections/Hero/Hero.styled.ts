import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledHeroHeading = styled(Heading)`
  text-align: center;
  margin-bottom: 32px;
  font-size: 40px;
  line-height: 48px;

  @media ${device.tabletS} {
  }

  @media ${device.mobile} {
    margin-bottom: 16px;
    font-size: 28px;
    line-height: 40px;
  }
`;

const StyledHeroFeatures = styled.div`
  max-width: 851px;
  margin: 68px auto 13px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  text-align: center;

  @media ${device.tabletS} {
    margin-bottom: 64px;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    margin: 32px auto 21px;
  }
`;

const StyledFeature = styled(Text)<{
  $positionX: string;
  $mobilePositionX: string;
}>`
  padding-top: 146px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 11px;
    left: 50%;
    transform: translateX(-50%);
    width: 125px;
    height: 118px;
    background-image: url("/images/templates/app-server/hero/icons.svg");
    background-repeat: no-repeat;
    background-position: ${({ $positionX }) => $positionX} center;

    @media ${device.mobile} {
      top: 0;
      width: 83px;
      height: 74px;
      background-position-x: ${({ $mobilePositionX }) => $mobilePositionX};
      background-size: auto 74px;
    }
  }

  @media ${device.mobile} {
    padding-top: 85px;
  }
`;

const StyledHeroImageWrapper = styled.div`
  max-width: 1518px;
  margin: 0 auto;
  padding: 0 9px;

  @media ${device.mobile} {
    padding: 0;
  }
`;

const StyledHeroImage = styled.div`
  background-image: url("/images/templates/app-server/hero/hero-image.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding-bottom: 38.34%;
  position: relative;
  z-index: 2;

  @media ${device.mobile} {
    background-size: 522px 200px;
    background-position-x: 40%;
    padding-bottom: 0;
    height: 200px;
  }
`;

export {
  StyledHeroHeading,
  StyledHeroFeatures,
  StyledFeature,
  StyledHeroImageWrapper,
  StyledHeroImage,
};
