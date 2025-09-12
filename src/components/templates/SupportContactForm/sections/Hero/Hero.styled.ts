import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { ICheckStatus } from "../../SupportContactForm.types";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHeroHeading = styled(Heading)`
  margin-bottom: 40px;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledHeroText = styled(Text)`
  margin-bottom: 40px;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledHeroForm = styled.form`
  max-width: 544px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${device.mobile} {
    gap: 24px;
  }
`;

const StyledHeroSelectWrapper = styled.div`
  height: 56px;
  position: relative;

  @media ${device.mobile} {
    height: 48px;
  }
`;

const StyledHeroSelect = styled.button<{
  $isSubjectOpen: boolean;
  $isSelected: boolean;
}>`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${({ $isSubjectOpen, $isSelected }) => css`
    ${$isSubjectOpen
      ? "#ffffff"
      : $isSelected
        ? "#f9feef"
        : "#f9f9f9"
    };
  `};
  border: ${({ $isSubjectOpen, $isSelected }) => css`
    ${$isSubjectOpen
      ? "1px solid #444444"
      : $isSelected
        ? "1px solid #8bb825"
        : "1px solid #AAAAAA"
    };
  `};
  border-radius: 6px;
  padding: 24px 48px 12px 16px;
  transition: 0.2s;
  cursor: pointer;

  @media ${device.mobile} {
    padding: 24px 48px 8px 12px;
  }

  &:hover {
    border: ${({ $isSubjectOpen, $isSelected }) => css`
      ${$isSubjectOpen
        ? "1px solid #444444"
        : $isSelected
          ? "1px solid #8bb825"
          : "1px solid #444444"
      };
    `};
  }
`;

const StyledHeroSelectLabel = styled(Text)<{
  $isSubjectOpen?: boolean;
  $isSelected?: boolean;
}>`
  position: absolute;
  left: 16px;
  top: ${({ $isSubjectOpen, $isSelected }) => ($isSubjectOpen || $isSelected ? "8px" : "16px")};
  font-size: ${({ $isSubjectOpen, $isSelected }) => ($isSubjectOpen || $isSelected ? "12px" : "16px")};
  line-height: ${({ $isSubjectOpen, $isSelected }) => ($isSubjectOpen || $isSelected ? "12px" : "24px")};
  color: ${({ $isSubjectOpen, $isSelected }) => ($isSubjectOpen || $isSelected ? "#666666" : "#aaaaaa")};
  transition: top 0.2s, font-size 0.2s, color 0.2s;

  @media ${device.mobile} {
    left: 12px;
    top: ${({ $isSubjectOpen, $isSelected }) => ($isSubjectOpen || $isSelected ? "8px" : "11px")};
    font-size: ${({ $isSubjectOpen, $isSelected }) => ($isSubjectOpen || $isSelected ? "11px" : "14px")};
    line-height: ${({ $isSubjectOpen, $isSelected }) => ($isSubjectOpen || $isSelected ? "11px" : "21px")};
  }
`;

const StyledHeroSelectText = styled(Text)`
  @media ${device.mobile} {
    line-height: 16px;
  }
`;

const StyledHeroOptions = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  border: 1px solid #666666;
  border-radius: 6px;
  padding: 8px 0;
  width: 100%;
  max-height: 200px;
  background-color: #ffffff;
  overflow: hidden;
  overflow-y: auto;
  z-index: 3;
`;

const StyledSelectOption = styled.button<{
  $isOptionSelected?: boolean;
}>`
  position: relative;
  display: block;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: ${({ $isOptionSelected }) => $isOptionSelected && 600};
  line-height: 24px;
  color: ${({ $isOptionSelected }) => ($isOptionSelected ? "#ff6f3d" : "#444444")};
  width: 100%;
  background-color: transparent;
  transition: background-color 0.2s;
  cursor: pointer;

  @media ${device.mobile} {
    font-size: 14px;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

const StyledSelectOptionTitle = styled(StyledSelectOption)`
  cursor: default;

  &:hover {
    background-color: transparent;
  }
`;

const StyledSelectOptionSub = styled(StyledSelectOption)`
  padding-left: 32px;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledSelectOptionNoInclude = styled(StyledSelectOption)`
  cursor: default;

  @media ${device.mobile} {
    font-size: 14px;
  }

  &:hover {
    background-color: transparent;
  }
`;

const StyledHeroPaidLicense = styled.div`
  background-color: #F9F9F9;
  border-radius: 6px;
  padding: 16px;
  display: flex;
  align-items: center;

  @media ${device.mobile} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 8px;
  }
`;

const StyledHeroPaidLicenseText = styled(Text)`
  display: inline-block;
  width: fit-content;
  white-space: nowrap;
  flex-basis: 30%;
  flex-shrink: 1;
  padding-right: 25px;

  @media ${device.mobile} {
    grid-column: 1 / 3;
    font-size: 13px;
  }
`;

const StyledHeroRadioInput = styled.input`
  display: none;
