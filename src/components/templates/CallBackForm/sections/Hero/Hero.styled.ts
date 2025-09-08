import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";

const StyledHeroForm = styled.form`
  max-width: 542px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${device.mobile} {
    gap: 24px;
  }
`;

const StyledTwoInputsContainer = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr;

  @media ${device.mobile} {
  grid-template-columns: 1fr;
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

const StyledHeroText = styled(Text)`
  padding: 40px 0 48px;

  @media ${device.mobile} {
    font-size: 14px;
    padding: 24px 0;
  }
`;

export {
  StyledHeroForm,
  StyledHeroHCaptchaWrapper,
  StyledHeroAgreeText,
  StyledHeroLoaderButtonWrapper,
  StyledHeroLoadText,
  StyledHeroRequestStatusText,
  StyledTwoInputsContainer,
  StyledHeroText,
};
