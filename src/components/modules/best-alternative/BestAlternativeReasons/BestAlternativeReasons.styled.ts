import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";
import styled from "styled-components";
import { IBestAlternativeReasons } from "./BestAlternativeReasons.types";

const StyledFeaturesHeading = styled(Heading)<{
  $maxWidth: IBestAlternativeReasons["heading"]["maxWidth"];
}>`
  max-width: ${({ $maxWidth }) => $maxWidth || "752px"};
  margin: 0 auto 72px;

  @media ${device.tabletS} {
    font-size: 32px;
    line-height: 43px;
  }

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 27px;
    margin-bottom: 24px;
  }
`;

const StyledFeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 32px;
  justify-items: center;

  > div:nth-child(odd):last-child {
    max-width: 584px;
    grid-column: span 2;

    @media ${device.mobile} {
      justify-items: start;
      grid-column: 1;
      text-align: start;
    }
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export { StyledFeaturesHeading, StyledFeaturesWrapper };
