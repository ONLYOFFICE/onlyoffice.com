import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";
import styled, { css } from "styled-components";

const StyledHero = styled(Section)`
  position: relative;
  background-color: #f8f9f9;
  background-image: url("/images/templates/docspace/hero/bg.svg");
  background-repeat: no-repeat;
  background-size: 3136px auto;
  background-position-y: -650px;
  background-position-x: 40%;
  margin-top: -72px;
  overflow-x: hidden;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    background-position-x: 30%;
    margin-top: -48px;
  }
`;

const StyledContainer = styled(Container)`
  max-width: 1120px;
  width: 100%;
  margin: auto;
  padding: 0;
  padding-bottom: 53px;

  @media ${device.desktop} {
    margin: 0 0 0 80px;
  }

  @media ${device.tablet} {
    margin: 0;
    padding: 0px;
  }
`;

const StyledHeading = styled(Heading)<{ $locale?: string }>`
  line-height: 1.33em;
  text-align: left;
  padding: 0 0 32px;
  max-width: ${({ $locale }) =>
    $locale === "de" || $locale === "it" || $locale === "ru" || $locale === "sr"
      ? "100%"
      : "950px"};

  @media ${device.tablet} {
    display: none;
  }
`;

const StyledMobileHeading = styled(Heading)`
  display: none;
  line-height: 1.33em;
  text-align: left;
  padding: 0 0 32px;

  @media ${device.tablet} {
    display: block;
    width: 50%;
  }

  @media ${device.tabletS} {
    padding: 0;
    width: 100%;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledAccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  max-width: 396px;
  text-align: left;

  @media ${device.tablet} {
    max-width: 100%;
  }

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  position: relative;
  padding: 0 0 42px;
  border-bottom: 1px solid #e5e5e5;
  font-weight: 400;

  @media ${device.tablet} {
    padding: 0 0 16px;
    border-bottom: none;
    max-width: 452px;
  }

  @media ${device.mobile} {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
  }
`;

const StyledListItem = styled.li`
  position: relative;
  padding-left: 30px;
  line-height: 1.5em;
  margin-bottom: 16px;
  &::before {
    content: "";
    position: absolute;
    left: 8px;
    top: 13px;
    transform: translateY(-50%) rotate(45deg);
    width: 6px;
    height: 6px;
    background-color: #ff6f3d;
  }

  @media ${device.mobile} {
    font-size: 14px;
    margin-bottom: 10px;
  }
`;

const StyledCreateAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 346px;
  gap: 12px;
  padding: 40px 0px;
  margin-right: 1px;
  border-bottom: 1px solid #e5e5e5;

  @media ${device.tablet} {
    border-bottom: none;
    max-width: 688px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr auto;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    gap: 0;
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px 0px;
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  gap: 52px;
  max-width: 1120px;

  @media ${device.tablet} {
    flex-direction: column;
    gap: 82px;
    margin: 0 auto;
    max-width: calc(100% - 96px);
  }

  @media ${device.mobile} {
    display: flex;
    gap: 48px;
    flex-direction: column;
    max-width: calc(100% - 32px);
  }
`;

const StyledMobileContainer = styled.div`
  @media ${device.tablet} {
    display: flex;
    gap: 24px;
  }

  @media ${device.tabletS} {
    flex-direction: column;
  }
`;

const StyledHeroImg = styled.div<{ $imgUrl: string; $imgUrl2x: string }>`
  margin: 0 auto;
  padding-bottom: 51.786%;
  max-width: 1047px;
  background-image: url(${(props) => props.$imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;

  ${(props) =>
    props.$imgUrl2x &&
    css`
      @media ${device.retina} {
        background-image: url(${props.$imgUrl2x});
      }
    `}
`;

export {
  StyledHero,
  StyledContainer,
  StyledHeading,
  StyledAccountContainer,
  StyledWrapper,
  StyledList,
  StyledListItem,
  StyledCreateAccountWrapper,
  StyledContentWrapper,
  StyledMobileHeading,
  StyledMobileContainer,
  StyledHeroImg,
};
