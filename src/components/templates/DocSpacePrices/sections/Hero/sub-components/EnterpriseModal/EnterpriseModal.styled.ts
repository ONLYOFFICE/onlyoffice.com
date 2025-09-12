import styled from "styled-components";
import { device } from "@src/utils/device";
import { Button } from "@src/components/ui/Button";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Tooltip } from "@src/components/ui/Tooltip";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledEnterpriseModal = styled.div`
  border-radius: 5px;
  padding: 32px;
  background-color: #ffffff;

  @media ${device.mobile} {
    padding: 16px;
  }
`;

const StyledEnterpriseModalHeading = styled(Heading)`
  margin-bottom: 32px;

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledEnterpriseModalItems = styled.div`
  display: grid;
  row-gap: 30px;
`;

const StyledEnterpriseModalTooltip = styled(Tooltip)`
  opacity: 0.3;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const StyledEnterpriseModalBtns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  margin-top: 32px;

  @media ${device.mobile} {
    margin-top: 24px;
    column-gap: 6px;
  }
`;

const StyledEnterpriseModalBtn = styled(Button)`
  @media ${device.mobile} {
    padding: 15px 10px;
  }
`;

const StyledEnterpriseModalList = styled.ul`
  li {
    position: relative;
    padding-left: 20px;
    font-size: 13px;
    line-height: 18px;

    &::before {
      content: "";
      position: absolute;
      top: 4px;
      left: 0;
      width: 12px;
      height: 12px;
      background-image: url(${getAssetUrl('/images/icons/check-small.svg')});
      background-repeat: no-repeat;
      background-size: contain;
    }

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const StyledEnterpriseModalTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #cccccc;
  padding-top: 11px;
  min-height: 65px;

  @media ${device.tabletS} {
    min-height: 59px;
  }

  @media ${device.mobile} {
    min-height: 43px;
  }
`;

const StyledEnterpriseModalTotalCurrency = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.02em;

  @media ${device.mobile} {
    font-size: 18px;
    line-height: 24px;
  }
`;

export {
  StyledEnterpriseModal,
  StyledEnterpriseModalHeading,
  StyledEnterpriseModalItems,
  StyledEnterpriseModalBtns,
  StyledEnterpriseModalBtn,
  StyledEnterpriseModalList,
  StyledEnterpriseModalTotal,
  StyledEnterpriseModalTotalCurrency,
  StyledEnterpriseModalTooltip,
};
