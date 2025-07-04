import styled from "styled-components";
import { ICardDatasheetsItems } from "@src/components/templates/Whitepapers/Whitepapers.types";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const StyledCardDatasheets = styled.div<{
  $displayOther: boolean
}>`
  display: ${({ $displayOther }) => $displayOther ? "flex" : "none"};
  flex-direction: column;
  background-color: #fff;
  padding: 32px;
`;

const StyledCardDatasheetsImage = styled.div<{
  $image_url: ICardDatasheetsItems["image_url"];
}>`
  width: 72px;
  height: 72px;
  background-image: url(${({ $image_url }) => $image_url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 21px;
`;

const StyledCardDatasheetsTitle = styled(Heading)`
  margin-bottom: 16px;
`;

const StyledCardDatasheetsProduct = styled(Text)`
  margin-bottom: 16px;
`;

const StyledCardDatasheetsButtonWrapper = styled.div`
  margin-top: auto;
`;

const StyledCardDatasheetsButton = styled(Button)`
  width: 100%;
  color: #000;
`;

export {
  StyledCardDatasheets,
  StyledCardDatasheetsImage,
  StyledCardDatasheetsTitle,
  StyledCardDatasheetsProduct,
  StyledCardDatasheetsButtonWrapper,
  StyledCardDatasheetsButton
}