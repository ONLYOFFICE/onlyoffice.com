import styled, { css } from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { ILoaderButton } from "@src/components/ui/LoaderButton";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledCardItemHeading = styled(Heading)`
  margin-bottom: 16px;
  transition-duration: 300ms;
`;

const StyledCardItemImg = styled.div<{
  $image: string;
}>`
  width: 55px;
  height: 55px;
  background-image: ${({ $image }) => `url(${$image})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  filter: grayscale(1);
  transition-duration: 300ms;
`;

const StyledCardItemLink = styled(Link)`
  position: absolute;
  top: -32px;
  left: 0;
  padding-left: 32px;
  visibility: hidden;
  opacity: 0;
  transition-duration: 300ms;

  &::before {
    content: "";
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: transparent;
    background-image: url(${getAssetUrl('/images/icons/play.svg')});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transition-duration: 300ms;
  }
`;

const StyledCardItem = styled.li<{
  $isUpcomingWebinar: boolean;
}>`
  width: 100%;
  max-width: 544px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: 0 7px 25px rgba(0,0,0,0.1);
  transition-duration: 300ms;
  padding: 32px 32px 0;
  overflow: hidden;

  ${({$isUpcomingWebinar}) => $isUpcomingWebinar && css`
    cursor: pointer;
  `}

  &:hover {
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);

    ${StyledCardItemHeading} {
      color: #ff6f3d;
    }

    ${StyledCardItemImg} {
      filter: grayscale(0);
    }

    ${StyledCardItemLink} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const StyledCardItemTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
`;

const StyledCardItemContent = styled.div`
  min-height: 280px;
  padding-bottom: 42px;
  flex-grow: 1;
`;

const StyledCardItemBottom = styled.div`
  display: flex;
  align-items: center;
  height: 118px;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  position: relative;
  gap: 16px;
`;

const StyledCardItemSubtitle = styled(Heading)`
  font-weight: 400;
`;

const StyledCardItemModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.25);
  overflow-y: scroll;
  opacity: 1;
  transition-duration: 300ms;
  cursor: pointer;

  @starting-style {
    opacity: 0;
  }
`;

const StyledCardItemModalContent = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 64px 0 32px;
  background-color: #fff;
  border-radius: 10px;
  margin: auto;
  position: relative;
  cursor: auto;
`;

const StyledCardItemModalClose = styled.div`
  background-image: url(${getAssetUrl('/images/icons/close.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 32px;
  right: 32px;
  cursor: pointer;
`;

const StyledCardItemModalDesc = styled.div`
  padding: 0 32px;
`;

const StyledCardItemModalHeading = styled(Heading)`
  margin-bottom: 32px;
`;

const StyledCardItemModalText = styled(Text)`
  margin-bottom: 16px;
`;

const StyledCardItemModalProduct = styled(Text)`
  margin-bottom: 28px;
`;

const StyledCardItemModalInfo = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;
const StyledCardItemModalBy = styled.div`

  & p:first-child {
      font-weight: bold;
      margin-bottom: 2px;
    }
`;
const StyledCardItemModalLang = styled.div`

  & p:first-child {
      font-weight: bold;
      margin-bottom: 2px;
    }
`;

const StyledCardItemModalForm = styled.form`
  margin-top: 32px;
  padding: 32px 32px 0;
  border-top: 1px solid #dbdbdb;
`;

const StyledCardItemModalInputWrapper = styled.div`
  margin-bottom: 16px;
`;

const StyledCardItemModalPlease = styled(Text)`
  font-size: 12px;
  line-height: 16px;
  margin: 20px 0 16px;
  color: #666;
`;

const StyledCardItemModalAgreement = styled(Text)`
  margin-top: 16px;
`;

const StyledCardItemModalButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 32px;

  & > button {
    width: 50%;
  }
`;

const StyledCardItemStatusText = styled(Text)<{
  $status: ILoaderButton["status"];
}>`
  display: ${({ $status }) => $status === "success" ? "block" : "none"};
  margin-top: 16px;
`;

export {
  StyledCardItem,
  StyledCardItemTop,
  StyledCardItemContent,
  StyledCardItemHeading,
  StyledCardItemLink,
  StyledCardItemBottom,
  StyledCardItemImg,
  StyledCardItemSubtitle,
  StyledCardItemModal,
  StyledCardItemModalContent,
  StyledCardItemModalDesc,
  StyledCardItemModalClose,
  StyledCardItemModalHeading,
  StyledCardItemModalText,
  StyledCardItemModalProduct,
  StyledCardItemModalInfo,
  StyledCardItemModalBy,
  StyledCardItemModalLang,
  StyledCardItemModalForm,
  StyledCardItemModalInputWrapper,
  StyledCardItemModalPlease,
  StyledCardItemModalAgreement,
  StyledCardItemModalButtons,
  StyledCardItemStatusText,
 };