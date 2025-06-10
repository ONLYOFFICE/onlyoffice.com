import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Container } from "@src/components/ui/Container";

const StyledCollabSection = styled(Section)<{
  $backgroundUrl: string;
  $backgroundUrl2x: string;
}>`
  background-image: ${(props) => `url(${props.$backgroundUrl})`};
  background-color: #f5f5f5;
  background-repeat: no-repeat;
  background-position-y: calc(100% + 175px);
  background-position-x: calc(50% + 365px);
  background-size: auto 830px;
  min-height: 750px;

  @media ${device.retina} {
    background-image: ${(props) => `url(${props.$backgroundUrl2x})`};
  }

  @media ${device.tablet} {
    background-image: none;
    min-height: auto;
  }
`;

const StyledCollabWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 0;
    overflow: hidden;
  }
`;

const StyledCollabLeft = styled.div`
  margin-top: 110px;
  width: 270px;

  @media ${device.tablet} {
    width: auto;
    max-width: 600px;
    justify-items: center;
    margin-top: 0;
  }
`;

const StyledCollabHeading = styled(Heading)`
  margin-bottom: 20px;
  line-height: 43px;

  @media ${device.tablet} {
    text-align: center;
  }

  @media ${device.tabletS} {
    font-size: 32px;
    margin-bottom: 16px;
  }

  @media ${device.mobile} {
    font-size: 24px;
    line-height: 1.5em;
  }
`;
const StyledCollabText = styled(Text)`

  @media ${device.tablet} {
    text-align: center;
  }

  @media ${device.tabletS} {
    margin-bottom: 56px;
  }

  @media ${device.mobileS} {
    font-size: 14px;
  }
`;

const StyledCollabRight = styled.div<{
  $backgroundUrl: string;
  $backgroundUrl2x: string;
}>`
  display: none;
  background-image: ${(props) => `url(${props.$backgroundUrl})`};
  background-size: auto 51.78vw;
  background-repeat: no-repeat;

  @media ${device.retina} {
    background-image: ${(props) => `url(${props.$backgroundUrl2x})`};
  }

  @media ${device.tablet} {
    display: block;
    width: 108vw;
    height: 54.82vw;
    background-size: cover;
    flex-grow: 1;
    background-position-x: calc(50% + 2vw);
    background-position-y: calc(100% + 17vw);
  }
`;

export {
  StyledCollabWrapper,
  StyledCollabLeft,
  StyledCollabHeading,
  StyledCollabText,
  StyledCollabRight,
  StyledCollabSection,
};
