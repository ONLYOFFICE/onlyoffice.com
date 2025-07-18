import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { CardForm } from '../CardForm';
import { ICardsDataItemProp } from "@src/components/templates/TrainingCourses/TrainingCourses.types";
import { ILocale } from '@src/types/locale';

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
  StyledCardButton,
  StyledCardContentWrapper,
  StyledCardReadMore,
} from "./Card.styled";

const Card = ({
  locale,
  icon_url,
  new: isNew,
  title,
  sessions,
  hours,
  price,
  description,
  course }: ICardsDataItemProp & ILocale) => {
  const { t } = useTranslation("training-courses");
  const [openModal, setOpenModal] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);
  const raw = t(description);
  const parts = raw.split(/<0>(.*?)<\/0>/);
  const beforeHidden = parts[0];
  const hiddenText = parts[1];
  const afterHidden = parts[2] || "";

  return (
    <>
      <StyledCard>
        <StyledCardTop>
          {isNew && (
            <StyledCardNew
              label={t("NewSign")}
            />
          )}
          <StyledCardIcon $iconUrl={icon_url} />
        </StyledCardTop>
        <StyledCardContentWrapper>
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
            <StyledCardText size={4}>
              {beforeHidden}
              {hiddenText && !isExpanded && (
                <StyledCardReadMore
                  onClick={() => setIsExpanded(true)}
                >
                  {t("ReadMore")}
                </StyledCardReadMore>
              )}
              {isExpanded && (
                <>
                  <span>{hiddenText}</span>
                  <span>{afterHidden}</span>
                </>
              )}
            </StyledCardText>
          </StyledCardDescription>
          <StyledCardBottom>
            <StyledCardButton
              label={t("SubmitRequest")}
              variant='tertiary'
              borderRadius='3px'
              onClick={() => setOpenModal(true)}
            />
          </StyledCardBottom>
        </StyledCardContentWrapper>
      </StyledCard>

      {openModal &&
        <CardForm
          openModal={openModal}
          setOpenModal={setOpenModal}
          locale={locale}
          course={course}
        />
      }
    </>
  );
};

export { Card };