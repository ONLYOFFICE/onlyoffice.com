import styled from "styled-components";
import { IConnectorCard } from "./ConnectorCard.types";
import { device } from "@src/utils/device";

const StyledConnectorCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  width: 100%;
  height: 100%;
  box-shadow: 0px 7px 15px 0px rgba(85, 85, 85, 0.1);
  transition: box-shadow 0.2s;

  .connector-card-btn {
    &.hidden {
      opacity: 0;
      visibility: hidden;
    }
  }

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const StyledConnectorCardImgWrapper = styled.div<{
  $imgBgColor: IConnectorCard["imgBgColor"];
}>`
  border-radius: 5px;
  padding: 40px;
  background: ${({ $imgBgColor }) => ($imgBgColor ? $imgBgColor : "#f5f5f5")};

  @media ${device.tablet} {
    padding: 40px 28px;
  }

  @media ${device.mobile} {
    padding: 32px 42px;
  }
`;

const StyledConnectorCardImg = styled.div<{
  $imgUrl: IConnectorCard["imgUrl"];
}>`
  width: 100%;
  height: 80px;
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const StyledConnectorCardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  height: 100%;
  background-color: #ffffff;

  @media ${device.mobile} {
    padding: 24px;
  }
`;

const StyledConnectorCardHeading = styled.div`
  margin-bottom: 16px;

  h4 {
    display: inline;

    &:not(:last-child) {
      margin-right: 6px;
    }
  }
`;

const StyledConnectorCardText = styled.div`
  margin-bottom: 16px;
  min-height: 138px;

  @media ${device.mobile} {
    min-height: initial;
  }
`;

const StyledConnectorCardInfo = styled.div`
  display: grid;
  row-gap: 4px;
  margin: auto 0 24px;
  font-size: 13px;
  line-height: 21px;
  color: #aaaaaa;

  @media ${device.mobile} {
    margin: auto 0 20px;
  }
`;

export {
  StyledConnectorCard,
  StyledConnectorCardImgWrapper,
  StyledConnectorCardImg,
  StyledConnectorCardBody,
  StyledConnectorCardHeading,
  StyledConnectorCardText,
  StyledConnectorCardInfo,
};
