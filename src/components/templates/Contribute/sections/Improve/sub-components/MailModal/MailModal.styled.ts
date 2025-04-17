import { Button } from "@src/components/ui/Button";
import { Heading } from "@src/components/ui/Heading";
import { Input } from "@src/components/ui/Input";
import { Modal } from "@src/components/ui/Modal";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  > div {
    padding: 0;
  }
`;

const StyledMailModal = styled.div`
  width: 649px;
  height: 633px;
  background-image: url("/images/templates/contribute/improve/mail-modal.png");
  background-position: center;

  @media ${device.tabletS} {
    width: 100%;
  }

  @media ${device.mobile} {
    background-size: 500px 566px;
  }
`;

const StyledMailModalHead = styled.div`
  padding: 110px 140px 0;
  margin-bottom: 17px;
  display: flex;
  justify-content: space-between;

  svg {
    width: 20px;
    height: 20px;
  }

  @media ${device.tabletS} {
    max-width: 370px;
    margin: 0 auto 17px;
    padding: 110px 0 0;
  }

  @media ${device.mobile} {
    max-width: 273px;
    padding-top: 130px;
    margin-bottom: 10px;
  }

  @media ${device.mobileS} {
    max-width: 75%;
  }
`;

const StyledMailModalHeading = styled(Heading)`
  font-size: 18px;
  font-weight: 600;
`;

const StyledMailModalCloseIcon = styled.div`
  cursor: pointer;
`;

const StyledMailModalWrapper = styled.div`
  padding: 0 140px;
  display: grid;

  @media ${device.tabletS} {
    max-width: 370px;
    margin: 0 auto;
    padding: 0;
  }

  @media ${device.mobile} {
    max-width: 273px;
  }

  @media ${device.mobileS} {
    max-width: 75%;
  }

  > div {
    margin-bottom: 26px;
    position: relative;

    :first-child {
      height: 34px;
      background-color: #fff;
      border-radius: 4px;
    }

    .input-caption {
      position: absolute;
      margin-top: 0;
    }

    @media ${device.mobile} {
      margin-bottom: 22px;
    }
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

const StyledMailModalInput = styled(Input)`
  padding: 0 16px;
  font-size: 16px;
  line-height: 34px;
  color: #000;

  &::placeholder {
    color: #666666;
  }
`;

const StyledMailModalButton = styled(Button)`
  padding: 22px 25px;
  margin: 0 auto;
  border: none;
  width: initial;

  @media ${device.mobile} {
    padding: 16px 25px;
  }

  &:focus-visible {
    outline: none;
  }

  &.secondary {
    margin: 0 auto 0 0;
  }
`;

export {
  StyledModal,
  StyledMailModal,
  StyledMailModalHead,
  StyledMailModalHeading,
  StyledMailModalCloseIcon,
  StyledMailModalWrapper,
  StyledMailModalText,
  StyledMailModalInput,
  StyledMailModalButton,
};
