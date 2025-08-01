import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";

const StyledSection = styled(Section)`
  border-bottom: 1px solid #efefef;
  background: #f4f5f6;
`;

const StyledFeatureImageItem = styled(FeatureImageItem)`
  background-image: url("/images/templates/docspace/ai/bg.svg");
  background-position: calc(50% + 400px) bottom;
  background-repeat: no-repeat;
  background-size: 640px 640px;
  justify-content: center;
  padding: 100px 0;

  > div > div {
    row-gap: 24px;
    > h3 {
      font-size: 32px;
      line-height: 1.33em;
      @media ${device.tabletS} {
        font-size: 30px;
      }
      @media ${device.tabletS} {
        font-size: 24px;
      }
    }
    > div {
      font-size: 18px;
      line-height: 1.5em;
      @media ${device.tabletS} {
        font-size: 16px;
      }
    }
  }

  @media ${device.desktop} {
    background-position: calc(50% + 200px) bottom;
    padding: 100px 80px;
  }

  @media ${device.tablet} {
    padding: 100px 48px;
  }
  @media ${device.tabletS} {
    background-position: right bottom;
    padding: 80px 48px;
  }
  @media ${device.mobile} {
    background-size: 330px 330px;
    background-position: right bottom;
    padding: 48px 16px;
  }
`;

export { StyledSection, StyledFeatureImageItem };
