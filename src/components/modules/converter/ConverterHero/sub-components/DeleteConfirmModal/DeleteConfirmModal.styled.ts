import { Button } from "@src/components/ui/Button";
import styled from "styled-components";

const StyledDeleteConfirmModal = styled.div<{ $color: string }>`
  background-color: #fff;
  width: 100%;
  padding: 40px 80px;
  border: 2px solid ${({ $color }) => $color};
  display: grid;
  gap: 24px;
  justify-items: center;
  border-radius: 8px;
`;

const StyledDeleteConfirmModalBtnsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledChooseFileBtn = styled(Button)<{ $backgroundColor: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

export {
  StyledDeleteConfirmModal,
  StyledDeleteConfirmModalBtnsWrapper,
  StyledChooseFileBtn,
};
