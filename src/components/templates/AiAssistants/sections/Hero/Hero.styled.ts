import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledHeroSection = styled(Section)`
  margin-top: -72px;
  background-image: url("/images/templates/ai-assistants/hero/hero_bg.svg");
  background-repeat: no-repeat;
  background-position: center -56px;
  /* background-size: cover; */

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  justify-items: center;

  @media ${device.tabletS} {
    gap: 48px;
  }
`;

const StyledHeroHeading = styled(Heading)<{ $locale?: string }>`
  margin-bottom: 48px;

  span {
    display: ${({ $locale }) => ($locale === "de" ? "inline-block" : "inline")};
  }

  @media ${device.tabletS} {
    font-size: 36px;
    margin-bottom: 0;
  }

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

const StyledHeroInput = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 7px 15px rgba(85, 85, 85, 0.1);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: center;
  align-items: center;
  max-width: 706px;
  padding: 32px 64px;
  width: 100%;

  .input-wrapper {
    border-radius: 9px 0px 0px 9px;
  }
  > a {
    border-radius: 0px 9px 9px 0px;
  }

  @media ${device.tabletS} {
    padding: 32px;
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    gap: 16px;

    > div {
      width: 100%;
    }
    .input-wrapper {
      border-radius: 9px;
    }
    > a {
      border-radius: 9px;
    }
  }
`;

const StyledHeroImage = styled.div<{ $image?: string; $image2x?: string }>`
  padding-bottom: 68%;
  width: 100%;
  background-image: url(${({ $image }) => $image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media ${device.retina} {
    background-image: url(${({ $image, $image2x }) => $image2x || $image});
  }
`;

export {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroHeading,
  StyledHeroInput,
  StyledHeroImage,
};
