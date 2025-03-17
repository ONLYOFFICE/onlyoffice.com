import { useTranslation, Trans } from "next-i18next";
import { StyledHowToStart, StyledHowToStartText } from "./HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";

const HowToStart = () => {
  const { t } = useTranslation("office-for-dropbox");

  return (
    <StyledHowToStart bg="#f9f9f9">
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
              t(String(item.heading))
            ),
          }))}
        />

        <StyledHowToStartText size={2}>
          <Trans
            t={t}
            i18nKey="ExploreMoreDetails"
            components={[
              <Link
                key={0}
                href="https://www.onlyoffice.com/blog/2023/11/new-integration-available-onlyoffice-docs-and-dropbox"
                target={"_blank"}
                color="main"
                textUnderline
                hover="underline-none"
              />,
            ]}
          />
        </StyledHowToStartText>
      </Container>
    </StyledHowToStart>
  );
};

export { HowToStart };
