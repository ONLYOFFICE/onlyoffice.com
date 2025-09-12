import { Link } from "@src/components/ui/Link";
import { device } from "@src/utils/device";
import styled from "styled-components";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  ICompatibilityAlternative,
  ICompatibilityItem,
} from "./BestAlternativeCompatibility.types";
import { Text } from "@src/components/ui/Text";

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
        ? `url(${getAssetUrl('/images/modules/best-alternative/best-alternative-compatibility/file_docx.svg')})`
        : $type === "xlsx"
        ? `url(${getAssetUrl('/images/modules/best-alternative/best-alternative-compatibility/file_xlsx.svg')})`
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
  width: 310px;
  height: 60px;
  margin: 0 auto 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;

  @media ${device.tabletS} {
    margin-bottom: 32px;
  }

  @media ${device.mobile} {
    margin-bottom: 24px;
  }

  @media screen and (max-width: 343px) {
    margin: 0 -12px 24px;
  }
`;

const StyledCompatibilityCompanySwitcherItem = styled.button<{
  $isOO: boolean;
  $type: "onlyOffice" | "alternative";
  $logo: ICompatibilityAlternative["logo"]["src"];
  $logoWidth?: ICompatibilityAlternative["logo"]["width"];
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: ${({ $type }) => ($type === "onlyOffice" ? "13px" : "14px")};
  font-weight: ${({ $isOO }) => ($isOO ? 700 : 400)};
  color: ${({ $isOO }) => ($isOO ? "#FF6F3D" : "#444444")};
  text-decoration: ${({ $isOO }) => (!$isOO ? "underline" : "none")};
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
  }
`;

const StyledCompatibilityExamplesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  height: 594px;
  position: relative;

  @media ${device.tabletS} {
    height: 394px;
  }

  @media ${device.mobile} {
    height: 162px;
  }
`;

const StyledCompatibilityExample = styled.div<{
  $isOO: boolean;
  $isDocx: boolean;
  $type: ICompatibilityItem["type"];
}>`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 0;
  transition: opacity 0.2s ease;

  ${({ $isOO, $isDocx, $type }) => {
    const isVisible = {
      onlyOfficeDocx: $isOO && $isDocx,
      onlyOfficeXlsx: $isOO && !$isDocx,
      alternativeDocx: !$isOO && $isDocx,
      alternativeXlsx: !$isOO && !$isDocx,
    }[$type];

    return isVisible ? "opacity: 1; z-index: 1;" : "";
  }}
`;

const StyledCompatibilityDetails = styled(Text)`
  margin-top: 40px;

  @media ${device.tabletS} {
    margin-top: 32px;
  }

  @media ${device.mobile} {
    margin-top: 24px;
  }
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
  StyledCompatibilityDetails,
};
