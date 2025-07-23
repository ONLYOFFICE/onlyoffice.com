import styled from "styled-components";
import { device } from "@src/utils/device";
import { IDownloadCard } from "./DownloadCard.types";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";

const StyledDownloadCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  border-radius: 9px;
  padding: 24px;
  background-color: #ffffff;
  box-shadow: 0px 7px 15px 0px rgba(85, 85, 85, 0.1);
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  @media ${device.mobile} {
    padding: 16px;
  }
`;

const StyledDownloadCardHeading = styled(Heading)`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const StyledDownloadCardWrapper = styled.div<{ $hasNone: boolean }>`
  display: flex;
  align-items: ${(props) => props.$hasNone && "center"};
  margin-bottom: 16px;
`;

const StyledDownloadCardImage = styled.div<{
  $imageUrl: IDownloadCard["image"]["url"];
  $imagePositionX: IDownloadCard["image"]["positionX"];
  $imagePositionY: IDownloadCard["image"]["positionY"];
  $imageSize: IDownloadCard["image"]["size"];
}>`
  border-radius: 9px;
  margin-right: 24px;
  width: 88px;
  min-width: 88px;
  height: 88px;
  background-image: url(${(props) => props.$imageUrl});
  background-position-x: ${(props) => props.$imagePositionX};
  background-position-y: ${(props) => props.$imagePositionY};
  background-size: ${(props) => props.$imageSize};
  background-repeat: no-repeat;
`;

const StyledDownloadCardText = styled.div`
  font-size: 13px;
  line-height: 21px;
  color: #aaaaaa;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 20px;
  }
`;

const StyledDownloadCardLink = styled(Link)`
  font-size: 13px;
  line-height: 21px;

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 20px;
  }
`;

const StyledDownloadCardButtons = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const StyledDownloadCardButton = styled(Button)`
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: initial;
  text-transform: initial;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

const StyledDownloadCardIconButton = styled(Button)`
  padding: 0;
  width: 48px;
  min-width: 48px;
  height: 48px;

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
  StyledDownloadCard,
  StyledDownloadCardHeading,
  StyledDownloadCardWrapper,
  StyledDownloadCardImage,
  StyledDownloadCardText,
  StyledDownloadCardLink,
  StyledDownloadCardButtons,
  StyledDownloadCardButton,
  StyledDownloadCardIconButton,
};
