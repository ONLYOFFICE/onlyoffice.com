import styled from "styled-components";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledSignUpAccount = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 64px;

  @media ${device.tablet} {
    margin-bottom: 40px;
  }

  @media ${device.tabletS} {
    margin-bottom: 64px;
  }

  @media ${device.mobile} {
    margin-bottom: 48px;
  }
`;

const StyledSignUpAccountLink = styled(Link)`
  margin-left: 16px;

  @media ${device.mobile} {
    margin-left: 8px;
  }
`;

const StyledSignUpWrapper = styled.div`
  display: grid;
  align-content: start;
  row-gap: 32px;
  max-width: 472px;
  height: 100%;

  @media ${device.tabletS} {
    margin: 0 auto;
  }

  @media ${device.mobile} {
    row-gap: 24px;
  }
`;

const StyledSignUpHeader = styled.div`
  display: grid;
  row-gap: 16px;
`;

const StyledSignUpGoogleButton = styled(Button)`
  font-size: 16px;
  line-height: 22px;
  text-transform: initial;

  span {
    position: relative;
    padding-left: 32px;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 24px;
      height: 24px;
      background-image: url(${getAssetUrl('/images/templates/docspace-registration/hero/google.svg')});
      background-repeat: no-repeat;
      background-size: contain;
      transform: translateY(-50%);
    }
  }

  @media ${device.mobile} {
    padding: 12px 16px;
    font-size: 14px;
  }
`;

const StyledSignUpBox = styled.div`
  display: grid;
  row-gap: 24px;
`;

const StyledSignUpLabel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-top: 1px solid #e2e2e2;
    margin: 0 8px;
  }
`;

const StyledSignUpDownload = styled.div`
  display: grid;
  row-gap: 4px;
  text-align: center;
`;

const StyledSignUpDownloadLink = styled(Link)`
  justify-self: center;
  font-size: 16px;
  line-height: 24px;

  @media ${device.mobile} {
    justify-self: initial;
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledSignUpCaption = styled.div<{ $error?: boolean }>`
  margin-top: 16px;
  font-size: 13px;
  line-height: 16px;
  color: ${(props) => (props.$error ? "#cb0000" : "#999999")};

  @media ${device.mobile} {
    font-size: 11px;
  }
`;

export {
  StyledSignUpAccount,
  StyledSignUpAccountLink,
  StyledSignUpWrapper,
  StyledSignUpHeader,
  StyledSignUpGoogleButton,
  StyledSignUpLabel,
  StyledSignUpBox,
  StyledSignUpDownload,
  StyledSignUpDownloadLink,
  StyledSignUpCaption,
};
