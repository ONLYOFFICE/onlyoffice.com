import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledCardsFiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledCardsFilterSelect = styled.div`
  position: relative;
  padding-right: 32px;
  cursor: pointer;

  @media ${device.mobile} {
    display: none;
  }
`;

const StyledCardsRefineHeading = styled(Heading)<{
  $isOpen: boolean;
}>`
  &::after {
    content: "";
    width: 24px;
    height: 100%;
    background-image: url(${getAssetUrl('/images/icons/chevron-down.svg')});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: absolute;
    top: 50%;
    right: 0;
    transform: ${({ $isOpen }) => ($isOpen ? "translateY(-50%) rotate(180deg)" : "translateY(-50%)")};
    transition-duration: 300ms;
  }
`;

const StyledCardsRefineList = styled.ul<{
  $isOpen: boolean;
}>`
  min-width: 220px;
  padding-top: 14px;
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 1;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transition-duration: 300ms;
`;

const StyledCardsRefineText = styled(Text)<{
  $isActive: boolean;
}>`
  color: ${({ $isActive }) => ($isActive ? "#ff6f3d" : "#333333")};
  transition-duration: 300ms;
`;

const StyledCardsRefineItems = styled.li<{
  $isActive: boolean;
}>`
  padding: 16px;
  background-color: ${({ $isActive }) => ($isActive ? "#f5f5f5" : "#fff")};
  transition-duration: 300ms;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }

  &:hover ${StyledCardsRefineText} {
    color: #ff6f3d;
  }
`;


const StyledCardsSortSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media ${device.mobile} {
    display: none;
  }
`;

const StyledCardsSortModules = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  & ${StyledCardsRefineHeading} {
    font-weight: 400;
    padding-right: 32px;
  }
`;

const StyledCardsSortModuleText = styled(Text)`
  padding-right: 8px;
`;

const StyledCardsSortDate = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  & ${StyledCardsRefineHeading} {
    font-weight: 400;
    padding-right: 32px;
  }

  & ${StyledCardsRefineList} {
    left: auto;
    right: 0;
  }
`;

const StyledCardsSortDateText = styled(Text)`
  padding-right: 8px;
`;

const StyledCardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media ${device.desktop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledCardsHeading = styled(Heading)`
  margin: 56px 0 48px;
`;

const StyledCardsFilterMobIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${getAssetUrl('/images/icons/filter.svg')});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  display: none;
  cursor: pointer;

  @media ${device.mobile} {
    display: block;
  }
`;

const StyledCardsRefineCounter = styled(Text)`
  width: 24px;
  height: 24px;
  position: absolute;
  left: -16px;
  bottom: -7px;
  background-color: #ff6f3d;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

const StyledCardsRefineMobHeading = styled(Heading)`
  display: none;

  @media ${device.mobile} {
    display: block;
  }
`;

const StyledCardsFilterMob = styled.div<{
  $display: boolean;
}>`
  display: ${({ $display }) => ($display ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  inset: 0;
  z-index: 1001;
  background-color: #f5f5f5;
  overflow: auto;
`;

const StyledCardsFilterMobHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  background-color: #fff;
  margin-bottom: 8px;
`;

const StyledCardsDatasheetsShowBtn = styled.button<{
  $display: boolean;
}>`
  display: ${({ $display }) => ($display ? "block" : "none")};
  color: #ff6f3d;
  text-decoration: underline;
  font-size: 14px;
  background-color: transparent;
  border: none;
  margin: 32px auto 0;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

const StyledCardsFilterMobReset = styled(StyledCardsDatasheetsShowBtn)`
  display: block;
  margin: 0;
`;

const StyledCardsFilterMobHeading = styled(Heading)`
  font-size: 14px;
`;

const StyledCardsFilterMobCloseBtn = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${getAssetUrl('/images/icons/cross.svg')});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const StyledCardsFilterMobMain = styled.div`
  flex: 1 0 auto;
`;

const StyledCardsFilterMobSelect = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr 3fr;
`;

const StyledCardsFilterMobOption = styled.div<{
  $isActive: boolean
}>`
  color: ${({ $isActive }) => ($isActive ? "#fff" : "#333")};
  background-color: ${({ $isActive }) => ($isActive ? "#444" : "#fff")};
  text-align: center;
  padding: 12px;
  cursor: pointer;
`;

const StyledCardsMobDateHeading = styled(Heading)`
  font-size: 12px;
  padding: 20px 18px 10px;
  font-weight: 600;

  & ${StyledCardsRefineHeading} {
    color: #333;
  }
`;

const StyledCardsMobDateSelect = styled.div`
  display: grid;
`;

const StyledCardsMobDateOption = styled.div<{
  $isActive: boolean
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  text-transform: capitalize;
  background-color: #fff;
  border-bottom: 1px solid #E2E2E2;
  padding: 18px;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 22px;
    height: 22px;
    background-color: ${({ $isActive }) => ($isActive ? "#8BB825" : "#E2E2E2")};
    background-image: ${({ $isActive }) => ($isActive ? `url(${getAssetUrl('/images/icons/check-white.svg')})` : "")};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid #CCCCCC;
  }
`;

const StyledCardsSortMobHeading = styled(StyledCardsMobDateHeading)``;

const StyledCardsSortMobSelect = styled(StyledCardsMobDateSelect)``;

const StyledCardsSortMobOption = styled(StyledCardsMobDateOption)``;

const StyledCardsFilterMobFooter = styled.div`
  padding: 15px 30px;
`;

const StyledCardsFilterMobApplyBtn = styled(Button)`
  width: 100%;
`;

export {
  StyledCardsFiltersWrapper,
  StyledCardsFilterSelect,
  StyledCardsRefineHeading,
  StyledCardsRefineList,
  StyledCardsRefineText,
  StyledCardsRefineItems,
  StyledCardsSortSelect,
  StyledCardsSortModules,
  StyledCardsSortModuleText,
  StyledCardsSortDate,
  StyledCardsSortDateText,
  StyledCardsList,
  StyledCardsHeading,
  StyledCardsFilterMobIcon,
  StyledCardsRefineCounter,
  StyledCardsRefineMobHeading,
  StyledCardsFilterMob,
  StyledCardsFilterMobHeader,
  StyledCardsFilterMobReset,
  StyledCardsFilterMobHeading,
  StyledCardsFilterMobCloseBtn,
  StyledCardsFilterMobMain,
  StyledCardsFilterMobSelect,
  StyledCardsFilterMobOption,
  StyledCardsSortMobHeading,
  StyledCardsSortMobSelect,
  StyledCardsSortMobOption,
  StyledCardsMobDateHeading,
  StyledCardsMobDateSelect,
  StyledCardsMobDateOption,
  StyledCardsFilterMobFooter,
  StyledCardsFilterMobApplyBtn
}