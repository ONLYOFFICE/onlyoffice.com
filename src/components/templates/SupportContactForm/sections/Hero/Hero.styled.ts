import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 40px;
`;

const StyledHeroText = styled(Text)`
  margin-bottom: 40px;
`;

const StyledHeroForm = styled.form`
  max-width: 544px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledHeroSelectWrapper = styled.div`
  height: 56px;
  position: relative;
`;

const StyledHeroSelect = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  border: 1px solid #AAAAAA;
  border-radius: 3px;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    border: 1px solid #666666;
  }
`;

const StyledHeroOptions = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  border: 1px solid #666666;
  border-radius: 3px;
  padding: 8px 0;
  width: 100%;
  max-height: 200px;
  background-color: #ffffff;
  overflow: hidden;
  overflow-y: auto;
  z-index: 3;
`;

const StyledSelectOption = styled.button<{
  $isSelected?: boolean;
}>`
  position: relative;
  display: block;
  border: none;
  padding: 8px 16px;
  font-size: 16px;
  font-weight: ${({ $isSelected }) => $isSelected && 600};
  line-height: 24px;
  color: ${({ $isSelected }) => ($isSelected ? "#ff6f3d" : "#444444")};
  width: 100%;
  background-color: transparent;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const StyledHeroPaidLicense = styled.div`
  background-color: #F9F9F9;
  border-radius: 3px;
  padding: 16px;
`;

const StyledHeroPaidLicenseText = styled(Text)`
  display: inline-block;
  width: 30%;
`;

const StyledHeroRadioInput = styled.input`
  display: none;
`;

const StyledHeroRadioLabel = styled.label`
  display: inline-block;
  width: 30%;
  padding-left: 38px;
  position: relative;
  cursor: pointer;

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

const StyledHeroUploadLabel = styled.label`
  margin-left: 60px;
  cursor: pointer;

  &::before {
    content: "";
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: #F5F5F5;
    background-image: url("/images/icons/clip.svg");
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    filter: grayscale(1);
    transition: filter 0.2s;
  }

  &:hover {
    &::before {
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
`;

const StyledHeroUploadItemText = styled(Text)``;

const StyledHeroUploadItemRemove = styled.button`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
  background-image: url("/images/icons/file-item-close.svg");
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
  border-radius: 3px;
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
`;

const StyledHeroAgreeText = styled(Text)`
  font-size: 12px;
`;

export {
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroForm,
  StyledHeroSelectWrapper,
  StyledHeroSelect,
  StyledHeroOptions,
  StyledSelectOption,
  StyledHeroPaidLicense,
  StyledHeroPaidLicenseText,
  StyledHeroRadioInput,
  StyledHeroRadioLabel,
  StyledHeroUploadWrapper,
  StyledHeroUpload,
  StyledHeroUploadInput,
  StyledHeroUploadLabel,
  StyledHeroUploadText,
  StyledHeroUploadList,
  StyledHeroUploadItem,
  StyledHeroUploadItemText,
  StyledHeroUploadItemRemove,
  StyledHeroHCaptchaWrapper,
  StyledHeroAgreeText,
};
