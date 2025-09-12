import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHero = styled(Section)`
  background-color: #f5f5f5;
  margin-top: -72px;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledContainer = styled(Container)`
  box-sizing: border-box;
  display: grid;
  align-items: center;
  grid-template-columns: 353px 679px;
  margin: 0 auto;
  gap: 88px;
  width: 100%;
  max-width: 1200px;
  padding: 0 16px;

  @media ${device.desktop} {
    grid-template-columns: 353px 1fr;
    gap: 0px;
    width: calc(100% - 32px);
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  @media ${device.mobile} {
    gap: 48px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin: 0 auto;

  @media ${device.tabletS} {
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;

const StyledPageDescription = styled(Text)`
  font-size: 18px;
  line-height: 1.5em;
  padding: 24px 0;

  @media ${device.mobile} {
    font-size: 16px;
    padding: 16px 0;
    text-align: center;
  }
`;

const StyledImage = styled.div`
  aspect-ratio: 1.117;
  background-image: url(${getAssetUrl('/images/templates/home-use/hero/hero.svg')});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`;

export {
  StyledHero,
  StyledContainer,
  StyledWrapper,
  StyledPageDescription,
  StyledImage,
};
