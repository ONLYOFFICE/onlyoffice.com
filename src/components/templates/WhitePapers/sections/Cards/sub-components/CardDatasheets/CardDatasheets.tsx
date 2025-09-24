import { useState } from "react";
import { useTranslation } from "next-i18next";
import { CardForm } from "../CardForm";
import { ICardItem } from "@src/components/templates/WhitePapers/WhitePapers.types";
import { ILocale } from "@src/types/locale";

import {
  StyledCardDatasheets,
  StyledCardDatasheetsBottom,
  StyledCardDatasheetsButton,
  StyledCardDatasheetsButtonWrapper,
  StyledCardDatasheetsImage,
  StyledCardDatasheetsTitle,
  StyledCardDatasheetsLabel,
  StyledCardDatasheetsTop,
  StyledCardDatasheetsBottomText,
} from "./CardDatasheets.styled";
import { formatDateCards } from "../../utils/formatDateCards";
import { Text } from "@src/components/ui/Text";

const CardDatasheets = ({ title, product, icon_position_y, download_url, displayOther, locale, id_url, date, type }: ICardItem & ILocale) => {
  const { t } = useTranslation("whitepapers");
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <StyledCardDatasheets $displayOther={displayOther}>
        <StyledCardDatasheetsLabel type={type} label={t(type)}/>
        <StyledCardDatasheetsTop>
          <StyledCardDatasheetsImage
            $icon_position_y={icon_position_y}
          />
          <StyledCardDatasheetsTitle
            label={t(title)}
            level={4}
            size={5}
          />
        </StyledCardDatasheetsTop>
        <StyledCardDatasheetsBottom>
          <StyledCardDatasheetsBottomText
            label={t(product)}
            product={product}
            size={4}
            fontStyle="italic"
            color="#333"
          />
          <Text
            label={formatDateCards(date, locale)}
            color='#808080'
            fontStyle='italic'
            size={4}
            />
        </StyledCardDatasheetsBottom>
        <StyledCardDatasheetsButtonWrapper>
          <StyledCardDatasheetsButton
            label={t("CardsButtonDownload")}
            variant='quinary'
            borderRadius='3px'
            download
            href={download_url}
            onClick={() => setOpenModal(true)}
          />
        </StyledCardDatasheetsButtonWrapper>
      </StyledCardDatasheets>

      {openModal && (
        <CardForm
          openModal={openModal}
          setOpenModal={setOpenModal}
          download_url={download_url}
          locale={locale}
          id_url={id_url}
        />
      )}
    </>
  );
};

export { CardDatasheets };