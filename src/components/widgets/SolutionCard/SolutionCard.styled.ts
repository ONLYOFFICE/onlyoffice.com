import styled, { css } from "styled-components";
import { ISolutionCard } from "./SolutionCard.types";
import { device } from "@src/utils/device";

const StyledSolutionCard = styled.div<{
  $large?: ISolutionCard["large"];
}>`
  width: 100%;
  max-width: ${(props) => (props.$large ? "544px" : "352px")};
  text-align: center;

  @media ${device.tabletS} {
    max-width: 100%;
  }
`;

const StyledSolutionCardImgWrapper = styled.div<{
  $large?: ISolutionCard["large"];
}>`
  border-radius: 6px;
  background-color: #f3f4f4;

  ${(props) =>
    props.$large
      ? css`
          padding: 35px 24px;

          @media ${device.tabletS} {
            padding: 45px 24px;
          }

          @media ${device.mobile} {
            padding: 14px;
          }
        `
      : css`
          padding: 24px;

          @media ${device.tabletS} {
            padding: 14px 12px;
          }
        `}
`;

const StyledSolutionCardImg = styled.div<{
  $large?: ISolutionCard["large"];
  $imgUrl: ISolutionCard["imgUrl"];
}>`
  margin: 0 auto;
  width: 100%;
  background-image: ${(props) => `url(${props.$imgUrl})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  ${(props) =>
    props.$large
      ? css`
          max-width: 360px;
          height: 200px;

          @media ${device.tablet} {
            padding-bottom: 51.443%;
            height: initial;
          }

          @media ${device.tabletS} {
            padding-bottom: initial;
            max-width: 330px;
            height: 180px;
          }

          @media ${device.mobile} {
            height: 115px;
          }
        `
      : css`
          padding-bottom: 80.267%;
          max-width: 304px;

          @media ${device.tabletS} {
            padding-bottom: initial;
            max-width: 264px;
            height: 212px;
          }
        `}
`;

const StyledSolutionCardBody = styled.div<{
  $customLinks?: ISolutionCard["customLinks"];
}>`
  display: grid;
  row-gap: 16px;
  padding: 32px 16px;

  @media ${device.tabletS} {
    padding: 32px 16px 0 16px;
  }

  @media ${device.mobile} {
    row-gap: ${(props) => (props.$customLinks ? "24px" : "12px")};
    padding: ${(props) =>
      props.$customLinks ? "24px 12px 0 12px" : "24px 12px"};
  }
`;

const StyledSolutionCardText = styled.div`
  font-size: 16px;
  line-height: 24px;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledSolutionCardCustomLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

export {
  StyledSolutionCard,
  StyledSolutionCardImgWrapper,
  StyledSolutionCardImg,
  StyledSolutionCardBody,
  StyledSolutionCardText,
  StyledSolutionCardCustomLinks,
};
