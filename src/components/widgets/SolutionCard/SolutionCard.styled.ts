import styled, { css } from "styled-components";
import { ISolutionCard } from "./SolutionCard.types";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

const StyledSolutionCard = styled.div<{
  $large?: ISolutionCard["large"];
}>`
  display: flex;
  flex-direction: column;
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
          padding-bottom: 82.898%;
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
  display: flex;
  flex-direction: column;
  height: 100%;
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

const StyledSolutionCardHeading = styled(Heading)`
  font-size: 22px;
  line-height: 30px;

  @media ${device.mobile} {
    font-size: 18px;
    line-height: 24px;
  }
`;

const StyledSolutionCardLink = styled(Link)`
  margin-top: auto;
`;

const StyledSolutionCardCustomLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: auto;

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
  StyledSolutionCardHeading,
  StyledSolutionCardLink,
  StyledSolutionCardCustomLinks,
};
