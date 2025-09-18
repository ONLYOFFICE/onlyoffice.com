import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledFeaturesHeading = styled(Heading)`
  font-size: 32px;
  letter-spacing: -0.02em;
  line-height: 1.33em;
  text-align: center;
  color: #000000;
  @media ${device.mobile} {
    font-size: 24px;
  }
`;

const StyledFeaturesTabs = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  margin-bottom: 40px;

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

const StyledFeaturesTab = styled.button<{
  $active: boolean;
  $iconPositionX: number;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  padding: 8px 32px 16px;
  margin-bottom: -1px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.04em;
  color: ${(props) => (props.$active ? "#ff6f3d" : "#444444")};
  text-align: center;
  text-transform: uppercase;
  min-width: 204px;
  background-color: transparent;
  transition: color 0.2s;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    margin-bottom: 12px;
    width: 56px;
    min-width: 56px;
    height: 56px;
    background-image: url(${getAssetUrl('/images/templates/accessibility/features/buttons.svg')});
    background-position-x: ${(props) =>
      props.$iconPositionX ? `${props.$iconPositionX}px` : "0px"};
    background-position-y: -0px;
    background-size: 232px auto;

    @media ${device.mobile} {
      margin-right: 8px;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid
      ${(props) => (props.$active ? "#ff6f3d" : "transparent")};
    transition: border-color 0.2s;
  }

  @media ${device.tabletS} {
    min-width: 160px;
  }

  @media ${device.mobile} {
    padding: 8px 28px 16px;
    font-size: 11px;
    min-width: 95px;
  }
`;

const StyledFeaturesContent = styled.div`
  display: grid;
  row-gap: 64px;

  @media ${device.tabletS} {
    row-gap: 72px;
  }
  @media ${device.mobile} {
    row-gap: 48px;
  }
`;

const StyledFeaturesDescription = styled(Text)`
  font-size: 16px;
  line-height: 1.5em;
  text-align: center;
  margin: 24px auto 56px;
  max-width: 900px;
`;

const StyledFeaturesListItem = styled.li`
  position: relative;
  padding-left: 32px;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
  padding-bottom: 16px;

  &::before {
    content: "";
    position: absolute;
    top: 9px;
    left: 8px;
    width: 6px;
    height: 6px;
    transform: rotate(45deg);
    background: #ff6f3d;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledFeaturesListDescription = styled(Text)`
  color: #333333;
  font-size: 16px;
  line-height: 1.5;
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export {
  StyledFeaturesHeading,
  StyledFeaturesTabs,
  StyledFeaturesTab,
  StyledFeaturesContent,
  StyledFeaturesDescription,
  StyledFeaturesListItem,
  StyledFeaturesListDescription,
};
