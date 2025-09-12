import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledEventHeading = styled(Heading)`
  margin-bottom: 16px;

  @media ${device.tabletS} {
    font-size: 16px;
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

  @media ${device.tabletS} {
    margin-bottom: 16px;
  }
`;

const StyledEventImg = styled(Link)`
  display: block;
  margin-bottom: 24px;
  padding-bottom: 50.134%;
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.tabletS} {
    margin-bottom: 16px;
  }
`;

const StyledEventLink = styled(Link)`
  font-size: 14px;
  line-height: 16px;

  @media ${device.tabletS} {
    font-size: 13px;
  }
`;

export {
  StyledEventHeading,
  StyledEventDate,
  StyledEventPlace,
  StyledEventImg,
  StyledEventLink,
};
