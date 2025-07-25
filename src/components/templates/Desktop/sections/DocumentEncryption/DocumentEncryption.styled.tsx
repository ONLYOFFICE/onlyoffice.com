import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { Heading } from "@src/components/ui/Heading";

const StyledSection = styled(Section)<{ $image: string; $image2x: string }>`
  background-image: url("${(props) => props.$image}");
  background-size: 1180px auto;
  background-position: center bottom;
  background-repeat: no-repeat;
  text-align: center;

  ${(props) =>
    props.$image2x &&
    css`
      @media ${device.retina} {
        background-image: url(${props.$image2x});
      }
    `}

  @media ${device.tablet} {
    background-size: contain;
  }
`;

const StyledTitle = styled(Heading)`
  font-size: 28px;
  line-height: 1.4;
  font-weight: 700;
  margin-bottom: 24px;

  @media ${device.mobile} {
    font-size: 22px;
  }
`;

const StyledText = styled(Text)`
  font-size: 18px;
  line-height: 1.6em;
  max-width: 720px;
  margin: 0 auto;
  padding-bottom: 460px;

  @media ${device.tablet} {
    padding-bottom: 36vw;
  }

  @media ${device.mobile} {
    font-size: 16px;
    padding-bottom: 42vw;
  }
`;


export { StyledSection, StyledTitle, StyledText };
