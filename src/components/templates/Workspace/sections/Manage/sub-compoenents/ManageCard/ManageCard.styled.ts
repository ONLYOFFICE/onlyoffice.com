import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledManageCard = styled.div<{ $isActive: boolean }>`
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 418px auto;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const StyledManageCardContent = styled.div`
  display: grid;
  gap: 16px;
  align-self: start;
  padding: 0 33px;

  @media ${device.tabletS} {
    padding: 0;
  }
`;

const StyledManageCardTextList = styled.ul`
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

const StyledManageCardTextListItem = styled.li`
  position: relative;
  padding-left: 32px;

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 8px;
    width: 6px;
    height: 6px;
    background: #ff6f3d;
    transform: rotate(45deg);
  }
`;

const StyledManageCardImage = styled.div<{
  $imgUrl: string;
  $imgUrl2x: string;
  $height: number;
}>`
  width: 100%;
  margin: 0 auto;
  padding-bottom: ${({ $height }) => `${($height / 574) * 100}%`};
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.retina} {
    background-image: url(${({ $imgUrl2x, $imgUrl }) => $imgUrl2x || $imgUrl});
  }

  @media ${device.tablet} {
    background-size: contain;
  }

  @media ${device.tabletS} {
    padding-bottom: ${({ $height }) => `${($height / 574) * 100}%`};
    background-position: center;
  }
`;

const StyledManageCardLinks = styled.div`
  display: flex;
  gap: 16px;
`;

export {
  StyledManageCard,
  StyledManageCardContent,
  StyledManageCardTextList,
  StyledManageCardTextListItem,
  StyledManageCardImage,
  StyledManageCardLinks,
};
