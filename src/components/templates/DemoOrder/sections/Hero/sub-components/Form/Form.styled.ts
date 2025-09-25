import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroForm = styled.form`
  max-width: 472px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${device.mobile} {
    gap: 24px;
  }
`;

const StyledHeading = styled(Heading)`
  max-width: 472px;
`;

const StyledTwoInputsContainer = styled.div`
  display: flex;
  gap: 16px;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 24px;
  }
`;

const StyledHeroHCaptchaWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const StyledHeroAgreeText = styled(Text)`
  font-size: 12px;

  @media ${device.mobile} {
    margin-bottom: 12px;
  }
`;

const StyledHeroLoaderButtonWrapper = styled.div`
  position: relative;
`;

const StyledHeroLoadText = styled(Text)`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -25px;
`;

const StyledHeroRequestStatusText = styled(Text)`
  margin-top: 16px;
`;

export {
  StyledHeroForm,
  StyledHeroHCaptchaWrapper,
  StyledHeroAgreeText,
  StyledHeroLoaderButtonWrapper,
  StyledHeroLoadText,
  StyledHeroRequestStatusText,
  StyledTwoInputsContainer,
  StyledHeading,
};
