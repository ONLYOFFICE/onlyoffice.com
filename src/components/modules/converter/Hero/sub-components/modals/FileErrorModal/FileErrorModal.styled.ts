import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import {
  themeColors,
  IThemeColors,
} from "@src/components/modules/converter/Hero/config/theme";

const StyledFileErrorModal = styled.div<{ $theme?: keyof IThemeColors }>`
  border: 2px solid
    ${(props) => (props.$theme ? themeColors[props.$theme] : "#ff6f3d")};
  border-radius: 8px;
  background-color: #ffffff;
  overflow: hidden;
`;

const StyledFileErrorModalBody = styled.div`
  padding: 24px;

  @media ${device.mobile} {
    padding: 20px;
  }
`;

const StyledFileErrorModalHeading = styled(Heading)`
  padding: 16px 24px;
  background-color: #ff6f3d;

  @media ${device.mobile} {
    padding: 12px 20px;
  }
`;

const StyledFileErrorModalTextWrapper = styled.div`
  display: grid;
  row-gap: 8px;
  margin-bottom: 24px;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledFileErrorModalBtns = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 8px;

  @media ${device.mobile} {
    grid-template-columns: initial;
    grid-template-rows: auto auto;
    justify-content: initial;
  }
`;

export {
  StyledFileErrorModal,
  StyledFileErrorModalHeading,
  StyledFileErrorModalTextWrapper,
  StyledFileErrorModalBody,
  StyledFileErrorModalBtns,
};
