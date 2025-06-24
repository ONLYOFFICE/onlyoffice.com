import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { IFeaturesItem } from "../../About.types";

const StyledFeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 130px;
`;

const StyledFeatruesTextWrapper = styled.div`
  width: 544px;
`;

const StyledFeaturesItem = styled.li<{
  $image: IFeaturesItem["image"];
}>`
  position: relative;

  &:nth-child(1) {
    padding: 0 570px 0 0;

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
    }
  }

  &:nth-child(2) {
    padding: 0 0 0 620px;

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
    }
  }

  &:nth-child(3) {
    padding: 0 570px 0 0;

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
    }
  }
`;

const StyledFeaturesHeading = styled(Heading)`
  margin-bottom: 32px;
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