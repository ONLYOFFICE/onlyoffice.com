import styled from "styled-components";
import { Input } from "@src/components/ui/Input";

const StyledPasswordInput = styled(Input)`
  input {
    padding: 24px 56px 8px 16px;
  }
`;

const StyledPasswordInputButton = styled.button`
  position: absolute;
  top: 50%;
  right: 16px;
  border: none;
  padding: 0;
  width: 24px;
  height: 24px;
  background-color: transparent;
  transform: translateY(-50%);
  cursor: pointer;
`;

export { StyledPasswordInput, StyledPasswordInputButton };
