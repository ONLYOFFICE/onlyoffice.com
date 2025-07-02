import { Button } from "@src/components/ui/Button";
import { Heading } from "@src/components/ui/Heading";
import styled from "styled-components";

const StyledCardFormOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.4);
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

const StyledCardFormAgreementWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledCardFormButton = styled(Button)`
  width: 100%;
`;

export {
  StyledCardFormOverlay,
  StyledCardFormModal,
  StyledCardFormCloseBtn,
  StyledCardFormHeading,
  StyledCardFormForm,
  StyledCardFormAgreementWrapper,
  StyledCardFormButton
};