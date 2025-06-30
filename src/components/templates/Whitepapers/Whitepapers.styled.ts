import { Container } from "@src/components/ui/Container";
import { Input } from "@src/components/ui/Input";
import { Text } from "@src/components/ui/Text";
import styled, { css } from "styled-components";

const StyledWhitepapersInputWrapper = styled.div`
  width: 100%;
  height: 72px;
  position: sticky;
  top: 72px;
  background-color: #333;
`;

const StyledWhitepapersInputContainer = styled(Container)`
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #666;
  padding: 0;
`;

const StyledWhitepapersInputLeft = styled.div``;

const StyledWhitepapersInputSubtitle = styled(Text)`
  padding-right: 8px;
  border-right: 1px solid #aaa;
`;

const StyledWhitepapersInputRight = styled.div`
  position: relative;
  flex-grow: 1;
`;

const StyledWhitepapersLabel = styled.label<{
  $isActive: boolean
}>`
  color: #666;
  position: absolute;
  top: 50%;
  left: 15px;
  transition-duration: 300ms;

  transform: ${({ $isActive }) =>
    $isActive
      ? css`translate(-10%, -125%) scale(0.8)`
      : css`translate(0, -50%)`
  };
`;

const StyledWhitepapersInput = styled(Input)`
  background-color: transparent;
  border: none;

  input {
    color: #fff;
  }

  path {
    fill: #aaa;
  }
`;

export {
  StyledWhitepapersInputWrapper,
  StyledWhitepapersInputContainer,
  StyledWhitepapersInputLeft,
  StyledWhitepapersInputSubtitle,
  StyledWhitepapersInputRight,
  StyledWhitepapersLabel,
  StyledWhitepapersInput,
};