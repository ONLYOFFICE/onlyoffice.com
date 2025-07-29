import styled from "styled-components";
import { Container } from "@src/components/ui/Container";
import { device } from "@src/utils/device";

const StyledFooterContainer = styled(Container)`
  background-color: #F5F7FB;

  @media ${device.tablet} {
    padding: 32px 40px;
  }

  @media ${device.tablet} {
    padding: 32px 16px;
  }
`;

const StyledFooter = styled.div`
  font-size: 12px;
  text-align: center;
  color: #444444;
  line-height: 1.33em;
`;

export {
  StyledFooterContainer,
  StyledFooter
};
