import styled from "styled-components";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";

const StyledLearnMoreItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;

  .blog-card {
    @media ${device.tablet} {
      max-width: 352px;
      min-width: 352px;
    }

    @media ${device.mobile} {
      max-width: 272px;
      min-width: 272px;
    }
  }

  @media ${device.tablet} {
    margin: 0 -40px -32px;
    padding: 0 40px 32px;
    overflow-x: auto;
  }

  @media ${device.mobile} {
    column-gap: 16px;
    margin: 0 -16px -32px;
    padding: 0 16px 32px;
  }
`;

const StyledLearnMoreLogos = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  margin-top: 96px;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    gap: 39px 32px;
    padding: 0;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`;

const StyledLearnMoreLogo = styled(Link)`
  height: 110px;
  background-image: url("/images/templates/resellers/learn-more/logos.jpg");
  background-repeat: no-repeat;

  &.converged-open-systems {
    width: 110px;
    background-position-x: -24px;
  }

  &.edissyum {
    width: 220px;
    background-position-x: -240px;
  }

  &.shanghai-xuanyi {
    width: 220px;
    background-position-x: -556px;
  }

  &.kayreach-system {
    width: 220px;
    background-position-x: -877px;
  }
`;

export { StyledLearnMoreItems, StyledLearnMoreLogos, StyledLearnMoreLogo };
