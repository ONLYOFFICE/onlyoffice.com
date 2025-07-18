import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { ILoaderButton, LoaderButton } from "@src/components/ui/LoaderButton";
import { Modal } from "@src/components/ui/Modal";
import { TextArea } from "@src/components/ui/TextArea";

const StyledCardFormOverlay = styled(Modal)`

overscroll-behavior: contain;
  cursor: pointer;
`;

const StyledCardFormModal = styled.div`
  width: 736px;
  padding: 71px 96px 74px;
  background-color: #fff;
  position: relative;
  cursor: auto;

  @media ${device.tablet} {
    padding: 71px 32px 74px;
    width: 100%;
    max-width: 736px;
  }
`;

const StyledCardFormCloseBtn = styled.div`
  width: 18px;
  height: 18px;
  padding: 5px;
  box-sizing: content-box;
  background-image: url("/images/icons/cross.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 25px;
  right: 25px;
  cursor: pointer;
`;

const StyledCardFormHeading = styled(Heading)`
  margin-bottom: 32px;
`;

const StyledCardFormForm = styled.form``;

const StyledCardFormInputWrapper = styled.div`
  margin-bottom: 32px;

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledCardFormAgreementWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 32px 0;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    margin: 24px 0;
  }
`;

const StyledCardFormTextAgree = styled(Text)`
  @media ${device.mobile} {
    max-width: 224px;
  }
`;

const StyledCardFormSelectWrapper = styled(StyledCardFormInputWrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const StyledCardFormSelect = styled.div<{
  $isOptionChoosed: boolean;
}>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 24px 16px 8px;
  font-size: 16px;
  line-height: 24px;
  position: relative;
  border: 1px solid;
  border-color: ${({ $isOptionChoosed }) => $isOptionChoosed ? "#8BB825" : "#aaa"};
  border-radius: 3px;
  background-color: ${({ $isOptionChoosed }) => $isOptionChoosed ? "#f9feef" : "#f9f9f9"};
  transition: border-color 0.2s, background-color 0.2s;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    border-color: #666;
  }

  &::after {
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    background-image: url("/images/icons/chevron-down-gray.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

const StyledCardFormSelectText = styled(Text)<{
  $isActive: boolean;
}>`
  position: absolute;
  top: 50%;
  left: 16px;
  color: ${({ $isActive }) => $isActive ? "#666" : "#aaa"};
  font-size: ${({ $isActive }) => $isActive ? "12px" : "16px"};
  transform: ${({ $isActive }) => $isActive ? "translateY(-24px)" : "translateY(-50%)"};
  transition-duration: 300ms;

  @media ${device.mobile} {
    font-size: ${({ $isActive }) => $isActive ? "11px" : "14px"};
  }
`;

const StyledCardFormOptions = styled.ul<{
  $isOpen: boolean;
}>`
  display: ${({ $isOpen }) => $isOpen ? "block" : "none"};
  width: 100%;
  max-height: 232px;
  padding: 16px 0;
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #666;
  overflow-y: auto;
`;

const StyledCardFormOption = styled.li`
  padding: 8px 16px;
  transition-duration: 300ms;
  cursor: pointer;

  &:hover {
    background-color: #F2F2F2;
  }

  &:first-child {
    pointer-events: none;
    cursor: default;
  }
`;

const StyledCardFormTextArea = styled(TextArea)``;

const StyledCardFormButton = styled(LoaderButton)`
  width: 100%;
`;

const StyledCardFormStatusText = styled(Text)<{
  $status: ILoaderButton["status"];
}>`
  display: ${({ $status }) => $status === "success" || $status === "error" ? "block" : "none"};
  margin-top: 16px;
`;

export {
  StyledCardFormOverlay,
  StyledCardFormModal,
  StyledCardFormCloseBtn,
  StyledCardFormHeading,
  StyledCardFormForm,
  StyledCardFormInputWrapper,
  StyledCardFormSelectWrapper,
  StyledCardFormSelect,
  StyledCardFormSelectText,
  StyledCardFormOptions,
  StyledCardFormOption,
  StyledCardFormTextArea,
  StyledCardFormAgreementWrapper,
  StyledCardFormTextAgree,
  StyledCardFormButton,
  StyledCardFormStatusText
};