import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Modal } from "@src/components/ui/Modal";
import { ILoaderButton, LoaderButton } from "@src/components/ui/LoaderButton";

const StyledCardFormOverlay = styled(Modal)`
  overscroll-behavior: contain;
  cursor: pointer;
`;

const StyledCardFormModal = styled.div`
  max-width: 624px;
  padding: 40px;
  background-color: #fff;
  position: relative;
  cursor: auto;
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
  margin-bottom: 16px;
`;

const StyledCardFormAgreementWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
`;

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
  StyledCardFormAgreementWrapper,
  StyledCardFormButton,
  StyledCardFormStatusText
};