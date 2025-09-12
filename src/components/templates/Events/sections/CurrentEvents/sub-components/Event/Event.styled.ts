import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledEventHeading = styled(Heading)`
  margin-bottom: 32px;

  @media ${device.tabletS} {
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 24px;
  }

  @media ${device.mobile} {
    margin-bottom: 16px;
    font-size: 16px;
    line-height: 21px;
  }
`;

const StyledEventDate = styled.div`
  position: relative;
  margin-bottom: 10px;
  padding-left: 24px;
  font-size: 13px;
  line-height: 16px;
  color: #808080;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 12px;
    height: 12px;
    background-image: url(${getAssetUrl('/images/icons/clock.svg')});
    background-repeat: no-repeat;
    background-position: center;
    transform: translateY(-50%);
  }
`;

const StyledEventPlace = styled.div`
  margin-bottom: 24px;
  font-size: 13px;
  line-height: 1;
  color: #333333;
`;

const StyledEventDescription = styled.div`
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 24px;
  color: #333333;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

const StyledEventImg = styled.div<{
  $imgUrl: string;
  $img2xUrl: string;
}>`
  margin-bottom: 24px;
  padding-bottom: 50%;
  background-image: url(${(props) => props.$imgUrl});
  background-repeat: no-repeat;
  background-size: contain;

  ${(props) =>
    props.$img2xUrl &&
    css`
      @media ${device.retina} {
        background-image: url(${props.$img2xUrl});
      }
    `}
`;

const StyledEventLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledEventLink = styled(Link)`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.02em;

  &:not(:last-child) {
    margin-right: 32px;
  }

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 17px;
  }
`;

export {
  StyledEventHeading,
  StyledEventDate,
  StyledEventPlace,
  StyledEventDescription,
  StyledEventImg,
  StyledEventLinks,
  StyledEventLink,
};
