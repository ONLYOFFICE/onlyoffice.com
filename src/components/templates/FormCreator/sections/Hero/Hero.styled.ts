import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #f5f5f5;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const wrapperSpacing = ({ $hasMedia }: { $hasMedia?: boolean }) => css`
  margin-bottom: ${$hasMedia ? "48px" : "0"};
  @media ${device.tabletS} {
    margin-bottom: ${$hasMedia ? "80px" : "0"};
  }
  @media ${device.mobile} {
    margin-bottom: ${$hasMedia ? "48px" : "0"};
  }
`;

const StyledHeroWrapper = styled.div<{ $hasMedia?: boolean }>`
  display: grid;
  justify-items: center;
  row-gap: 32px;
  margin: 0 auto;
  max-width: 928px;
  text-align: center;

  @media ${device.tabletS} {
    row-gap: 24px;
  }

  @media ${device.mobile} {
    row-gap: 16px;
  }

  ${wrapperSpacing}
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
const StyledHeroInput = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 7px 15px rgba(85, 85, 85, 0.1);
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: center;
  align-items: center;
  max-width: 702px;
  padding: 32px;
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

export { StyledHero, StyledHeroWrapper, StyledHeroVideo, StyledHeroInput };
