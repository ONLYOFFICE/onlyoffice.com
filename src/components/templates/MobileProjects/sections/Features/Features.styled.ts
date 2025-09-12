import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Heading } from "@src/components/ui/Heading";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledList = styled.ul`
  list-style: none;
  padding: 32px 0 40px;
`;

const StyledItem = styled.li`
  display: grid;
  grid-template-columns: 48px auto;
  align-items: center;
  gap: 24px;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledText = styled(Text)`
  font-size: 18px;

  @media ${device.tablet} {
    font-size: 18px;
  }
  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const StyledImageContent = styled.div<{ $imgUrl: string; $imgUrl2x: string }>`
  aspect-ratio: 0.85;
  background-image: url(${(props) => props.$imgUrl});
  background-size: cover;
  background-position: center;
  max-width: 612px;
  height: auto;
  width: 100%;

  ${(props) =>
    props.$imgUrl2x &&
    css`
      @media ${device.retina} {
        background-image: url(${props.$imgUrl2x});
      }
    `}

  @media ${device.tablet} {
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
  }
`;

const StyledIcon = styled.div<{ $positionX: string }>`
  background-image: url(${getAssetUrl('/images/templates/mobile-projects/features/icons.svg')});
  background-size: 432px 48px;
  width: 48px;
  height: 48px;
  background-position: ${(props) => props.$positionX} center;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  @media ${device.tablet} {
    align-items: start;
    flex-direction: column;
    gap: 80px;
  }

  @media ${device.mobile} {
    gap: 48px;
  }
`;

const StyledHeading = styled(Heading)`
  max-width: 340px;

  @media ${device.tablet} {
    max-width: 100%;
  }
`;

export {
  StyledImageContent,
  StyledList,
  StyledItem,
  StyledIcon,
  StyledContainer,
  StyledText,
  StyledHeading,
};
