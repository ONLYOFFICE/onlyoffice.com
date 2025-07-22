import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";

const HeroBackground = styled(Section)`
  background-image:
    url("/images/templates/installation-success-docs-cloud/hero/dots.png"),
    url("/images/templates/installation-success-docs-cloud/hero/bg.svg");
  background-repeat: no-repeat, no-repeat;
  background-position:
    center 72px,
    center top;
  background-size:
    1488px auto,
    3636px auto;
  margin-top: -72px;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
  @media ${device.mobile} {
  }
`;

const HeadingIcon = styled.div`
  display: block;
  background-image: url("/images/templates/installation-success-docs-cloud/hero/success-logo.svg");
  background-repeat: no-repeat;
  background-size: 48px;
  content: "";
  height: 48px;
  margin: 0 auto;
  width: 48px;
`;

const HeroWrapper = styled(Container)`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 24px;

  @media ${device.mobile} {
    gap: 16px;
  }
`;

const HeroSubtitle = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.5em;

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const StepsWrapper = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 6px;
  margin: 72px auto 0;
  padding: 48px;
  position: relative;
  display: grid;
  grid-template-columns: 286px 1fr;
  grid-column-gap: 32px;
  text-align: left;
  width: 100%;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.tabletS} {
    padding: 48px 40px;
    margin: 64px auto 0;
  }
  @media ${device.mobile} {
    grid-template-columns: 1fr;
    margin: 32px auto 0;
    padding: 48px 16px;
    grid-row-gap: 32px;
  }
`;

const StepsImage = styled.div`
  aspect-ratio: 1.113;
  background-image: url("/images/templates/installation-success-docs-cloud/hero/letter.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 286px;

  @media ${device.tablet} {
    width: 100%;
  }
  @media ${device.mobile} {
    margin: 0 auto;
    width: 50%;
  }
`;

const Steps = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  flex-direction: column;
`;

const StepCard = styled.div`
  text-align: left;
`;

const StepNumber = styled.div`
  align-items: center;
  background: linear-gradient(136.1deg, #ff8e3d -1.99%, #ff6f3d 100%);
  border: 1px solid #333333;
  border-radius: 50px;
  color: #ffffff;
  display: flex;
  font-weight: 700;
  justify-content: center;
  height: 30px;
  width: 30px;
`;

const StepContent = styled.ul`
  padding-left: 64px;
`;

const JWTNote = styled(Text)`
  font-size: 13px;
  color: #666666;
  margin-top: 16px;
  text-align: left;
`;

const StepHeader = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  align-items: start;
  gap: 8px;
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StepContentText = styled.li`
  font-size: 14px;
  font-weight: 700;
  line-height: 1.33em;

  &:before {
    background: url("/images/templates/installation-success-docs-cloud/hero/tick.svg");
    background-repeat: no-repeat;
    border: none;
    border-radius: unset;
    display: block;
    content: "";
    width: 12px;
    height: 10px;
    left: -20px;
    top: 16px;
    position: relative;
  }
  @media ${device.mobile} {
    font-size: 13px;
  }
`;

export {
  JWTNote,
  HeroBackground,
  HeroWrapper,
  HeroSubtitle,
  StepsWrapper,
  Steps,
  StepCard,
  StepNumber,
  StepContent,
  HeadingIcon,
  StepsImage,
  StepHeader,
  StepContentText,
};
