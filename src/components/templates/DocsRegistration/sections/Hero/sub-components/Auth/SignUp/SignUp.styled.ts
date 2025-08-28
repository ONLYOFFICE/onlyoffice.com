import styled from "styled-components";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";

const StyledSignUpAccount = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 64px;

  @media ${device.tablet} {
    margin-bottom: 40px;
  }

  @media ${device.tabletS} {
    margin-bottom: 64px;
  }

  @media ${device.mobile} {
    margin-bottom: 48px;
  }
`;

const StyledSignUpAccountLink = styled(Link)`
  margin-left: 16px;

  @media ${device.mobile} {
    margin-left: 8px;
  }
`;

const StyledSignUpWrapper = styled.div`
  display: grid;
  align-content: start;
  row-gap: 32px;
  max-width: 472px;
  height: 100%;

  @media ${device.tabletS} {
    margin: 0 auto;
  }

  @media ${device.mobile} {
    row-gap: 24px;
  }
`;

const StyledSignUpHeader = styled.div`
  display: grid;
  row-gap: 16px;
`;

const StyledSignUpBox = styled.div`
  display: grid;
  row-gap: 32px;
`;


const StyledSignUpCaption = styled.div<{ $error?: boolean }>`
  margin-top: 16px;
  font-size: 13px;
  line-height: 16px;
  color: ${(props) => (props.$error ? "#cb0000" : "#999999")};

  @media ${device.mobile} {
    font-size: 11px;
  }
`;

const StyledSuccessModal = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 16px 40px 32px;

  @media ${device.tablet} {
    padding: 16px 24px;
  }
`;

export {
  StyledSignUpAccount,
  StyledSignUpAccountLink,
  StyledSignUpWrapper,
  StyledSignUpHeader,
  StyledSignUpBox,
  StyledSignUpCaption,
  StyledSuccessModal,
};
