import { useState } from "react";
import { useTranslation } from "next-i18next";
import { CardForm } from "../CardForm";
import { ICardDatasheetsItemsProps } from "@src/components/templates/Whitepapers/Whitepapers.types";

import {
  StyledCardDatasheets,
  StyledCardDatasheetsButton,
  StyledCardDatasheetsButtonWrapper,
  StyledCardDatasheetsImage,
  StyledCardDatasheetsProduct,
  StyledCardDatasheetsTitle
} from "./CardDatasheets.styled";

const CardDatasheets = ({ title, product, image_url, download_url }: ICardDatasheetsItemsProps) => {
  const { t } = useTranslation("whitepapers");
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
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
            download
            href={download_url}
            onClick={() => setOpenModal(true)}
          />
        </StyledCardDatasheetsButtonWrapper>
      </StyledCardDatasheets>

      {openModal && (
        <CardForm setOpenModal={setOpenModal} download_url={download_url} />
      )}
    </>
  );
};

export { CardDatasheets };