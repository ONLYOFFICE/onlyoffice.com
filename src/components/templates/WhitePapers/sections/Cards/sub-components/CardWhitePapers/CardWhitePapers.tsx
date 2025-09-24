import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Text } from '@src/components/ui/Text';
import { CardForm } from '../CardForm';
import { formatDateCards } from '../../utils/formatDateCards';
import { ICardItem } from '@src/components/templates/WhitePapers/WhitePapers.types';
import { ILocale } from '@src/types/locale';

import {
  StyledCardWhitePapers,
  StyledCardWhitePapersButton,
  StyledCardWhitePapersDate,
  StyledCardWhitePapersDescription,
  StyledCardWhitePapersFooter,
  StyledCardWhitePapersHeader,
  StyledCardWhitePapersHeading,
  StyledCardWhitePapersMain,
  StyledCardWhitePapersTitle,
} from './CardWhitePapers.styled';


const CardWhitePapers = ({ type, title, date, download_url, locale, product, id_url }: ICardItem & ILocale) => {
  const { t } = useTranslation("whitepapers");
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <StyledCardWhitePapers>
        <StyledCardWhitePapersHeader>
          <StyledCardWhitePapersHeading
            level={5}
            size={6}
            label={title}
            color={"#fff"}
          />
          <Text
            label={t("CardsWhitepaper")}
            color='#fff'
            size={4}
          />
        </StyledCardWhitePapersHeader>
        <StyledCardWhitePapersMain>
          <StyledCardWhitePapersTitle
            level={3}
            size={5}
            label={title}
          />
          <StyledCardWhitePapersDate
            label={formatDateCards(date, locale)}
            color='#808080'
            fontStyle='italic'
            size={4}
          />
          <StyledCardWhitePapersDescription
            size={4}
          />
        </StyledCardWhitePapersMain>
        <StyledCardWhitePapersFooter>
          <StyledCardWhitePapersButton
            label={t("CardsButtonDownload")}
            variant='quinary'
            borderRadius='3px'
            onClick={() => setOpenModal(true)}
          />
        </StyledCardWhitePapersFooter>
      </StyledCardWhitePapers>

      {openModal &&
        <CardForm
          download_url={download_url}
          openModal={openModal}
          setOpenModal={setOpenModal}
          locale={locale}
          id_url={id_url}
        />
      }
    </>
  );
};

export { CardWhitePapers };