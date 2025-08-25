import styled from "styled-components";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";

const StyledContainer = styled(Container)`
  max-width: 100%;
  padding: 0;
`;

const StyledHeading = styled(Heading)`
  padding: 0 40px;
  @media ${device.mobile} {
    padding: 0 16px;
  }
`;

const StyledPlatformItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
  }
  > div {
    background-color: #f9f9f9;
    border: 1px solid #efefef;
    position: relative;
    &:first-child,
    &:last-child {
      background-color: #f5f5f5;
    }
    @media ${device.mobile} {
      display: flex;
      flex-direction: column;
      row-gap: 34px;
    }
  }
`;

const StyledText = styled(Text)`
  padding: 32px 40px 56px;
  @media ${device.tabletS} {
    padding: 16px 16px 56px;
  }
  @media ${device.mobile} {
    padding: 16px 16px 32px;
  }
`;

const PlatformItem = styled.div<{ $height: number }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;
  padding: 80px 0 ${(props) => props.$height}px;
  max-width: 592px;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 1400px) {
    padding: 80px 0 30vw;
  }
  @media ${device.tabletS} {
    padding: 56px 16px 30vw;
  }
  @media ${device.mobile} {
    padding: 56px 16px 0;
  }
`;

const PlatformImage = styled.div<{
  $image: string;
  $image2x: string;
  $width: number;
  $height: number;
}>`
  width: ${(props) => props.$width}px;
  aspect-ratio: ${(props) => props.$width / props.$height};
  background-image: url(${(props) => props.$image});
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  margin: 24px auto 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  
  @media ${device.retina} {
    background-image: url(${(props) => props.$image2x});
  }

  @media (max-width: 1400px) {
    width: 100%;
  }
  @media ${device.mobile} {
    margin: 0 auto;
    position: initial;
  }
`;

export {
  StyledPlatformItems,
  StyledText,
  PlatformItem,
  PlatformImage,
  StyledContainer,
  StyledHeading,
};
