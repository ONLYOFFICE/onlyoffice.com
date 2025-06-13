import { Text } from "@src/components/ui/Text";
import styled from "styled-components";

const StyledLoadingConverterWrapper = styled.div<{
  $color?: string;
  $borderStyle?: string;
}>`
  width: 100%;
  padding: 48px;
  display: grid;
  gap: 32px;
  justify-items: center;
  background-color: #fff;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ $color }) => $color};
  border-style: ${({ $borderStyle }) => $borderStyle || "solid"};
`;

const StyledLoadingConverterTextWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 42px;
`;

const StyledLoadingConverterText = styled(Text)<{ $opacity: boolean }>`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  opacity: 0;
  opacity: ${({ $opacity }) => ($opacity ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

export {
  StyledLoadingConverterWrapper,
  StyledLoadingConverterTextWrapper,
  StyledLoadingConverterText,
};
