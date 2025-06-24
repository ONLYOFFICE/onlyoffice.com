import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { IFeaturesItem } from "../../About.types";
import { device } from "@src/utils/device";

const StyledFeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 130px;

  @media ${device.tabletS} {
    gap: 95px;
  }

  @media ${device.mobile} {
    gap: 45px;
  }
`;

const StyledFeaturesItem = styled.li<{
  $image: IFeaturesItem["image"];
}>`
  position: relative;

  &:nth-child(1) {
    padding-right: 570px;

    @media ${device.desktop} {
      padding-right: 45vw;
    }

    @media ${device.tabletS} {
      padding-right: 35vw;
    }

    @media ${device.mobile} {
      padding-right: 0;
    }

    &::before {
      content: '';
      background-image: url(${({ $image }) => $image});
      background-repeat: no-repeat;
      display: block;
      position: absolute;
      top: 30%;
      right: 0;
      width: 380px;
      height: 250px;

      @media ${device.desktop} {
        width: 37vw;
        background-size: contain;
      }

      @media ${device.tabletS} {
        width: 35vw;
        left: calc(50% + 70px);
      }

      @media ${device.mobile} {
        left: calc(50% - 140px);
        top: 65px;
        width: 260px;
        height: 200px;
      }
    }
  }

  &:nth-child(2) {
    padding-left: 620px;

    @media ${device.desktop} {
      padding-left: 45vw;
    }

    @media ${device.tabletS} {
      padding-left: 35vw;
    }

    @media ${device.mobile} {
      padding-left: 0;
    }

    &::after {
      content: '';
      background-image: url(${({ $image }) => $image});
      background-repeat: no-repeat;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 469px;
      height: 469px;

      @media ${device.desktop} {
        width: 46vw;
        background-size: contain;
      }

      @media ${device.tabletS} {
        width: 35vw;
        left: -10px;
        top: 10%;
      }

      @media ${device.mobile} {
        background-size: 220px auto;
        left: calc(50% - 120px);
        top: 13%;
        width: 220px;
        height: 220px;
      }
    }
  }

  &:nth-child(3) {
    padding-right: 570px;

    @media ${device.desktop} {
      padding-right: 45vw;
    }

    @media ${device.tabletS} {
      padding-right: 35vw;
    }

    @media ${device.mobile} {
      padding-right: 0;
    }

    &::before {
      content: '';
      background-image: url(${({ $image }) => $image});
      background-repeat: no-repeat;
      display: block;
      position: absolute;
      top: 0%;
      right: 0;
      width: 544px;
      height: 468px;

      @media ${device.desktop} {
        width: 37vw;
        background-size: contain;
        background-position-y: 50%;
      }

      @media ${device.tabletS} {
        width: 35vw;
        left: calc(50% + 70px);
      }

      @media ${device.mobile} {
        left: calc(50% - 140px);
        top: 65px;
        width: 260px;
        height: 225px;
        background-position-y: 0px;
      }
    }
  }
`;

const StyledFeatruesTextWrapper = styled.div`
  width: 530px;

  @media ${device.desktop} {
    width: 45vw;
  }

  @media ${device.mobile} {
    width: 90vw;
  }
`;

const StyledFeaturesHeading = styled(Heading)`
  line-height: 1.33em;
  margin-bottom: 32px;

  @media ${device.tabletS} {
    font-size: 18px;
  }

  @media ${device.mobile} {
    padding: 0 0 220px;
    text-align: center;
  }
`;

const StyledFeaturesText = styled(Text)`
  padding: 5px 0;
`;

const StyledFeaturesLink = styled(Link)`
  display: block;
  width: fit-content;
  margin-top: 20px;
`;

export {
  StyledFeaturesText,
  StyledFeaturesList,
  StyledFeaturesItem,
  StyledFeatruesTextWrapper,
  StyledFeaturesHeading,
  StyledFeaturesLink
};