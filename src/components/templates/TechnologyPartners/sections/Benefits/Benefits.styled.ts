import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledContainer = styled(Container)`
  text-align: center;
`;

const StyledHeading = styled(Heading)`
  font-size: 32px;
  letter-spacing: -0.02em;
  line-height: 1.33em;
  width: auto;

  @media ${device.mobile} {
    font-size: 24px;
    letter-spacing: -0.01em;
  }
`;

const BlockCardWrapper = styled.div`
  display: grid;
  margin-top: 56px;
  margin-bottom: 40px;
  gap: 32px;
  grid-template-columns: repeat(3, 1fr);

  @media ${device.tabletS} {
    grid-template-columns: repeat(2, 1fr);
    width: calc(100vw - 80px);
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    margin-top: 24px;
    margin-bottom: 32px;
    row-gap: 24px;
    width: calc(100vw - 32px);
  }
`;

const BlockCard = styled.div`
  display: block;
  max-width: 352px;
  position: relative;
  width: 28vw;

  &:nth-child(2) .block_card_bg::before {
    background-position: -520px 0;
  }

  &:nth-child(3) .block_card_bg::before {
    background-position: -625px 0;
  }

  &:nth-child(4) .block_card_bg::before {
    background-position: -727px 0;
  }

  &:nth-child(5) .block_card_bg::before {
    background-position: -831px 0;
  }

  &:nth-child(6) .block_card_bg::before {
    background-position: -936px 0;
  }

  @media ${device.tabletS} {
    width: 100%;
  }

  @media ${device.mobile} {
    max-width: initial;
  }
`;

const BlockCardBg = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #efefef;
  border-radius: 6px;
  box-sizing: border-box;
  height: 120px;
  margin-bottom: 16px;
  width: 100%;

  &::before {
    background-image: url(${getAssetUrl('/images/templates/technology-partners/features/tech-in-icons.svg')});
    background-position: -417px 0;
    background-repeat: no-repeat;
    content: "";
    display: block;
    height: 64px;
    left: calc(50% - 32px);
    position: absolute;
    top: 28px;
    width: 64px;
  }
`;

const BlockCardText = styled(Text)`
  font-size: 18px;
  line-height: 1.6em;
  text-align: center;

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

export {
  StyledContainer,
  BlockCardWrapper,
  StyledHeading,
  BlockCard,
  BlockCardBg,
  BlockCardText,
};
