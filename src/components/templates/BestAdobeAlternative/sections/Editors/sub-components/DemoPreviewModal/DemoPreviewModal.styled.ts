import { Heading } from "@src/components/ui/Heading";
import styled from "styled-components";

const StyledDemoPreviewModal = styled.div`
  padding: 20px;
  display: grid;
  gap: 13px;
  background-color: #fff;
  box-shadow: 0 7px 25px rgba(85, 85, 85, 0.15);
  justify-items: start;
`;

const StyledDemoPreviewModalTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledDemoPreviewModalHeading = styled(Heading)`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`;

const StyledDemoPreviewModalTopButton = styled.button`
  width: 14px;
  height: 24px;
  border: none;
  background-color: transparent;
  background-image: url("/images/icons/cross.svg");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const StyledDemoPreviewModalContent = styled.pre`
  width: 100%;
  white-space: pre-wrap;
  border: 1px solid #e5e5e5;
  padding: 20px;
  text-align: start;
  color: #000;
`;


export {
  StyledDemoPreviewModal,
  StyledDemoPreviewModalTop,
  StyledDemoPreviewModalHeading,
  StyledDemoPreviewModalTopButton,
  StyledDemoPreviewModalContent,
};
