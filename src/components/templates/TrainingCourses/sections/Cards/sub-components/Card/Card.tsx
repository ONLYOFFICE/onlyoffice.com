// import { useState } from 'react';
import { useTranslation } from 'next-i18next';
// import { CardForm } from '../CardForm';
import { ICardsDataItemProp } from "@src/components/templates/TrainingCourses/TrainingCourses.types";

import {
  StyledCard,
  StyledCardBottom,
  StyledCardDescription,
  StyledCardIcon,
  StyledCardNew,
  StyledCardTitle,
  StyledCardSessions,
  StyledCardHours,
  StyledCardPrice,
  StyledCardTop,
  StyledCardText,
} from "./Card.styled";


const Card = ({ icon_url, new: isNew, title, sessions, hours, price, description }: ICardsDataItemProp) => {
  const { t } = useTranslation("training-courses");
  // const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <StyledCard>
        <StyledCardTop>
          {isNew && (
            <StyledCardNew
              label={t("NewSign")}
              color='main'
            />
          )}
          <StyledCardIcon $iconUrl={icon_url} />
        </StyledCardTop>
        <StyledCardDescription>
          <StyledCardTitle
            label={title}
            level={3}
            size={5}
          />
          <StyledCardSessions color='#aaa' size={4}>
            {t("Sessions")} {sessions}
          </StyledCardSessions>
          <StyledCardHours color='#aaa' size={4}>
            {t("Hours")} {hours}
          </StyledCardHours>
          <StyledCardPrice color='#aaa' size={4}>
            <span>{t("Price")}</span> {price}
          </StyledCardPrice>
          <StyledCardText label={description} size={4} />
        </StyledCardDescription>
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