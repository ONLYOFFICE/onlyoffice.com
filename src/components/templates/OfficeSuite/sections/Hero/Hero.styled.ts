import { styled } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #f9f9f9;
  background-image: url(/images/templates/office-suite/cloud-bg.svg);
  background-position: calc(50% + 364px) 219px;
  background-repeat: no-repeat;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    background-position: -100px 219px;
  }

  @media ${device.mobile} {
    background-position: -140px 64px;
    background-size: 1235px 709px;
  }
`;

const StyledHeroWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto 64px;
  max-width: 1120px;
  text-align: center;
  flex-direction: column;
  gap: 32px;

  @media ${device.mobile} {
    gap: 24px;
    margin: 0 auto 48px;
  }
`;

const StyledHeroVideo = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    border: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledHeroHeaderBtns = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media ${device.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;

const StyledHeading = styled(Heading)`
  max-width: 928px;
  margin: 0 auto;
`;

const StyledHeroInput = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 7px 15px rgba(85, 85, 85, 0.1);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: center;
  align-items: center;
  max-width: 702px;
  padding: 32px 96px;
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

export {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroHeaderBtns,
  StyledHeroVideo,
  StyledHeading,
  StyledHeroInput,
};
