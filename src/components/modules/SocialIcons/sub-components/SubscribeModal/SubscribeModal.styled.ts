import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Input } from "@src/components/ui/Input";
import { Button } from "@src/components/ui/Button";

const StyledMailModal = styled.div`
  margin: 0 -16px;
  height: 633px;
  background-image: url("/images/modules/social-icons/mail-modal.png");
  background-repeat: no-repeat;
  background-position: center;

  @media ${device.mobile} {
    height: 566px;
    background-size: 500px 566px;
  }
`;

const StyledMailModalWrapper = styled.div`
  padding-top: 110px;
  margin: 0 auto;
  max-width: 370px;

  @media ${device.mobile} {
    padding-top: 94px;
    max-width: 274px;
  }
`;

const StyledMailModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 17px;

  @media ${device.mobile} {
    margin-bottom: 10px;
  }
`;

const StyledMailModalHeading = styled(Heading)`
  margin-right: 24px;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

const StyledMailModalCloseBtn = styled.button`
  border: none;
  width: 20px;
  height: 20px;
  background-color: transparent;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const StyledMailModalText = styled(Text)`
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 18px;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledMailModalForm = styled.div`
  display: grid;
  row-gap: 26px;

  @media ${device.mobile} {
    row-gap: 22px;
  }
`;

const StyledMailModalInput = styled(Input)`
  height: 36px;
  background-color: #ffffff;

  input {
    padding: 0 16px;

    &::placeholder {
      color: #666666;
    }

    @media ${device.mobile} {
      padding: 0 12px;
    }
  }

  ~ .input-caption {
    position: absolute;
    margin-top: 0;
  }
`;

const StyledMailModalBtnWrapper = styled.div`
  text-align: center;
`;

const StyledMailModalConfirmText = styled(Text)`
  margin: 21px 0;
  font-size: 14px;
  line-height: 18px;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledMailModalBtn = styled(Button)`
  width: initial;
`;

export {
  StyledMailModal,
  StyledMailModalWrapper,
  StyledMailModalHeader,
  StyledMailModalHeading,
  StyledMailModalCloseBtn,
  StyledMailModalText,
  StyledMailModalForm,
  StyledMailModalInput,
  StyledMailModalBtnWrapper,
  StyledMailModalConfirmText,
  StyledMailModalBtn,
};
