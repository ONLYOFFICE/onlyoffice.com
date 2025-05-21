import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledFreeAppsTop = styled.div`
  max-width: 736px;
  margin: 0 auto 56px;
  display: grid;
  gap: 24px;
  text-align: center;

  @media ${device.tabletS} {
    margin-bottom: 40px;
  }

  @media ${device.mobile} {
    gap: 16px;
    margin-bottom: 24px;
  }
`;

const StyledFreeAppsButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 70px;

  @media ${device.tablet} {
    max-width: 542px;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 24px 16px;
  }

  @media ${device.mobile} {
    display: grid;
    gap: 24px;
  }
`;

const StyledFreeAppsImage = styled.div<{ $image: string; $image2x: string }>`
  padding-bottom: 46.45%;
  background-image: url(${({ $image }) => $image});
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.mobile} {
    display: none;
  }
`;

export { StyledFreeAppsTop, StyledFreeAppsButtons, StyledFreeAppsImage };
