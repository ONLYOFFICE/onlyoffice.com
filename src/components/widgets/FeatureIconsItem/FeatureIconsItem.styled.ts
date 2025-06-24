import styled from "styled-components";
import { IFeatureIconsItem } from "./FeatureIconsItem.types";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";

const StyledFeatureIconsItemContent = styled.div<{
  $contentWidth?: IFeatureIconsItem["contentWidth"];
  $position?: IFeatureIconsItem["position"];
}>`
  display: grid;
  row-gap: 16px;

  @media ${device.mobile} {
    row-gap: 8px;
  }
`;

const StyledFeatureIconsText = styled.div`
  font-size: 16px;
  line-height: 24px;
  max-width: 736px;
  padding: 24px 40px 56px;
  text-align: center;
  margin: 0 auto;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
    padding: 24px 40px 16px;
  }
`;

const StyledFeatureIconsItemLink = styled(Link)`
    color: #FF6F3D;
    text-decoration: underline; 
    
  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

const StyledFeatureItemsWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 32px;
  margin-bottom: 32px;
  padding: 0;
  list-style: none;
  justify-content: center;

  @media ${device.tablet} {
    overflow-x: scroll;
    justify-content: flex-start;
  } 
`;

const StyledFeatureItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  color: #333;
  gap: 8px;

  img {
    display: block;
  }

  span {
    text-align: left;
    font-size: 16px;
    line-height: 21px;
    white-space: nowrap;
    font-weight: 700;

    @media ${device.desktop} {
      white-space: normal;
    }

    @media ${device.desktop} {
      white-space: nowrap;
      font-size: 14px;
    } 
  }
`;

const StyledFeatureIconsItemText = styled.li`
  list-style-type: none;
  font-size: 16px;

  @media ${device.mobile} {
    font-size: 14px;
  }

  .featureList {
    position: relative;
    padding-left: 32px;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 8px;
      width: 6px;
      height: 6px;
      background: #ff6f3d;
      transform: rotate(45deg) translateY(-50%);

      @media ${device.mobile} {
        top: 8px;
      }
    }
  }
`;

const StyledFeatureIconsButton = styled.a<{ isPrimary?: boolean }>`
  padding: 12px 24px;
  font-size: 12px;
  line-height: 26px;
  border-radius: 9px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition: 0.2s ease;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;

  @media ${device.mobile} {
    display: block;
    width: 100%;
  }

  color: ${({ isPrimary }) => (isPrimary ? "#ffffff" : "#ffffff")};
  background-color: ${({ isPrimary }) => (isPrimary ? "#ff6f3d" : "#444444")};

  &:hover {
    opacity: 0.9;
    text-decoration: none;
  }
`;

export {
  StyledFeatureIconsItemContent,
  StyledFeatureIconsItemText,
  StyledFeatureIconsText,
  StyledFeatureIconsItemLink,
  StyledFeatureItemsWrapper,
  StyledFeatureIconsButton,
  StyledFeatureItem
};
