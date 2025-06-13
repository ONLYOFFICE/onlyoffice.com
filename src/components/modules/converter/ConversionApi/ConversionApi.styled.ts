import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledConversionApiWrapper = styled.div`
  display: grid;
  justify-items: center;
  padding-top: 136px;
  position: relative;
  gap: 32px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 116px;
    height: 104px;
    background-image: url("/images/modules/converter/conversion_api.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  @media ${device.mobile} {
    gap: 16px;
  }
`;

const StyledConversionApiText = styled.div`
  display: grid;
  gap: 8px;
  text-align: center;
`;

export { StyledConversionApiWrapper, StyledConversionApiText };
