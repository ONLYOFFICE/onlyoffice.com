import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { INewsCard } from "./NewsCard.types";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledNewsCard = styled.div`
  display: grid;
  row-gap: 16px;
`;

const StyledNewsCardHeading = styled(Heading)`
  line-height: 19px;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledNewsCardImageWrapper = styled(Link)`
  position: relative;
`;

const StyledNewsCardImage = styled.div<{ $imgUrl: INewsCard["imgUrl"] }>`
  padding-bottom: 50.35%;
  background-image: url(${(props) => props.$imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledNewsCardInfo = styled.div`
  display: grid;
  row-gap: 8px;
  font-size: 13px;
  line-height: 20px;
  color: #808080;

  @media ${device.mobile} {
    row-gap: 6px;
    line-height: 18px;
  }
`;

const StyledNewsCardInfoItem = styled.div<{
  $isWebinar?: boolean;
  $isDate?: boolean;
  $isLocation?: boolean;
}>`
  position: relative;
  display: flex;
  padding-left: 24px;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 0;
    width: 16px;
    height: 16px;
    background-repeat: no-repeat;
  }

  ${(props) =>
    props.$isWebinar &&
    css`
      &::before {
        background-image: url(${getAssetUrl('/images/icons/workshop.svg')});
      }
    `}

  ${(props) =>
    props.$isDate &&
    css`
      &::before {
        background-image: url(${getAssetUrl('/images/icons/clock.svg')});
      }
    `}

  ${(props) =>
    props.$isLocation &&
    css`
      &::before {
        background-image: url(${getAssetUrl('/images/icons/location.svg')});
        background-position: center;
      }
    `}
`;

const StyledNewsCardWebinarTime = styled.span`
  position: absolute;
  right: 8px;
  bottom: 10px;
  padding: 1px 2px;
  font-size: 13px;
  line-height: 18px;
  font-weight: 700;
  color: #ffffff;
  background-color: #000000;
`;

export {
  StyledNewsCard,
  StyledNewsCardHeading,
  StyledNewsCardImageWrapper,
  StyledNewsCardImage,
  StyledNewsCardInfo,
  StyledNewsCardInfoItem,
  StyledNewsCardWebinarTime,
};
