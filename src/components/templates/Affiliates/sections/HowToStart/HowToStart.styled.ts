import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

const StyledHowToStart = styled(Section)`
  background-color: #f9f9f9;

  .register-button {
    display: block;
    width: 248px;
    margin: 72px auto 16px;

    @media ${device.tablet} {
      margin-top: 56px;
    }

    @media ${device.mobile} {
      margin-top: 32px;
      width: 100%;
    }
  }
`;

const StyledHowToStartHeading = styled(Heading)`
  margin-bottom: 72px;

  @media ${device.tablet} {
    margin-bottom: 56px;
  }

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

export { StyledHowToStart, StyledHowToStartHeading };
