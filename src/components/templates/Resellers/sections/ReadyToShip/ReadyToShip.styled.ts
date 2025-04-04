import styled from "styled-components";

const StyledReadyToShipWrapper = styled.div`
  display: grid;
  row-gap: 32px;
  justify-items: center;
`;

const StyledReadyToShipIcon = styled.div`
  width: 64px;
  height: 64px;
  background-image: url("/images/templates/resellers/ready-to-ship/icon.svg");
`;

const StyledReadyToShipContent = styled.div`
  display: grid;
  row-gap: 16px;
  text-align: center;
`;

export {
  StyledReadyToShipWrapper,
  StyledReadyToShipIcon,
  StyledReadyToShipContent,
};
