import { useTranslation, Trans } from "next-i18next";
import { StyledHowToStart } from "./HowToStart.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { items } from "./data/items";
import { getAssetUrl } from "@src/utils/getAssetUrl";

const HowToStart = () => {
  const { t } = useTranslation("office-for-trello");

  return (
    <StyledHowToStart id="how-to-start" background="#f9f9f9">
      <Container>
        <Heading level={2} textAlign="center" label={t("HowToStart")} />

        <StepCarousel
          items={items.map((item) => ({
            imgUrl: getAssetUrl(item.imgUrl),
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
      </Container>
    </StyledHowToStart>
  );
};

export { HowToStart };
