import styled from "styled-components";
import { device } from "@src/utils/device";
import { IDownloadBlock } from "./DownloadBlock.types";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";

const StyledDownloadBlock = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  border-radius: 9px;
  height: 100%;
  background-color: #ffffff;
  box-shadow: 0px 7px 15px 0px rgba(85, 85, 85, 0.1);
`;

const StyledDownloadBlockImageWrapper = styled.div<{
  $imageBackground: IDownloadBlock["image"]["background"];
}>`
  border-radius: 5px;
  padding: 24px;
  min-height: 160px;
  background: ${(props) => props.$imageBackground};

  @media ${device.mobile} {
    min-height: 128px;
  }
`;

const StyledDownloadBlockImage = styled.div<{
  $imageUrl: IDownloadBlock["image"]["url"];
  $imagePositionX: IDownloadBlock["image"]["positionX"];
  $imagePositionY: IDownloadBlock["image"]["positionY"];
  $imageMobilePositionX: IDownloadBlock["image"]["mobilePositionX"];
  $imageMobilePositionY: IDownloadBlock["image"]["mobilePositionY"];
  $imageSize: IDownloadBlock["image"]["size"];
  $imageWidth: IDownloadBlock["image"]["width"];
  $imageHeight: IDownloadBlock["image"]["height"];
  $imageMobileWidth: IDownloadBlock["image"]["mobileWidth"];
  $imageMobileHeight: IDownloadBlock["image"]["mobileHeight"];
}>`
  margin: 0 auto;
  max-width: ${(props) => props.$imageWidth || "100%"};
  height: ${(props) => props.$imageHeight || "100%"};
  background-image: url(${(props) => props.$imageUrl});
  background-position-x: ${(props) => props.$imagePositionX};
  background-position-y: ${(props) => props.$imagePositionY};
  background-size: ${(props) => props.$imageSize};
  background-repeat: no-repeat;

  @media ${device.mobile} {
    max-width: ${(props) => props.$imageMobileWidth};
    height: ${(props) => props.$imageMobileHeight};
    background-position-x: ${(props) => props.$imageMobilePositionX};
    background-position-y: ${(props) => props.$imageMobilePositionY};
  }
`;

const StyledDownloadBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  height: 100%;
  min-height: 256px;

  @media ${device.mobile} {
    padding: 24px;
    min-height: initial;
  }
`;

const StyledDownloadBlockHeading = styled(Heading)`
  margin-bottom: 16px;
`;

const StyledDownloadBlockBody = styled.div`
  margin-bottom: 20px;
`;

const StyledDownloadBlockText = styled.div`
  font-size: 13px;
  line-height: 21px;
  color: #aaaaaa;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 20px;
  }
`;

const StyledDownloadBlockLink = styled(Link)`
  font-size: 13px;
  line-height: 21px;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 20px;
  }
`;

const StyledDownloadBlockButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const StyledDownloadBlockButton = styled(Button)`
  padding: 12px 14px;
  letter-spacing: initial;
  min-height: 48px;

  &:not(:last-child) {
    margin-right: 8px;
  }

  @media ${device.mobile} {
    padding: 16px;
    font-size: 12px;
    line-height: 12px;
  }
`;

const StyledDownloadBlockIconButton = styled(Button)`
  padding: 0;
  width: 48px;
  min-width: 48px;
  height: 48px;
  min-height: 48px;

  svg {
    path {
      transition:
        stroke 0.2s,
        fill 0.2s;
    }
  }

  &:hover {
    svg {
      path {
        &:first-child {
          stroke: #ff6f3d;
        }

        &:last-child {
          fill: #ff6f3d;
        }
      }
    }
  }
`;

export {
  StyledDownloadBlock,
  StyledDownloadBlockImageWrapper,
  StyledDownloadBlockImage,
  StyledDownloadBlockWrapper,
  StyledDownloadBlockHeading,
  StyledDownloadBlockBody,
  StyledDownloadBlockText,
  StyledDownloadBlockLink,
  StyledDownloadBlockButtons,
  StyledDownloadBlockButton,
  StyledDownloadBlockIconButton,
};
