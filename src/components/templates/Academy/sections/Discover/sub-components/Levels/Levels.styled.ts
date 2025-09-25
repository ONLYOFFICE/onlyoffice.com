import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledLevels = styled.div`
  max-width: 1071px;
  margin: auto;
  border-radius: 6px;
  padding: 24px;
  gap: 24px 32px;
  background-color: transparent;
  border: 1px solid #e2e2e2;
  display: block;
  box-shadow: none;
    @media ${device.desktop} {
      max-width: 90vw;
    }
`;

const StyledHeading = styled(Heading)`
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  background-color: #f9f9f9;
  padding: 19px 32px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  display: block;
  grid-column: span 2;
  margin-bottom: 16px;
  @media ${device.mobile} {
    padding: 13px 32px;
    font-size: 14px;
  }
`;

const LevelArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }
`;

const KeyText = styled(Text)`
  padding: 16px 0 24px;
  gap: 16px;
  border-top: 1px solid #E2E2E2;
  display: grid;
  grid-template-columns: 24px 1fr;
  justify-content: center;

  &:before {
    width: 24px;
    height: 24px;
    background-image: url(${getAssetUrl('/images/templates/academy/courses/corner.svg')});
    background-size: cover;
    background-position: center;
    content: "";
  }
`;

const Level = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: start;
  padding: 32px;

  @media ${device.mobile} {
    padding: 16px;
  }
`;

export { StyledLevels, StyledHeading, LevelArea, Level, KeyText };
