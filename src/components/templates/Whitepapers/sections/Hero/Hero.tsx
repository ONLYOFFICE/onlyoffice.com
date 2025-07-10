import { memo } from 'react';
import { useTranslation } from 'next-i18next';
import { Section } from '@src/components/ui/Section';
import { Container } from '@src/components/ui/Container';

import { StyledHeroHeading, StyledHeroText } from './Hero.styled';

const HeroComponent = () => {
  const { t } = useTranslation("whitepapers");

  return (
    <Section
      background='#333333'
      desktopSpacing={["80px", "106px"]}
      tabletSpacing={["88px", "88px"]}
      tabletSmallSpacing={["80px", "80px"]}
      mobileSpacing={["48px", "48px"]}
    >
      <Container>
        <StyledHeroHeading
          label={t("WhitePapersAndDatasheets")}
          size={2}
          level={1}
          textAlign="center"
          color='#fff'
        />
        <StyledHeroText
          label={t("GetDeeperInsights")}
          textAlign='center'
          color='#fff'
        />
      </Container>
    </Section>
  );
};

const Hero = memo(HeroComponent);

export { Hero };