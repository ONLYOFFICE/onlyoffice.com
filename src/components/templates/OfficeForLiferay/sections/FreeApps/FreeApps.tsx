import { useTranslation, Trans } from "next-i18next";
import {
  StyledFreeAppsHeading,
  StyledSection,
  StyledChooseSolution,
} from "./FreeApps.styled";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";
import { Button } from "@src/components/ui/Button";

const FreeApps = () => {
  const { t } = useTranslation("office-for-liferay");

  return (
    <StyledSection>
      <Container>
        <StyledFreeAppsHeading level={2} textAlign="center">
          <Trans
            t={t}
            i18nKey="FreeAppsHeading"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </StyledFreeAppsHeading>

        <StyledChooseSolution
          largeItems={items.map((item) => ({
            imgUrl: item.imgUrl,
            text: (
              <Trans
                t={t}
                i18nKey={String(item.text)}
                components={[<b key={0} />]}
              />
            ),
            customLinks: item.customLinks?.map((link, index) =>
              <Button
                  key={index}
                  id={link.id}
                  as="a"
                  href={link.url}
                  target={link.isExternal ? "_blank" : undefined}
                >
                  {t(link.label ?? "")}
                </Button>
            ),
          }))}
        />
      </Container>
    </StyledSection>
  );
};

export { FreeApps };
