import styled from "styled-components";
import { device } from "@src/utils/device";
import { Button } from "@src/components/ui/Button";


const StyledPRModal = styled.div`
  display: grid;
  row-gap: 24px;

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

const StyledPRModalButton = styled(Button)`
  justify-self: center;
  width: 134px;
`;

export {
  StyledPRModal,
  StyledPRModalButton,
};
