import { useTranslation } from 'next-i18next';
import { Section } from '@src/components/ui/Section';
import { Button } from '@src/components/ui/Button';
import { Text } from '@src/components/ui/Text';

import { StyledStoryContainer } from './Story.styled';

const Story = () => {
  const { t } = useTranslation("customers");

  return (
    <Section>
      <StyledStoryContainer>
        <Button as="a"
          href="mailto:press@onlyoffice.com?subject=I%20want%20to%20share%20my%20experience%20with%20ONLYOFFICE"
          label={t("HeroButtonTellYour")}
          borderRadius="3px"
        />
        <Text as={"span"} label="or" size={3} />
        <Button
          as="a"
          href="/registration?from=customers"
          label={t("StartYourStory")}
          borderRadius="3px"
          variant="secondary"
        />
      </StyledStoryContainer>
    </Section>
  );
};

export { Story };