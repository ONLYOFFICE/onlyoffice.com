import styled from "styled-components";
import { device } from "@src/utils/device";
import { Button } from "@src/components/ui/Button";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledRegistration = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #cccccc;
  border-radius: 6px;
  padding: 39px;
  background-color: #f9f9f9;

  &::after {
    content: "";
    position: absolute;
    right: 30px;
    bottom: -15px;
    width: 154px;
    height: 31px;
    background-image: url(${getAssetUrl('/images/templates/certificates/registration/line.svg')});
    background-repeat: no-repeat;
    background-size: contain;

    @media ${device.tabletS} {
      right: initial;
      left: 50%;
      bottom: -11px;
      transform: translateX(-50%);
    }

    @media ${device.mobile} {
      width: 113px;
      height: 22px;
    }
  }

  @media ${device.tabletS} {
    flex-direction: column;
    justify-content: initial;
    padding: 39px 39px 55px;
  }

  @media ${device.mobile} {
    padding: 31px 23px 39px;
  }
`;

const StyledRegistrationContent = styled.div<{ $locale?: string }>`
  display: flex;
  align-items: center;
  margin-right: 24px;
  flex: ${({ $locale }) =>
    $locale === "fr"
      ? "0 1 767px"
      : $locale === "de"
        ? "0 1 790px"
        : "0 1 808px"};

  @media ${device.tabletS} {
    flex: initial;
    flex-direction: column;
    margin: 0 0 24px;
    text-align: center;
  }

  @media ${device.mobile} {
    margin: 0 0 24px;
  }
`;

const StyledRegistrationIcon = styled.span`
  display: inline-flex;
  margin-right: 32px;
  width: 74px;
  min-width: 74px;
  height: 74px;
  background-image: url(${getAssetUrl('/images/templates/certificates/registration/world.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media ${device.tabletS} {
    margin: 0 0 32px;
  }

  @media ${device.mobile} {
    margin: 0 0 24px;
  }
`;

const StyledRegistrationButton = styled(Button)`
  min-width: 208px;
`;

export {
  StyledRegistration,
  StyledRegistrationContent,
  StyledRegistrationIcon,
  StyledRegistrationButton,
};
