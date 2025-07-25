import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

const StyledText = styled(Text)`
  font-size: 18px;
  line-height: 1.6em;
  max-width: 928px;
  margin: 32px auto 56px;

  @media (max-width: ${device.mobile}) {
    font-size: 16px;
    padding: 0 20px;
  }
`;

const LogoRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 40px;
`;

const Logo = styled.div<{ $positionX?: string; $width: number }>`
  content: "";
  background-image: url("/images/templates/desktop/logos/connectors-desktop-logos.svg");
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: ${(props) => props.$positionX};
  height: 48px;
  object-fit: contain;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
  width: ${(props) => props.$width}px;

  &:hover {
    filter: grayscale(0%);
  }

  @media (max-width: ${device.mobile}) {
    height: 20px;
  }
`;

const StyledImage = styled.div<{ $image: string; $image2x: string }>`
  aspect-ratio: 2.091;
  background-image: url("${(props) => props.$image}");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  content: "";
  ${(props) =>
    props.$image2x &&
    css`
      @media ${device.retina} {
        background-image: url(${props.$image2x});
      }
    `}
`;

const StyledContainer = styled(Container)`
  text-align: center;
`;

export {
  StyledText,
  LogoRow,
  Logo,
  StyledImage,
  StyledContainer,

}