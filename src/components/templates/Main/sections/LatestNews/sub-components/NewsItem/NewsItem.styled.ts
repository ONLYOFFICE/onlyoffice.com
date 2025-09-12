import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledNewsItemHeading = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 22px;
`;

const StyledNewsItemDate = styled.div`
  position: relative;
  padding-left: 24px;
  font-size: 13px;
  line-height: 21px;
  color: #808080;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 13px;
    height: 13px;
    background-image: url(${getAssetUrl('/images/icons/calendar.svg')});
    background-repeat: no-repeat;
    transform: translateY(-50%);
  }
`;

export { StyledNewsItemHeading, StyledNewsItemDate };
