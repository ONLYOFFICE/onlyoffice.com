import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 56px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    justify-items: center;
    margin-top: 40px;
  }

  @media ${device.mobile} {
    margin-top: 32px;
  }
`;

const StyledCard = styled.div`
  max-width: 352px;
  width: 100%;
  display: grid;
  justify-items: center;
  padding: 40px 48px;
  background-color: #ffffff;
  border: 1px solid #e2e2e2;
  text-align: center;

  @media ${device.mobile} {
    padding: 32px;
  }
`;

const StyledCardImage = styled.img`
  max-width: 224px;
  width: 100%;
  height: auto;
  margin: 24px 0 16px;

  @media ${device.mobile} {
    width: 168px;
    height: 116px;
  }
`;

export { StyledCardWrapper, StyledCard, StyledCardImage };
