import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledContainer = styled(Section)`
  display: flex;
  background-color: #ffc671;
  background-image: linear-gradient(
    136.1deg,
    #ffc671 -1.99%,
    #ff7541 58.57%,
    #ff6f3d 100%
  );
  text-align: center;
  position: relative;
  @media ${device.mobile} {
    padding: 84px 0;
  }
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1120px;
  width: 90vw;
  color: #ffffff;
  z-index: 1;
`;

const StyledBackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(/images/templates/accessibility/suggestions/bg.svg);
  background-repeat: no-repeat;
  background-position: 61% -270px;
  width: 100%;
  height: 100%;
`;

const StyledSuggestionsTitle = styled(Heading)`
  font-size: 32px;
  letter-spacing: -0.02em;
  line-height: 1.33em;
  width: auto;
  font-weight: 800;
  color: #ffffff;
  @media ${device.mobile} {
    font-size: 24px;
  }
`;

const StyledSuggestionsDescription = styled.p`
  margin: 16px auto 32px;
  font-size: 18px;
  line-height: 1.5em;
  max-width: 860px;
  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 16px;

  > a {
    border-color: #ffffff;

    &:hover {
      border-color: #ffffff;
      color: #ffffff;
    }
  }
`;

export {
  StyledContainer,
  StyledContentWrapper,
  StyledSuggestionsTitle,
  StyledSuggestionsDescription,
  StyledButtonContainer,
  StyledBackgroundImage,
};
