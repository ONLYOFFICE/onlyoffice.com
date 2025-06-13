import { Text } from "@src/components/ui/Text";
import styled from "styled-components";

const StyledFileErrorModal = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 8px;
  border: 2px solid #ff6f3d;
`;

const StyledFileErrorModalTop = styled(Text)`
  padding: 16px;
  background-color: #ff6f3d;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  text-align: center;
`;

const StyledFileErrorModalContent = styled.div`
  padding: 24px 64px;
  display: grid;
  gap: 24px;
  justify-items: center;
`;

const StyledFileErrorModalReason = styled(Text)`
  text-align: center;
`;

const StyledFileErrorModalBtns = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export {
  StyledFileErrorModal,
  StyledFileErrorModalTop,
  StyledFileErrorModalContent,
  StyledFileErrorModalReason,
  StyledFileErrorModalBtns,
};
