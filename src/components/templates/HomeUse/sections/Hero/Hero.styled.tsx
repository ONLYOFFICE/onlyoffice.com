import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledHero = styled(Section)`
  background-color: #f5f5f5;
  @media ${device.mobile} {
    padding: 0;
  }
`;

const StyledContainer = styled(Container)`
  box-sizing: border-box;
  display: grid;
  align-items: center;
  grid-template-columns: 353px 679px;
  margin: 0 auto;
  gap: 89px;
  width: 100%;
  max-width: 1200px;
  padding: 0 16px;

  @media ${device.tablet} {
    padding: 0px 40px;
    grid-template-columns: 1fr;
    gap: 30px;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 48px;
    padding: 56px 16px 54px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin: 0 auto;

  @media ${device.tablet} {
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media ${device.mobile} {
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
  }

  > a {
    width: fit-content;
  }
`;

const StyledPageTitle = styled(Heading)`
  max-width: 353px;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.33em;
  @media ${device.mobile} {
    text-align: center;
    font-size: 30px;
  }
`;

const StyledPageDescription = styled(Text)`
  max-width: 353px;
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
  background-image: url(/images/templates/home-use/hero/hero.svg);
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 679px;
  height: 567px;

  @media (max-width: 1280px) {
    width: 100%;
    height: 400px;
  }
  @media ${device.tablet} {
    margin: 0 auto;
  }
  @media ${device.mobile} {
    width: 100%;
    height: 55vw;
  }
`;

export {
  StyledHero,
  StyledContainer,
  StyledWrapper,
  StyledPageTitle,
  StyledPageDescription,
  StyledImage,
};
