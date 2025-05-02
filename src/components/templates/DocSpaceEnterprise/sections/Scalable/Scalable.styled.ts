import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

const StyledScalable = styled(Section)`
  text-align: center;

  @media ${device.tablet} {
    width: 90vw;
    margin: 0 auto;
  }
`;

const StyledScalableHeading = styled(Heading)`
  letter-spacing: -0.02em;
  line-height: 1.33em;

  @media ${device.tabletS} {
    letter-spacing: -0.01em;
  }
`;

const StyledScalableTextWrapper = styled.div`
  max-width: 926px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
  padding: 32px 0 84px;
  text-align: center;

  @media ${device.tabletS} {
    padding-bottom: 58px;
  }

  @media ${device.mobile} {
    display: block;
    padding: 16px 0 32px;
  }
`;

const StyledScalableImgWrapper = styled.div`
  max-width: 736px;
  margin: 0 auto;

  @media ${device.tablet} {
    width: 90vw;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export {
  StyledScalable,
  StyledScalableHeading,
  StyledScalableTextWrapper,
  StyledScalableImgWrapper,
};
