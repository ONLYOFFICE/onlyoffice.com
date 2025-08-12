import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { StyledSubscribeItem } from "./sub-components/SubscribeItem/SubscribeItem.styled";

const StyledSubscribe = styled(Section)`
  margin-top: -72px;

  @media ${device.tablet} {
    margin-top: -48px;
  }
`;

const StyledSubscribeWrapper = styled.div`
  display: grid;
  row-gap: 112px;

  @media ${device.tabletS} {
    row-gap: 80px;
  }

  @media ${device.mobile} {
    row-gap: 48px;
  }
`;

const StyledSubscribeHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 96px;

  @media ${device.tabletS} {
    padding-bottom: 80px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    justify-content: initial;
    padding-bottom: 48px;
  }
`;

const StyledSubscribeHeroWrapper = styled.div`
  display: grid;
  row-gap: 16px;
  margin-right: 32px;
  max-width: 696px;

  @media ${device.mobile} {
    margin: 0 0 32px;
  }
`;

const StyledSubscribeHeroHeading = styled(Heading)`
  @media ${device.tabletS} {
    font-size: 28px;
    line-height: 37px;
  }
`;

const StyledSubscribeHeroText = styled(Text)`
  @media ${device.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const StyledSubscribeHeroImage = styled.div`
  width: 392px;
  min-width: 392px;
  height: 238px;
  background-image: url("/images/templates/subscribe/hero.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media ${device.tablet} {
    width: 310px;
    min-width: 310px;
    height: 188px;
  }

  @media ${device.tabletS} {
    width: 288px;
    min-width: 288px;
    height: 175px;
  }
`;

const StyledSubscribeMemberHeading = styled(Heading)`
  margin-bottom: 56px;

  @media ${device.mobile} {
    margin-bottom: 32px;
    font-size: 20px;
    line-height: 27px;
  }
`;

const StyledSubscribeMemberItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;

  @media ${device.tabletS} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledSubscribeHelpfulResourcesHeading = styled(Heading)`
  margin-bottom: 40px;

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 27px;
  }
`;

const StyledSubscribeHelpfulResourcesItems = styled.div`
  display: flex;

  ${StyledSubscribeItem} {
    width: 100%;
    max-width: 336px;

    &:not(:last-child) {
      margin-right: 32px;

      @media ${device.mobile} {
        margin: 0 0 32px;
      }
    }

    @media ${device.mobile} {
      max-width: 100%;
    }
  }

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export {
  StyledSubscribe,
  StyledSubscribeWrapper,
  StyledSubscribeHero,
  StyledSubscribeHeroWrapper,
  StyledSubscribeHeroHeading,
  StyledSubscribeHeroText,
  StyledSubscribeHeroImage,
  StyledSubscribeMemberHeading,
  StyledSubscribeMemberItems,
  StyledSubscribeHelpfulResourcesHeading,
  StyledSubscribeHelpfulResourcesItems,
};
