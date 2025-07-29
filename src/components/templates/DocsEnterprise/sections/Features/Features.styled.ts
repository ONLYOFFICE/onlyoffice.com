import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";

const StyledFeatureImageItem = styled(FeatureImageItem)`
justify-content: space-between;
`;

const StyledFeaturesHero = styled(Section)`
  margin: 0 auto;
  text-align: center;
  color: #ffffff;
`;

const StyledFeaturesWrapper = styled.div`
  display: grid;
  row-gap: 72px;
  text-align: left;
  padding: 72px 0 0;

  h3 {
    color: #ffffff;
  }

  p {
    display: block;
    padding: 24px 0 0;
    
  }

  @media ${device.tabletS} {
    row-gap: 40px;
    padding: 64px 0 0;
  }

  @media ${device.mobile} {
    row-gap: 32px;
    padding: 32px 0 0;
  }
`;



export {
  StyledFeaturesHero,
  StyledFeaturesWrapper,
  StyledFeatureImageItem
};