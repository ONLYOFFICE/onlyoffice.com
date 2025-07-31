import styled from "styled-components";
import { device } from "@src/utils/device";
import { LoaderButton, ILoaderButton } from "@src/components/ui/LoaderButton";
import { StyledInputWrapper } from "@src/components/ui/Input/Input.styled";
import { StyledLoaderButton } from "@src/components/ui/LoaderButton/LoaderButton.styled";

const StyledSubscribeInput = styled.div<{ $status: ILoaderButton["status"] }>`
  display: flex;
  align-items: start;

  ${StyledInputWrapper} {
    border-radius: 9px 0 0 9px;
    border-right: none;
  }

  ${StyledLoaderButton} {
    border-radius: 0 9px 9px 0;
  }
`;

const StyledSubscribeInputLoaderButton = styled(LoaderButton)`
  @media ${device.mobile} {
    padding: 15px 24px;
    min-width: 48px;
    min-height: 48px;
  }
`;

export { StyledSubscribeInput, StyledSubscribeInputLoaderButton };
