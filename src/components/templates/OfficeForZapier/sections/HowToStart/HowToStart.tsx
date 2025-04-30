import { useTranslation, Trans } from "next-i18next";
import { StyledHowToStart, StyledHowToStartInfo } from "./HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

const HowToStart = () => {
  const { t } = useTranslation("office-for-zapier");

  return (
    <StyledHowToStart id="how-to-start" background="#ffffff">
      <Container>
        <Heading level={2} textAlign="center" label={t("HowToStart")} />

        <StepCarousel
          items={items.map((item) => ({
            imgUrl: item.imgUrl,
            heading: item.headingLinks ? (
              <Trans
                t={t}
                i18nKey={String(item.heading)}
                components={item.headingLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    target={link.isExternal ? "_blank" : undefined}
                    color="main"
                    textUnderline
                    hover="underline-none"
                  />
                ))}
              />
            ) : (
              <Trans
                t={t}
                i18nKey={String(item.heading)}
                components={[<Text as="b" key={0} />]}
              />
            ),
          }))}
        />

        <StyledHowToStartInfo>
          <Text size={2} textAlign="center">
            <Trans
              t={t}
              i18nKey="ReadDetailedInstructions"
              components={[
                <Link
                  key={0}
                  id="how-to-start-instructions"
                  href="https://helpcenter.onlyoffice.com/integration/zapier-docspace.aspx"
                  target="_blank"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
              ]}
            />
          </Text>
        </StyledHowToStartInfo>
      </Container>
    </StyledHowToStart>
  );
};

export { HowToStart };
