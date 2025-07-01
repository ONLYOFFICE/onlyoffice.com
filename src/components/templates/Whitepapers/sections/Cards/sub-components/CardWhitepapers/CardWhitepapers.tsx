import { useTranslation } from 'next-i18next';
import { Text } from '@src/components/ui/Text';
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


const CardWhitepapers = ({ head, title, date, description }: ICardWhitepapersItemsProps) => {
  const { t } = useTranslation("whitepapers");

  return (
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
          label={date}
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
        />
      </StyledCardWhitepapersFooter>
    </StyledCardWhitepapers>
  );
};

export { CardWhitepapers };