import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledRestorePassword = styled.div`
  display: grid;
  row-gap: 24px;
  margin-top: 72px;
  max-width: 448px;

  @media ${device.tabletS} {
    margin: 0 auto;
  }
`;

const StyledRestorePasswordInput = styled.div`
  display: grid;
  row-gap: 16px;
`;

const StyledRestorePasswordButton = styled.button`
  justify-self: start;
  border: none;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
  color: #ff6f3d;
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  @media ${device.mobile} {
    justify-self: initial;
  }
`;

const StyledRestorePasswordSuccessMessage = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  color: #333333;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 21px;
  }
`;

export {
  StyledRestorePassword,
  StyledRestorePasswordInput,
  StyledRestorePasswordButton,
  StyledRestorePasswordSuccessMessage,
};
