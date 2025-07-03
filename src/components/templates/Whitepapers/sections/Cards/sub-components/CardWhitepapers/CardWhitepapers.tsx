import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Text } from '@src/components/ui/Text';
import { CardForm } from '../CardForm';
import { formatDateCards } from '../../utils/formatDateCards';
import { ICardWhitepapersItemsProps } from '@src/components/templates/Whitepapers/Whitepapers.types';

import {
  StyledCardWhitepapers,
  StyledCardWhitepapersButton,
  StyledCardWhitepapersDate,
  StyledCardWhitepapersDescription,
  StyledCardWhitepapersFooter,
  StyledCardWhitepapersHeader,
  StyledCardWhitepapersHeading,
  StyledCardWhitepapersMain,
  StyledCardWhitepapersTitle,
} from './CardWhitepapers.styled';


const CardWhitepapers = ({ head, title, date, download_url, description }: ICardWhitepapersItemsProps) => {
  const { locale } = useRouter();
  const { t } = useTranslation("whitepapers");
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <StyledCardWhitepapers>
        <StyledCardWhitepapersHeader>
          <StyledCardWhitepapersHeading
            level={5}
            size={6}
            label={head}
            color={"#fff"}
          />
          <Text
            label={t("CardsWhitepaper")}
            color='#fff'
            size={4}
          />
        </StyledCardWhitepapersHeader>
        <StyledCardWhitepapersMain>
          <StyledCardWhitepapersTitle
            level={3}
            size={5}
            label={title}
          />
          <StyledCardWhitepapersDate
            label={formatDateCards(date, locale)}
            color='#808080'
            fontStyle='italic'
            size={4}
          />
          <StyledCardWhitepapersDescription
            label={description}
            size={4}
          />
        </StyledCardWhitepapersMain>
        <StyledCardWhitepapersFooter>
          <StyledCardWhitepapersButton
            label={t("CardsButtonDownload")}
            variant='quinary'
            borderRadius='3px'
            onClick={() => setOpenModal(true)}
          />
        </StyledCardWhitepapersFooter>
      </StyledCardWhitepapers>

      {openModal &&
        <CardForm
          download_url={download_url}
          setOpenModal={setOpenModal}
        />
      }
    </>
  );
};

export { CardWhitepapers };