`;

const StyledHeroRadioLabel = styled.label`
  display: inline-block;
  padding-left: 38px;
  position: relative;
  flex-basis: 30%;
  flex-shrink: 1;
  flex-grow: 0;
  cursor: pointer;

  @media ${device.mobile} {
    font-size: 14px;
  }

  &::before {
    content: "";
    position: absolute;;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #AAAAAA;
    background: #f9f9f9;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 9px;
    transform: translateY(-50%) scale(0);
    width: 8px;
    height: 8px;
    background: #FFFFFF;
    border-radius: 50%;
    transition: all 0.2s ease;
  }

  ${StyledHeroRadioInput}:checked + & {
    &::before {
      border: 1px solid #8BB825;
      background: #8BB825;
    }

    &::after {
      transform: translateY(-50%) scale(1);
    }
  }
`;

const StyledHeroUploadWrapper = styled.div``;

const StyledHeroUpload = styled.div`
  position: relative;
`;

const StyledHeroUploadInput = styled.input`
  display: none;
`;

const StyledHeroUploadLabel = styled.label<{
  $fileStatus: ICheckStatus["file"];
}>`
  margin-left: 60px;
  cursor: pointer;

  @media ${device.mobile} {
    font-size: 13px;
  }

  @media ${device.mobileS} {
    display: flex;
    align-items: center;
  }

  &::before {
    content: "";
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%) scale(1);
    background-color: #f5f5f5;
    border-radius: 50%;
    transition: background-color 0.3s;
  }

  &::after {
    content: "";
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%) scale(1);
    opacity: 1;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    transition: background-color 0.3s, filter 0.3s, transform 0.3s, opacity 0.3s;
  }

  ${({ $fileStatus }) =>
    $fileStatus === "error" &&
    css`
      &::after {
        background-image: url(${getAssetUrl('/images/icons/cross-red.svg')});
        transform: translateY(-50%) scale(1.5);
        opacity: 0;
        animation: popError 0.5s forwards;
      }

      &::before {
        background-color: #fff7f7;
      }
    `}

  ${({ $fileStatus }) =>
    $fileStatus === "success" &&
    css`
      &::after {
        background-image: url(${getAssetUrl('/images/icons/check-green.svg')});
        transform: translateY(-50%) scale(1);
        opacity: 1;
        animation: popSuccess 1s forwards;
      }
    `}

  ${({ $fileStatus }) =>
    $fileStatus === "default" &&
    css`
      &::after {
        background-image: url(${getAssetUrl('/images/icons/clip.svg')});
        filter: grayscale(1);
        transform: translateY(-50%) scale(1);
        opacity: 1;
      }
    `}

  @keyframes popError {
    to {
      transform: translateY(-50%) scale(1);
      opacity: 1;
    }
  }

  @keyframes popSuccess {
    from {
      clip-path: inset(0 100% 0 0);
    }
    to {
      clip-path: inset(0 0 0 0);
    }
  }

  &:hover {
    &::after {
      filter: grayscale(0);
    }
  }

`;

const StyledHeroUploadText = styled(Text)`
  white-space: nowrap;
`;

const StyledHeroUploadList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 45px;

  @media ${device.mobile} {
    margin-top: 35px;
  }
`;

const StyledHeroUploadItemText = styled(Text)``;

const StyledHeroUploadItemTextError = styled(Text)`
  margin-top: 20px;

  @media ${device.mobile} {
    font-size: 11px;
  }
`;

const StyledHeroUploadItemRemove = styled.button`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  background-image: url(${getAssetUrl('/images/icons/file-item-close.svg')});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  transition-duration: 0.2s;
  filter: grayscale(1);
  cursor: pointer;
`;

const StyledHeroUploadItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: #F9F9F9;
  border-radius: 6px;
  padding: 9px 10px;
  position: relative;
  transition-duration: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #F2F2F2;

    ${StyledHeroUploadItemText} {
      color: #444444;
    }

    ${StyledHeroUploadItemRemove} {
      filter: grayscale(0);
    }
  }
`;

const StyledHeroHCaptchaWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const StyledHeroAgreeText = styled(Text)`
  font-size: 12px;

  @media ${device.mobile} {
    margin-bottom: 12px;
  }
`;

const StyledHeroLoaderButtonWrapper = styled.div`
  position: relative;
`;

const StyledHeroLoadText = styled(Text)`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -25px;
`;

const StyledHeroRequestStatusText = styled(Text)`
  margin-top: 16px;
`;

export {
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroForm,
  StyledHeroSelectWrapper,
  StyledHeroSelect,
  StyledHeroOptions,
  StyledSelectOption,
  StyledSelectOptionTitle,
  StyledSelectOptionSub,
  StyledSelectOptionNoInclude,
  StyledHeroSelectLabel,
  StyledHeroSelectText,
  StyledHeroPaidLicense,
  StyledHeroPaidLicenseText,
  StyledHeroRadioInput,
  StyledHeroRadioLabel,
  StyledHeroUploadWrapper,
  StyledHeroUpload,
  StyledHeroUploadInput,
  StyledHeroUploadLabel,
  StyledHeroUploadText,
  StyledHeroUploadItemTextError,
  StyledHeroUploadList,
  StyledHeroUploadItem,
  StyledHeroUploadItemText,
  StyledHeroUploadItemRemove,
  StyledHeroHCaptchaWrapper,
  StyledHeroAgreeText,
  StyledHeroLoaderButtonWrapper,
  StyledHeroLoadText,
  StyledHeroRequestStatusText,
};
