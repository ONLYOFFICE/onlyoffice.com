import styled from "styled-components";
import { device } from "@src/utils/device";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  text-align: center;

  @media ${device.tabletS} {
    gap: 16px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-top: 48px;
  @media ${device.tabletS} {
    padding-top: 40px;
  }

  @media ${device.mobile} {
    gap: 32px;
    padding-top: 16px;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  gap: 16px;

  @media ${device.mobile} {
    align-items: center;
    text-align: center;
  }
`;

const InfoImg = styled.div<{ $positionX?: number }>`
  width: 40px;
  height: 40px;
  content: "";
  display: block;
  background-image: url("./images/templates/developer-edition/developing/dev-icons.svg");
  background-repeat: no-repeat;
  background-size: auto 40px;
  background-position: ${(props) => props.$positionX}px 50%;
`;

const GridWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 56px 40px;

  @media ${device.mobile} {
    gap: 24px 16px;
  }
`;

const Row = styled.div`
  display: grid;
  gap: 32px;

  &:first-child {
    grid-template-columns: 420px auto;
  }

  &:last-child {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.desktop} {
    &:first-child {
      grid-template-columns: 30vw auto;
    }
  }

  @media ${device.tabletS} {
    &:first-child {
      display: flex;
      flex-direction: column;
    }
  }

  @media ${device.mobile} {
    &:last-child {
      display: flex;
      flex-direction: column;
    }
  }
`;

const GridItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  gap: 10px;
`;

const LangImg = styled.div<{ $positionX: number; $width?: number }>`
  width: ${({ $width }) => ($width ? $width : 58)}px;
  content: "";
  display: block;
  height: 58px;
  background-image: url(${getAssetUrl('/images/templates/developer-edition/developing/lang-logos.svg')});
  background-repeat: no-repeat;
  background-size: auto 58px;
  background-position: ${(props) => props.$positionX}px 50%;
`;

const StyledText = styled(Text)`
  margin: 0 0 16px;
`;

export {
  Wrapper,
  InfoSection,
  GridWrapper,
  GridItem,
  Row,
  StyledContainer,
  LangImg,
  InfoImg,
  StyledText,
};
