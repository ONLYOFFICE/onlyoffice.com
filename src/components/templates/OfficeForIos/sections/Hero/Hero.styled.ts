import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";

const StyledHeroSection = styled(Section)`
  margin-top: -72px;
`;

const StyledHeroWrapper = styled.div`
  position: relative;
`;

const StyledHeroLeft = styled.div`
  max-width: 500px;
`;

const StyledHeroLeftHeading = styled(Heading)`
  position: relative;
  z-index: 10;
  margin-top: 90px;

  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 189px;
    height: 155px;
    left: -100px;
    top: -120px;
    background-image: url("/images/templates/office-for-ios/hero/heading.svg");
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

const StyledHeroLeftButton = styled(Button)`
  display: block;
  width: 170px;
  height: 58px;
  margin-top: 40px;
  background-image: url("/images/templates/office-for-ios/hero/app-store_btn.svg");
  background-repeat: no-repeat;
  background-size: contain;
`;

const StyledHeroLeftText = styled(Text)`
  margin-top: 30px;
`;

const StyledHeroLeftImgWrapper = styled.div`
  width: 498px;
  height: 498px;
  position: relative;
`;

const StyledHeroLeftImg = styled.div`
  width: 498px;
  height: 498px;
  background-image: url("/images/templates/office-for-ios/hero/hero_phone.webp");
  background-repeat: no-repeat;
  background-size: 498px auto;
  position: absolute;
  top: 0;
  left: -300px;
  z-index: 1;

  &::before {
    content: "";
    display: block;
    width: 131px;
    height: 131px;
    background-image: url("/images/templates/office-for-ios/hero/triangle_top.svg");
    background-repeat: no-repeat;
    position: absolute;
    top: 81px;
    right: 126px;
    z-index: 0;
  }

  &::after {
    content: "";
    display: block;
    width: 131px;
    height: 131px;
    background-image: url("/images/templates/office-for-ios/hero/triangle_bottom.svg");
    background-repeat: no-repeat;
    position: absolute;
    left: 41px;
    bottom: 92px;
    z-index: 0;
  }
`;

const StyledHeroRight = styled.div`
  background-image: url("/images/templates/office-for-ios/hero/hero_laptop.webp");
  background-repeat: no-repeat;
  background-size: 786px auto;
  width: 800px;
  height: 640px;
  position: absolute;
  top: -115px;
  right: calc(-50% - 130px);
  transform: translateX(-50%);
`;

export {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroLeft,
  StyledHeroLeftHeading,
  StyledHeroLeftButton,
  StyledHeroLeftText,
  StyledHeroLeftImgWrapper,
  StyledHeroLeftImg,
  StyledHeroRight,
};
