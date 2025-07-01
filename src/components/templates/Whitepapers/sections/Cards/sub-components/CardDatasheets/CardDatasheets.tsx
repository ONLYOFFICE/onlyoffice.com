import { useTranslation } from "next-i18next";
import { ICardDatasheetsItemsProps } from "@src/components/templates/Whitepapers/Whitepapers.types";

import {
  StyledCardDatasheets,
  StyledCardDatasheetsButton,
  StyledCardDatasheetsButtonWrapper,
  StyledCardDatasheetsImage,
  StyledCardDatasheetsProduct,
  StyledCardDatasheetsTitle
} from "./CardDatasheets.styled";

const CardDatasheets = ({ title, date, product, image_url }: ICardDatasheetsItemsProps) => {
  const { t } = useTranslation("whitepapers");
  console.log(date);

  return (
    <StyledCardDatasheets>
      <StyledCardDatasheetsImage
        $image_url={image_url}
      />
      <StyledCardDatasheetsTitle
        label={title}
        level={4}
        size={5}
      />
      <StyledCardDatasheetsProduct
        label={product}
        size={4}
        fontStyle="italic"
        color="#808080"
      />
      <StyledCardDatasheetsButtonWrapper>
        <StyledCardDatasheetsButton
          label={t("CardsButtonDownload")}
          variant='quinary'
          borderRadius='3px'
        />
      </StyledCardDatasheetsButtonWrapper>
    </StyledCardDatasheets>
  );
};

export { CardDatasheets };