import styled, { css } from "styled-components";
import { IConnectorCard } from "./ConnectorCard.types";
import { device } from "@src/utils/device";
import { Button } from "@src/components/ui/Button";
import { Heading } from "@src/components/ui/Heading";
import { Badge } from "@src/components/ui/Badge";

const StyledConnectorCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  width: 100%;
  height: 100%;
  transition: box-shadow 0.2s;
  border: 1px solid #E5E5E5;
  box-shadow: 0px 7px 15px 0px #5555551A;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const StyledConnectorCardImgWrapper = styled.div<{
  $imgBgColor: IConnectorCard["image"]["bgColor"];
}>`
  position: relative;
  display: flex;
  padding: 24px 24px 0px;
  align-items: center;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background: #fff;
  gap: 16px;

@media ${device.tablet} {
    padding: 40px 28px;
  }

  @media ${device.mobile} {
    padding: 32px 42px;
  }
`;

const StyledConnectorCardImg = styled.div<{
  $imgUrl: IConnectorCard["image"]["url"];
}>`
  width: 88px;
  height: 88px;
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const StyledConnectorCardHeadingFor = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledConnectorCardHeadingName = styled(Heading)`
  font-weight: 400;
  font-size:12px;
  text-transform: uppercase;
`;

const StyledConnectorCardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px 32px;
  height: 100%;
  background-color: #ffffff;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;

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

const StyledBadge = styled(Badge)`
  position: absolute;
    right: 24px;
    top: 24px;
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

const StyledConnectorCardButton = styled(Button)<{ $isHidden?: boolean }>`
  height: 48px;
  min-height: 48px;
  margin: 0 8px;

  ${(props) =>
    props.$isHidden &&
    css`
      opacity: 0;
      visibility: hidden;
    `}
`;

export {
  StyledConnectorCard,
  StyledConnectorCardImgWrapper,
  StyledConnectorCardImg,
  StyledConnectorCardBody,
  StyledConnectorCardHeading,
  StyledConnectorCardText,
  StyledConnectorCardInfo,
  StyledConnectorCardButton,
  StyledConnectorCardHeadingFor,
  StyledConnectorCardHeadingName,
  StyledBadge,
};
