import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledHero = styled(Section) <{ $imgUrl?: string }>`  
  margin-top: -72px;
  padding-top: 72px;
  min-height: 400px;
  background-image: ${props => props.$imgUrl ? `url(${props.$imgUrl})` : 'none'};
  background-repeat: no-repeat;
  background-position: center 90px;
  background-size: 1040px;

  .container {
    margin: auto;
    padding: 182px 0 322px;
    background-image: url("/images/templates/events/hero/bg_events-01.png");
    background-repeat: no-repeat;
    background-position: 100% 45%;
    background-size: 60%;

    .heading {
      margin: 0;
      padding: 0;
      line-height: 133%;
      letter-spacing: -0.02em;
      color: #333333;
      text-align: left;
      max-width: 449px;
    }
  }

  @media ${device.desktop} {
    .container {
      padding-left: 48px;
        padding-right: 48px;
        background-position: 95% 45%;
        background-size: 60%;
    }
  }

  @media ${device.tablet} {
    .container {
      padding-left: 48px;
      padding-right: 48px;
      background-position: 95% 45%;
      background-size: 60%;
    }
  }

  @media screen and (max-width: 989px) {
    background-position: center 68%;
    background-size: 100%;

  .container {
      background-position: 50% 65%;
      background-size: 60%;
      padding: 88px 0 67vw;

      .heading {
          font-size: 30px;
          text-align: center;
          margin: auto;
          max-width: 470px;
      }
  }
  @media ${device.mobile}{
  padding: 48px 0 0;
  background-position: center 95%;
  }
  @media screen and (max-width: 425px) {
  .container {
      padding: 48px 0 235px;

      .heading {
          font-size: 24px;
          letter-spacing: -0.01em;
          padding: 0 16px;
      }
  }
}


`;

const StyledHeroWrapper = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 32px;
  margin: 0 auto;
  max-width: 928px;
  text-align: center;

  
  @media ${device.tabletS} {
    row-gap: 24px;
    padding: 32px 0;
  }

  @media ${device.mobile} {
    row-gap: 16px;
    padding: 24px 0;
  }
`;




export { StyledHero, StyledHeroWrapper };
