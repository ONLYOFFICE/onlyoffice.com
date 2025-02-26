import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledLetUsKnowBanner = styled(Section)`
  border-top: 1px solid #e2e2e2;
  background-image: url("/images/modules/connect-app-let-us-know/decor.svg");
  background-repeat: no-repeat;
  background-position: center top;
  background-color: #f9f9f9;

  @media ${device.mobile} {
    background-position: center -85px;
  }
`;

const StyledLetUsKnowBannerWrapper = styled.div`
  margin: 0 auto;
  max-width: 764px;
  text-align: center;

  h3 {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;

    &::before {
      content: "";
      display: inline-flex;
      margin-bottom: 24px;
      width: 84px;
      height: 72px;
      background-image: url("/images/modules/connect-app-let-us-know/icon.svg");
      background-position-x: 50%;
      background-repeat: no-repeat;
    }

    @media ${device.mobile} {
      margin-bottom: 8px;
    }
  }
`;

export { StyledLetUsKnowBanner, StyledLetUsKnowBannerWrapper };
