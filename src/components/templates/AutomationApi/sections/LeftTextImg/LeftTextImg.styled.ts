import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledLeftTextImgSection = styled(Section)`
  background-color: #333333;
`;

const StyledLeftTextImgWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 545px;
  gap: 32px;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }
`;

const StyledLeftTextImgHeading = styled(Heading)`
  margin-bottom: 16px;
  color: #fff;
`;

const StyledLeftTextImgText = styled(Text)`
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 150%;
  color: #f5f5f5;

  @media ${device.mobile} {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledLeftTextImgImage = styled.div`
  background-image: url("/images/templates/automation-api/lefttextimg/docs_developer.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding-bottom: 70.6%;

  @media ${device.tabletS} {
    max-width: 544px;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 55.815%;
  }

  @media ${device.mobile} {
    padding-bottom: 70.6%;
  }
`;

const StyledLeftTextImgTextAfter = styled(Text)`
    font-size: 16px;
    line-height: 150%;
    color: #f5f5f5;
    padding-bottom: 32px;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 21px;
  }
`;

export {
  StyledLeftTextImgSection,
  StyledLeftTextImgWrapper,
  StyledLeftTextImgHeading,
  StyledLeftTextImgText,
  StyledLeftTextImgImage,
  StyledLeftTextImgTextAfter,
};
