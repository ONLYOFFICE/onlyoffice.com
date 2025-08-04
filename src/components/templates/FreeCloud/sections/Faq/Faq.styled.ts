import styled from "styled-components";
import { device } from "@src/utils/device";
import { FaqCollapse } from "@src/components/modules/FaqCollapse";

const StyledFaqCollapse = styled(FaqCollapse)`
  & > div {
    max-width: 830px;

    @media ${device.tablet} {
      max-width: 100%;
    }
  }

  h2 {
    text-align: center;
  }
`;

export {
  StyledFaqCollapse
}