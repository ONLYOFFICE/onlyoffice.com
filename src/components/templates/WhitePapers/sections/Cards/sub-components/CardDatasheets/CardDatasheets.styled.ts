import styled from "styled-components";
import { ICardItem } from "@src/components/templates/WhitePapers/WhitePapers.types";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { device } from "@src/utils/device";

const StyledCardDatasheets = styled.div<{
  $displayOther?: boolean
}>`
  display: ${({ $displayOther }) => $displayOther ? "flex" : "none"};
  border-radius: 9px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  box-shadow: 0 7px 15px 0 rgba(85, 85, 85, 0.1);
  border: 1px solid #e5e5e5;
  padding: 24px;
`;

const StyledCardDatasheetsLabel = styled(Text)<{type: ICardItem["type"]}>`
  background-color: ${({ type }) => type === "WhitePapers" ? "rgba(217, 244, 255, 0.5)" : "rgba(229, 243, 202, 0.5)"};
  border-radius: 20px;
  color: ${({ type }) => type === "WhitePapers" ? "#666666" : "#4D5244" };
  font-size: 13px;
  letter-spacing: 0.02em;
  line-height: 150%;
  text-align: center;
  padding: 4px 12px;
  margin-bottom: 16px;
  height: 28px;
  width: fit-content;
`;

const StyledCardDatasheetsTop = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 16px;
`;

const StyledCardDatasheetsImage = styled.div<{
  $icon_position_y: ICardItem["icon_position_y"];
}>`
  width: 106px;
  height: 90px;
  background-image: url("/images/templates/whitepapers/cards/icons_cards.svg");
  background-repeat: no-repeat;
  background-position-x: -8px;
  background-position-y: ${({ $icon_position_y }) => ($icon_position_y)};
  margin-bottom: 21px;
`;

const StyledCardDatasheetsTitle = styled(Heading)`
  flex: 1;
  word-break: break-word;
`;

const StyledCardDatasheetsBottom = styled.div`
  background-color: #f9f9f9;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5.5px 8px 5.5px 8px;
  margin-bottom: 16px;
  margin-top: auto;

  @media ${device.mobileS} {
    vertical-align: top;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StyledCardDatasheetsBottomText = styled(Text)<{product : ICardItem["product"]}>`
  position: relative;
  padding-left: 32px;

  &::before {
    content: "";
    position: absolute;
    background-image: url(${({ product }) => product === "ONLYOFFICEDocs" ? "/images/templates/whitepapers/cards/icon_docs.svg" : "/images/templates/whitepapers/cards/icon_docspace.svg"});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 24px 24px;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 24px;
    width: 24px;
  }
`;

const StyledCardDatasheetsButtonWrapper = styled.div``;

const StyledCardDatasheetsButton = styled(Button)`
  border-radius: 6px;
  color: #444;
  padding: 14px 24px;
  min-height: 48px;
  width: 100%;
`;

export {
  StyledCardDatasheets,
  StyledCardDatasheetsLabel,
  StyledCardDatasheetsTop,
  StyledCardDatasheetsImage,
  StyledCardDatasheetsBottom,
  StyledCardDatasheetsBottomText,
  StyledCardDatasheetsTitle,
  StyledCardDatasheetsButtonWrapper,
  StyledCardDatasheetsButton
}