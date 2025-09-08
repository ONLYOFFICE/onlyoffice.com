import { useState } from "react";
import { useTranslation } from "next-i18next";
import { CardForm } from "../CardForm";
import { ICardDatasheetsItemsProps } from "@src/components/templates/WhitePapers/WhitePapers.types";
import { ILocale } from "@src/types/locale";

import {
  StyledCardDatasheets,
  StyledCardDatasheetsButton,
  StyledCardDatasheetsButtonWrapper,
  StyledCardDatasheetsImage,
  StyledCardDatasheetsProduct,
  StyledCardDatasheetsTitle
} from "./CardDatasheets.styled";

const CardDatasheets = ({ title, product, image_url, download_url, displayOther, locale, id_url }: ICardDatasheetsItemsProps & ILocale) => {
  const { t } = useTranslation("whitepapers");
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <StyledCardDatasheets $displayOther={displayOther}>
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