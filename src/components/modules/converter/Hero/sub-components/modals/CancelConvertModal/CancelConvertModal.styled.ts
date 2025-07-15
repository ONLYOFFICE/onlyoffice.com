import styled from "styled-components";
import { device } from "@src/utils/device";
import {
  themeColors,
  IThemeColors,
} from "@src/components/modules/converter/Hero/config/theme";

const StyledCancelConvertModal = styled.div<{ $theme?: keyof IThemeColors }>`
  display: grid;
  row-gap: 24px;
  border: 2px solid
    ${(props) => (props.$theme ? themeColors[props.$theme] : "#ff6f3d")};
  border-radius: 8px;
  padding: 40px 64px;
  background-color: #ffffff;
  box-shadow: 0px 7px 25px 0px rgba(85, 85, 85, 0.15);
  overflow: hidden;

  @media ${device.mobile} {
    row-gap: 16px;
    padding: 20px;
  }
`;

const StyledCancelConvertModalBtns = styled.div`
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

export { StyledCancelConvertModal, StyledCancelConvertModalBtns };
