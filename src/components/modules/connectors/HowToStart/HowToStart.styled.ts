import styled from "styled-components";
import { IHowToStart } from "./HowToStart.types";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHowToStart = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media ${device.mobile} {
    display: block;
  }
`;

const StyledHowToStartWrapper = styled.div<{
  $contentWidth: IHowToStart["contentWidth"];
}>`
  display: grid;
  flex: 0 1 ${(props) => props.$contentWidth}px;
  row-gap: 32px;
  margin-right: 32px;

  @media ${device.tabletS} {
    flex: 0 1 50%;
  }

  @media ${device.mobile} {
    margin-right: initial;
    margin-bottom: 24px;
    row-gap: 16px;
  }
`;

const StyledHowToStartList = styled.ol`
  list-style: none;
  counter-reset: counter;
`;

const StyledHowToStartItem = styled.li`
  counter-increment: counter;
  font-size: 16px;
  line-height: 26px;

  &::before {
    content: counter(counter) ". ";
    font-weight: 700;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @media ${device.tabletS} {
    font-size: 14px;
    line-height: 22px;
  }
`;

const StyledHowToStartInfo = styled(Text)`
  position: relative;
  padding-left: 32px;
  font-size: 14px;
  line-height: 22px;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 22px;
    height: 22px;
    transform: translateY(-50%);
    background: url(${getAssetUrl('/images/templates/office-for-mattermost/how-to-start/github-icon.svg')})
      no-repeat center;
    background-size: contain;
  }
`;

const StyledHowToStartImgWrapper = styled.div<{
  $imageWidth: IHowToStart["image"]["width"];
}>`
  flex: 0 1 ${(props) => props.$imageWidth}px;
  width: 100%;

  @media ${device.tabletS} {
    flex: 0 1 50%;
  }
`;

const StyledHowToStartImg = styled.div<{
  $imageUrl: IHowToStart["image"]["url"];
  $imageWidth: IHowToStart["image"]["width"];
  $imageHeight: IHowToStart["image"]["height"];
}>`
  padding-bottom: ${(props) =>
    props.$imageHeight && props.$imageWidth
      ? `${((props.$imageHeight / props.$imageWidth) * 100).toFixed(4)}%`
      : "0%"};
  background-image: url(${(props) => props.$imageUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export {
  StyledHowToStart,
  StyledHowToStartWrapper,
  StyledHowToStartItem,
  StyledHowToStartList,
  StyledHowToStartInfo,
  StyledHowToStartImgWrapper,
  StyledHowToStartImg,
};
