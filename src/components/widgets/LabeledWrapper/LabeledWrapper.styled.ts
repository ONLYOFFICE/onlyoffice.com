import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledLabeledWrapperLabel = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 24px;
  color: #333333;

  > span {
    display: inline-flex;

    &:not(:last-child) {
      margin-right: 8px;
    }
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export { StyledLabeledWrapperLabel };
