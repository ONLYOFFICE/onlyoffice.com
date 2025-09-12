import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledCostBusinessBlock = styled.div`
  justify-content: space-between;
  text-align: start;
  min-height: auto;
  position: relative;
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 3px;
  box-sizing: border-box;
  box-shadow: 0 7px 25px rgba(85, 85, 85, 0.15);
  display: flex;
  margin: 0 auto;
  max-width: 1120px;
  padding: 48px;

  @media ${device.mobile} {
    padding: 245px 16px 16px;
  }
  
`;

const StyledCostBusinessTextPart = styled.div`
  width: 50%;
  max-width: 514px;

  @media ${device.mobile} {
    padding-top: 0;
    width: 100%;
  }
`;

const StyledCostBusinessHeader = styled(Heading)`
  font-size: 40px;
  line-height: 52px;
  letter-spacing: -0.02em;

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 27px;
    padding-top: 24px;
  }
`;

const StyledCostBusinessList = styled.ul`
  font-size: 16px;
  line-height: 1.6em;
  list-style-type: none;
  margin: 24px 0;
  text-align: left;

  @media ${device.mobile} {
    font-size: 14px;
    margin: 20px 0 12px;
  }
`;

const StyledCostBusinessListItem = styled.li`
  max-width: 384px;
  padding: 0 0 8px 32px;
  position: relative;
  display: flex;

  &:before {
    background: url(${getAssetUrl('/images/templates/docs-enterprise/cost/chech-support-orange.svg')}) no-repeat 0 0;
    content: '';
    display: inline-block;
    height: 12px;
    left: 6px;
    position: absolute;
    top: 9px;
    width: 12px;
  }

  @media ${device.mobile} {
    min-width: auto;
  }
`;

const StyledCostBusinessInfo = styled.div`
  background-image: url(https://static-www.onlyoffice.com/v9.5.0/images/info.svg?ver=170);
  border-bottom: 0;
  cursor: pointer;
  display: inline-block;
  height: 24px;
  margin-left: 8px;
  opacity: 0.9;
  position: absolute;
  width: 24px;
`;

const StyledCostBusinessInfoPopup = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: none;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  padding: 6px 8px;
  position: absolute;
  top: 24px;
  width: 220px;
  z-index: 1;
  transition-duration: 0.3s;

  @media ${device.mobile} {
    left: -200px;
  }
  
`;

const StyledCostBusinessWrapper = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${StyledCostBusinessInfoPopup} {
    display: block;
  }
`;

const StyledCostBusinessImage = styled.div`
  content: "";
  position: absolute;
  top: -1px;
  right: -1px;
  width: 50%;
  height: 100%;
  background-image: url(${getAssetUrl('/images/templates/docs-enterprise/cost/cost-efficient.svg')});
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-size: contain;

  @media ${device.mobile} {
    width: 100%;
    height: 50%;
    top: 0px;
    right: 0px;
  }
`;

const StyledCostSecondBlock = styled.div`
  border-radius: 6px;
  border: 1px solid #E2E2E2;
  padding: 24px;
  margin: 56px 0 0;
  box-sizing: border-box;

  @media ${device.mobile} {
    margin: 32px 0 0;
    padding: 24px 16px;
  }
`;

const StyledInformationText = styled(Text)`
  line-height: 1.6em;
  font-size: 16px;
  text-align: center;

  &:before {
    background-image: url(/images/templates/docs-enterprise/cost/union.svg')});
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    display: block;
    height: 40px;
    margin: 0 auto 12px;
    width: 40px;
  }

  @media ${device.tablet} {
    font-size: 14px;
  }
`;

export {
  StyledCostBusinessBlock,
  StyledCostBusinessTextPart,
  StyledCostBusinessHeader,
  StyledCostBusinessList,
  StyledCostBusinessListItem,
  StyledCostBusinessImage,
  StyledCostSecondBlock,
  StyledInformationText,
  StyledCostBusinessInfoPopup,
  StyledCostBusinessInfo,
  StyledCostBusinessWrapper
};