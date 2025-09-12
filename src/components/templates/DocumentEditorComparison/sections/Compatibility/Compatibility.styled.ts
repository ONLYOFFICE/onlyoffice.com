import { Link } from "@src/components/ui/Link";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledCompatibilityTop = styled.div`
  max-width: 817px;
  margin: 0 auto 40px;
  display: grid;
  gap: 24px;
  text-align: center;

  @media ${device.tabletS} {
    margin-bottom: 32px;
  }

  @media ${device.tabletS} {
    gap: 16px;
  }
`;

const StyledCompatibilityTopTextLink = styled(Link)<{ $type: "docx" | "xlsx" }>`
  display: inline-block;

  &::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 18px;
    height: 22px;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 5px;
    background-image: ${({ $type }) =>
      $type === "docx"
        ? `url(${getAssetUrl('/images/templates/document-editor-comparison/compatibility/file_docx.svg')})`
        : $type === "xlsx"
        ? `url(${getAssetUrl('/images/templates/document-editor-comparison/compatibility/file_xlsx.svg')})`
        : undefined};
  }
`;

const StyledCompatibilitySwitcher = styled.div`
  margin: 0 auto 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tabletS} {
    margin-bottom: 32px;
  }

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledCompatibilitySwitcherItem = styled.button<{
  $isDocx: boolean;
  $type?: "documents" | "spreadsheets";
}>`
  padding: 15px 20px;
  cursor: pointer;
  font-size: 16px;
  line-height: 26px;

  border: ${({ $isDocx }) => ($isDocx ? "none" : "1px solid #ccc")};
  background-color: ${({ $isDocx }) => ($isDocx ? "#ffffff" : "transparent")};
  color: ${({ $isDocx }) => ($isDocx ? "#FF6F3D" : "#444444")};
  box-shadow: ${({ $isDocx }) =>
    $isDocx ? "0 7px 25px rgba(0,0,0,0.1)" : "none"};

  ${({ $isDocx, $type }) =>
    !$isDocx && $type === "documents" && "border-right: none;"}
  ${({ $isDocx, $type }) =>
    !$isDocx && $type === "spreadsheets" && "border-left: none;"}
  
    &:hover {
    background-color: ${({ $isDocx }) => (!$isDocx ? "#ebebeb" : undefined)};
  }

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 19px;
    letter-spacing: -0.01em;
    padding: 15px 13.5px;
  }
`;

const StyledCompatibilityCompanySwitcher = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-bottom: 40px;

  @media ${device.mobile} {
    margin: 0 -16px 24px;
    padding: 0 16px;
    overflow-x: auto;
    flex-wrap: nowrap;
    justify-content: start;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const StyledCompatibilityCompanySwitcherItem = styled.button<{
  $selected: boolean;
  $logo: string;
  $logoWidth?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: ${({ $selected }) => ($selected ? 700 : 400)};
  color: ${({ $selected }) => ($selected ? "#FF6F3D" : "#444444")};
  text-decoration: ${({ $selected }) => (!$selected ? "underline" : "none")};
  text-decoration-style: dotted;

  &::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: ${({ $logoWidth }) => $logoWidth || "28px"};
    height: 28px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${({ $logo }) => `url(${$logo})`};

    @media ${device.mobile} {
      margin-right: 4px;
    }
  }

  @media ${device.mobile} {
    padding: 8px;
    min-width: max-content;
  }
`;

const StyledCompatibilityExamplesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto 40px;
  height: 594px;
  position: relative;

  @media ${device.tablet} {
    height: 58vw;
  }

  @media ${device.mobile} {
    height: 65vw;
  }
`;

const StyledCompatibilityExample = styled.div<{ $active: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  z-index: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.2s ease;
`;

export {
  StyledCompatibilityTop,
  StyledCompatibilityTopTextLink,
  StyledCompatibilitySwitcher,
  StyledCompatibilitySwitcherItem,
  StyledCompatibilityCompanySwitcher,
  StyledCompatibilityCompanySwitcherItem,
  StyledCompatibilityExamplesWrapper,
  StyledCompatibilityExample,
};
