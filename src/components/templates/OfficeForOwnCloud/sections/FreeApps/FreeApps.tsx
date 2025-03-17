import { useTranslation, Trans } from "next-i18next";
import { StyledFreeAppsHeading } from "./FreeApps.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { ChooseSolution } from "@src/components/widgets/ChooseSolution";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";
import { Button } from "@src/components/ui/Button";

const FreeApps = () => {
  const { t } = useTranslation("office-for-owncloud");

  return (
    <Section>
      <Container>
        <StyledFreeAppsHeading level={2} textAlign="center">
          <Trans
            t={t}
            i18nKey="FreeAppsHeading"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </StyledFreeAppsHeading>

        <ChooseSolution
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
              "label" in link ? (
                <Button
                  key={index}
                  id={link.id}
                  as="a"
                  href={link.url}
                  target={link.isExternal ? "_blank" : undefined}
                >
                  {"label" in link ? t(String(link.label)) : ""}
                </Button>
              ) : null,
            ),
          }))}
        />
      </Container>
    </Section>
  );
};

export { FreeApps };
