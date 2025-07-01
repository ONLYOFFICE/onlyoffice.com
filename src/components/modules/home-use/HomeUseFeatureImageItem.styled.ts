import styled from "styled-components";
import { IFeatureImageItem } from "./HomeUseFeatureImageItem.types";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";

const StyledFeatureImageItemContent = styled.div<{
  $contentWidth?: IFeatureImageItem["contentWidth"];
  $position?: IFeatureImageItem["position"];
}>`
  display: grid;
  row-gap: 24px;

  @media ${device.mobile} {
    row-gap: 8px;
  }
`;

const StyledFeatureImageItemText = styled.div`
  font-size: 16px;
  line-height: 24px;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

const StyledFeatureImageItemBtns = styled.div`
  margin-top: 2px;
  display: flex;
  align-items: center;
  column-gap: 27px;
  @media ${device.mobile} {
    flex-direction: column;
    row-gap: 32px;
    margin-top: 24px;
  }
`;

const StyledFeatureImageItemLink = styled(Link)`
  display: inline;
  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;



const StyledFeatureList = styled.ul`
  display: grid;
  align-items: start;
  row-gap: 16px;
  font-size: 16px;
  line-height: 24px;
  color: #444444;
  text-align: initial;
  width: 100%;

  @media ${device.tabletS} {
    column-gap: 32px;
  }

  @media ${device.mobile} {
    grid-template-columns: initial;
    row-gap: 8px;
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledFeatureListItem = styled.li`
  position: relative;
  padding-left: 32px;

  &::before {
    content: "";
    position: absolute;
    top: 9px;
    left: 8px;
    width: 6px;
    height: 6px;
    background: #ff6f3d;
    transform: rotate(45deg);

    @media ${device.mobile} {
      top: 8px;
    }
  }
`;
const StyledClientLogos = styled.div<{ logos: { url: string, width: string | number, height: string | number }[] }>`
display: flex;
flex-direction: row;
column-gap: 56px;
filter: grayscale(1);
align-items: center;

@media ${device.mobile} {
  width: 100%;
  column-gap: 36px;
}
  @media ${device.mobileS} {
  column-gap: 18px;
  margin: 16px 0;
}

`;

const StyledClientLogosItem = styled.div<{ logo: { url: string, width: string | number, height: string | number } }>`
width: ${(props) => props.logo.width}px;
height: ${(props) => props.logo.height}px;
background-image: url("${(props) => props.logo.url}");
background-repeat: no-repeat;

@media ${device.mobile} {
  width: ${(props) => props.logo.width / 1.7}px;
  height: ${(props) => props.logo.height / 1.7}px;
  background-size: contain;
}
 
`;

export {
  StyledFeatureImageItemContent,
  StyledFeatureImageItemText,
  StyledFeatureImageItemLink,
  StyledFeatureList,
  StyledFeatureListItem,
  StyledClientLogos,
  StyledClientLogosItem,
  StyledFeatureImageItemBtns
};
