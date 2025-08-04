import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledContributeWrapper = styled.div`
  display: grid;
  gap: 16px;
  padding-top: 52px;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 36px;
    height: 36px;
    background-image: url("/images/templates/influencer-program/contribute/contribute.svg");
    background-repeat: no-repeat;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

export  { StyledContributeWrapper };
