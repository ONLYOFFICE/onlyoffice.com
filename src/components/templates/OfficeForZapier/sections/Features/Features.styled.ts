import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledFeaturesHeading = styled(Heading)`
  margin-bottom: 56px;

  @media ${device.tablet} {
    margin-bottom: 40px;
  }

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

const StyledFeaturesTabs = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  column-gap: 16px;
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 40px;

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

const StyledFeaturesTab = styled.button<{
  $active: boolean;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  border: none;
  padding: 8px 32px;
  margin-bottom: -1px;
  font-size: 14px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0.04em;
  color: ${(props) => (props.$active ? "#ff6f3d" : "#444444")};
  text-align: center;
  text-transform: uppercase;
  min-width: 162px;
  background-color: transparent;
  transition: color 0.2s;
  cursor: pointer;

  &::before {
    content: "";
    display: inline-block;
    margin-right: 16px;
    width: 18px;
    min-width: 18px;
    height: 18px;
    background-image: url(${getAssetUrl('/images/templates/office-for-zapier/features/features.svg')});
    background-position-x: ${(props) => (props.$active ? "-48px" : "-15px")};
    background-position-y: -13px;
    background-size: 456px;

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

  @media ${device.mobile} {
    padding: 8px 28px;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.04em;
    min-width: 136px;
  }
`;

const StyledFeaturesContent = styled.div<{ $isFirstTab: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$isFirstTab ? "repeat(4, 1fr)" : "repeat(3, 1fr)"};
  gap: 32px 16px;

  @media ${device.mobile} {
    grid-template-columns: initial;
    gap: 24px;
  }
`;

const StyledFeaturesList = styled.ul`
  display: grid;
  row-gap: 16px;
`;

const StyledFeaturesListHeading = styled(Heading)<{ $iconPositionX: number }>`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  &::before {
    content: "";
    display: inline-block;
    margin-right: 8px;
    width: 32px;
    min-width: 32px;
    height: 32px;
    background-image: url(${getAssetUrl('/images/templates/office-for-zapier/features/features.svg')});
    background-position-x: ${(props) => props.$iconPositionX}px;
    background-position-y: center;
  }

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledFeaturesListItem = styled.li`
  position: relative;
  padding-left: 32px;
  font-size: 16px;
  line-height: 24px;

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

export {
  StyledFeaturesHeading,
  StyledFeaturesTabs,
  StyledFeaturesTab,
  StyledFeaturesContent,
  StyledFeaturesList,
  StyledFeaturesListHeading,
  StyledFeaturesListItem,
};
