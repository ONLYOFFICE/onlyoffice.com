import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledUse = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;

  a {
    white-space: nowrap;
  }

  @media ${device.mobile} {
    flex-direction: column;
    gap: 32px;
  }
`;

const StyledUseHeading = styled(Heading)`
  line-height: 1.6em;
  max-width: 400px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: right;

  @media ${device.mobile} {
    text-align: center;
    font-size: 16px;
    line-height: 1.5em;
    max-width: 100%;
  }
`;

export {
  StyledUse,
  StyledUseHeading
};
