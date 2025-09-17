import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledAppsWrapper = styled.div`
  background-image: url(../images/templates/for-research/apps/bg.svg);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 112px 40px 0;

  img {
    max-width: 1120px;
    width: 100vw;
    background-size: contain;
  }

  @media ${device.tablet} {
    grid-template-columns: initial;
    column-gap: initial;
    row-gap: 32px;
    padding: 0 40px 0;
  }

  @media ${device.mobile} {
    padding: 0 16px 0;
  }
`;

const StyledAppsText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 1120px;
  margin: auto;

  p {
    max-width: 900px;
    line-height: 1.6em;
  }

  @media ${device.mobile} {
    p {
      font-size: 13px;
    }
  }
`;

const StyledAppsList = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0 32px;
  flex-wrap: wrap;
  justify-content: center;

  a {
    background-color: #f6f6f6;
    border-radius: 9px;
    padding: 0 12px;
    column-gap: 8px;
    min-width: 170px;
    justify-content: center;
    transition:
      background-color 0.3s ease,
      box-shadow 0.3s ease,
      filter 0.3s ease;

    &:hover {
      box-shadow: 0 7px 25px rgba(85, 85, 85, 0.15);
      background-color: #ffffff;
      transition:
        background-color 0.3s ease,
        box-shadow 0.3s ease,
        filter 0.3s ease;
    }
  }
`;

export { StyledAppsWrapper, StyledAppsList, StyledAppsText };
