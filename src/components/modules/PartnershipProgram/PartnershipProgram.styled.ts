import styled from "styled-components";
import { device } from "@src/utils/device";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledPartnershipProgramWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(224px, 648px) minmax(224px, 448px);
  gap: 24px;
  align-items: center;

  @media ${device.tabletS} {
    grid-template-columns: initial;
  }
`;

const StyledPartnershipProgramBody = styled.div`
  display: grid;
  row-gap: 24px;
  align-items: start;
`;

const StyledPartnershipProgramBtns = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: -24px;

  a {
    margin-bottom: 24px;
  }

  @media ${device.mobile} {
    margin-bottom: -14px;
  }
`;

const StyledPartnershipProgramButton = styled(Button)`
  margin-right: 24px;
  max-width: 284px;

  @media ${device.mobile} {
    margin-right: 0;
    max-width: 100%;
  }
`;

const StyledPartnershipProgramLink = styled(Link)`
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.01em;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 26px;
    width: 100%;
    text-align: center;
  }
`;

const StyledPartnershipProgramImg = styled.div`
  padding-bottom: 65.625%;
  width: 100%;
  background-image: url(${getAssetUrl('/images/modules/partnership-program/partners.svg')});
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.tabletS} {
    padding-bottom: 0;
    margin-left: auto;
    max-width: 448px;
    height: 294px;
  }

  @media ${device.mobile} {
    margin: 0 auto;
    max-width: 288px;
    height: 189px;
  }
`;

export {
  StyledPartnershipProgramWrapper,
  StyledPartnershipProgramBody,
  StyledPartnershipProgramImg,
  StyledPartnershipProgramBtns,
  StyledPartnershipProgramButton,
  StyledPartnershipProgramLink,
};
