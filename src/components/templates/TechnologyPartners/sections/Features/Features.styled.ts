import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

const StyledFeaturesHeader = styled.div`
  display: grid;
  row-gap: 24px;
  margin: 0 auto 72px;
  max-width: 928px;
  text-align: center;
  position: relative;

    &::before {
        background-image: url("/images/templates/technology-partners/heading-icons/tech-h-icons.svg");
        background-position: -4px -4px;
        content: "";
        height: 56px;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        top: -64px;
        width: 56px;

    }

  @media ${device.mobile} {
    margin: 0 auto 40px;
    row-gap: 16px;
  }
`;

const StyledFeaturesText = styled(Text)`
  @media ${device.tabletS} {
    font-size: 16px;
    text-align: center;
  }
`;

const StyledFeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 40px;
  row-gap: 64px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledFeatureItem = styled.div`
  padding-left: 96px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    background-image: url("/images/templates/technology-partners/features/tech-in-icons.svg");
    background-position: 0 0;
    top: 0;
    left: 0;
    height: 64px;
    width: 64px;
  }

  &:nth-child(2)::before {
    background-position: 895px 0;
  }

  &:nth-child(3)::before {
    background-position: -208px 0;
  }

  &:nth-child(4)::before {
    background-position: -312px 0;
  }

  @media ${device.tabletS} {
    padding-left: 0;
    padding-top: 80px;
  }
`;

const StyledFeaturesHeading = styled(Heading)`
  font-size: 18px;
  line-height: 1.6em;
  letter-spacing: 0;
  margin-bottom: 16px;

  @media ${device.mobileS} {
    font-size: 16px;
  }
`;

const StyledText = styled(Text)`
  font-size: 16px;
  line-height: 1.6em;
  margin-bottom: 16px;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  margin-bottom: 24px;

  &:hover {
    text-decoration: none;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 1.6em;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;

  @media ${device.tabletS} {
    flex-wrap: wrap;
  }

  @media ${device.mobile} {
    gap: 6px;
    flex-wrap: nowrap;
  }

  @media ${device.mobileS} {
    .btn-primary {
      padding: 16px;
    }
    .btn-tertiary {
      max-width: 138px;
    }
  }
`;

export {
  StyledFeaturesHeader,
  StyledFeatureItem,
  StyledFeaturesHeading,
  StyledFeaturesText,
  StyledText,
  StyledLink,
  StyledFeaturesList,
  FeatureItem,
  ButtonGroup,
};
