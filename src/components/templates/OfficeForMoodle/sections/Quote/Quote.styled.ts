import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledQuoteText = styled.i`
  position: relative;
  display: block;
  padding-top: 80px;
  margin-bottom: 16px;
  font-size: 24px;
  line-height: 38px;
  text-align: center;
  z-index: 1;

  &::after {
    content: "";
    display: inline-flex;
    position: absolute;
    top: 0;
    left: 50%;
    width: 196px;
    height: 160px;
    background-image: url("/images/templates/office-for-moodle/quote/decor.svg");
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateX(-50%);
    z-index: -1;

    @media ${device.mobile} {
      width: 135px;
      height: 110px;
    }
  }

  @media ${device.mobile} {
    padding-top: 55px;
    font-size: 16px;
    line-height: 25px;
  }
`;

export { StyledQuoteText };
