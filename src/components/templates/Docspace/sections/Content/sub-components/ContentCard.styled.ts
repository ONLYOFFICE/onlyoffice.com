import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding-bottom: 32px;

  @media ${device.mobile} {
    padding-bottom: 24px;
    max-width: 120px;
  }
`;

const StyledCardHeading = styled.h3`
  font-size: 16px;
  font-weight: 700;
  transition: color 0.3s ease;
`;

const StyledCard = styled.div`
  text-align: center;
  width: 210px;

  @media ${device.mobile} {
    width: calc(50% - 8px);
  }
  @media ${device.mobileS} {
    width: 100%;
  }
`;

const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 40px 30px;
  background-color: #ffffff;
  text-decoration: none;
  color: inherit;
  text-align: center;

  &:hover {
    box-shadow: 0px 20px 50px rgba(85, 85, 85, 0.15);
    transition: 0.5s;

    ${StyledCardHeading} {
      color: #ff6f3d;
    }
  }
  @media ${device.mobile} {
    padding: 24px 16px;
  }
`;

export { StyledCardBody, StyledCardImage, StyledCardHeading, StyledCard };
