import { useTranslation, Trans } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";
//import { getAssetUrl } from "@utils/getAssetUrl";
import { StyledHeading } from "./HowItWorks.styled";

const HowItWorks = () => {
  const { t } = useTranslation("mcp-server");

  return (
    <Section>
      <Container>
        <StyledHeading level={2} textAlign="center" label={t("HowItWorks")} color="#fff" />

        <StepCarousel
          theme="dark"
          items={items.map((item) => ({
            imgUrl: item.imgUrl,
            title: t(String(item.title)),
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
    </Section>
  );
};

export { HowItWorks };
