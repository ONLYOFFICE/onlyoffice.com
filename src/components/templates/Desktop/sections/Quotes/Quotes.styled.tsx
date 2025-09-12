import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import styled from "styled-components";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
export const StyledSection = styled(Section)`
  text-align: center;
  background-image: url(${getAssetUrl('/images/templates/desktop/quotes/quotes.svg')});
  background-repeat: no-repeat;
  background-position: center 112px;
  background-size: 186px auto;

  @media ${device.tablet} {
    background-position: center 88px;
  }

  @media ${device.mobile} {
    background-position: center 48px;
  }
`;

export const StyledText = styled(Text)`
  font-size: 24px;
  line-height: 1.6em;
  font-style: italic;
  margin: 0 auto 32px;
  max-width: 855px;
  @media ${device.mobile} {
    font-size: 18px;
  margin: 0 auto 24px;
  }
`;

export const StyledLogo = styled.div<{ $image: string; }>`
  background-image: url("${(props) => props.$image}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  content: "";
  display: block;
  height: 26px;
  margin: 60px auto 15px;
  position: relative;
  width: 173px;
  z-index: 1;
`;
