import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledContactsSection = styled(Section)`
  padding: 0;
`;

const StyledContactsWrapper = styled.div<{ $image: string; $image2x: string }>`
  padding: 128px 0 136px;
  background-image: url(${({ $image }) => $image});
  background-repeat: no-repeat;
  background-position: calc(50% + 668px) center;
  background-size: 1426px 1023px;

  @media ${device.retina} {
    background-image: url(${({ $image, $image2x }) => $image2x || $image});
  }

  @media ${device.tablet} {
    padding: 128px 0 798px;
    background-position: 20% 120%;
  }

  @media ${device.tabletS} {
    padding: 88px 0 798px;
  }

  @media ${device.mobile} {
    padding: 48px 0 96vw;
    background-size: 150%;
    background-position: 43% bottom;
  }
`;

const StyledContactsItems = styled.div`
  display: grid;
  row-gap: 73px;

  .feature-item {
    max-width: 660px;
    gap: 16px;
    padding-left: 154px;

    &::before {
      width: 130px;
      height: 130px;
      background-size: auto 130px;

      @media ${device.mobile} {
        width: 87px;
        height: 87px;
        background-size: auto 87px;
      }
    }

    &.translate-oo::before {
      background-position-x: -566px;

      @media ${device.mobile} {
        background-position-x: -380px;
      }
    }

    &.test-oo::before {
      background-position-x: -732px;

      @media ${device.mobile} {
        background-position-x: -490px;
      }
    }

    &.document-00::before {
      background-position-x: -886px;

      @media ${device.mobile} {
        background-position-x: -592px;
      }
    }

    @media ${device.tablet} {
      max-width: 100%;
    }

    @media ${device.mobile} {
      gap: 8px;
      padding: 95px 0 0;
    }

    h5 {
      font-size: 24px;
      line-height: 133%;

      @media ${device.mobile} {
        font-size: 18px;
      }
    }

    p {
      font-size: 14px;
      line-height: 150%;

      @media ${device.mobile} {
        font-size: 13px;
      }
    }
  }

  @media ${device.tabletS} {
    row-gap: 64px;
  }

  @media ${device.mobile} {
    row-gap: 48px;
  }
`;

const StyledFeatureItemText = styled.span`
  display: block;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export {
  StyledContactsSection,
  StyledContactsWrapper,
  StyledContactsItems,
  StyledFeatureItemText,
};
