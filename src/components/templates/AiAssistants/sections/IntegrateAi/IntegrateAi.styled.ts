import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledIntegrateAiSection = styled.div`
  padding: 0;
  background-color: #333333;
  border-top: 1px solid #e2e2e2;
  border-bottom: 1px solid #444444;

  &:last-of-type {
    border-top: none;
    border-bottom: 1px solid #e2e2e2;
  }
`;

const StyledIntegrateAiWrapper = styled.div`
  height: 460px;
  display: grid;
  grid-template-columns: auto 328px;
  align-items: center;
  gap: 32px;

  @media ${device.tabletS} {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 767px) {
    height: auto;
    grid-template-columns: 1fr;
    gap: 16px;
    justify-items: center;
    padding: 48px 0;
  }
`;

const StyledIntegrateAiContent = styled.div`
  display: grid;
  gap: 24px;
`;

const StyledIntegrateAiBtnsWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media ${device.mobile} {
    display: grid;
  }
`;

const StyledIntegrateAiImage = styled.div<{ $image: string }>`
  background-image: url(${({ $image }) => $image});
  background-size: cover;
  width: 100%;
  height: 100%;

  @media (max-width: 767px) {
    width: 200px;
    height: 280px;
  }
`;

export {
  StyledIntegrateAiSection,
  StyledIntegrateAiWrapper,
  StyledIntegrateAiContent,
  StyledIntegrateAiBtnsWrapper,
  StyledIntegrateAiImage,
};
