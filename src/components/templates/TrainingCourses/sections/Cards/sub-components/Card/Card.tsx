// import { useState } from 'react';
import { useTranslation } from 'next-i18next';
// import { CardForm } from '../CardForm';
import { ICardsDataItem } from '@src/components/templates/TrainingCourses/TrainingCourses.types';
import { ILocale } from '@src/types/locale';

import {
  StyledCard
} from "./Card.styled";


const Card = ({ title, description }: ICardsDataItem & ILocale) => {
  const { t } = useTranslation("training-courses");
  // const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <StyledCard>
        <StyledCardTop></StyledCardTop>
        <StyledCardDescription></StyledCardDescription>
        <StyledCardBottom></StyledCardBottom>
      </StyledCard>

      {/* {openModal &&
        <CardForm
          openModal={openModal}
          setOpenModal={setOpenModal}
          locale={locale}
        />
      } */}
    </>
  );
};

export { Card };