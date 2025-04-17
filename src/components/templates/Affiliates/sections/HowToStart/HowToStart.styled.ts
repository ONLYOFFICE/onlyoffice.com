import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";

const StyledHowToStartHeading = styled(Heading)`
  margin-bottom: 72px;

  @media ${device.tablet} {
    margin-bottom: 56px;
  }

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

const StyledHowToStartButton = styled(Button)`
  min-width: 248px;
`;

const StyledHowToStartRegister = styled.div`
  display: grid;
  justify-content: center;
  row-gap: 16px;
  margin-top: 72px;

  @media ${device.tablet} {
    margin-top: 56px;
  }

  @media ${device.mobile} {
    margin-top: 32px;
  }
`;

export {
  StyledHowToStartHeading,
  StyledHowToStartButton,
  StyledHowToStartRegister,
};
