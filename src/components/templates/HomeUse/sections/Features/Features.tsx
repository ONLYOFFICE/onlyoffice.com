import { useTranslation, Trans } from "next-i18next";
import { HomeUseFeatureImageItemWrapper } from "./Features.styled";
import { HomeUseFeatureImageItem } from "@src/components/modules/home-use/HomeUseFeatureImageItem";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";
import { useRouter } from "next/router";

const Features = () => {
  const { t } = useTranslation("home-use");
  const router = useRouter();
  const isChineseLocale = router.locale === "zh";

  return (
    <Section>
      <Container>
        <HomeUseFeatureImageItemWrapper>
          {items.map((item, index) => (
            <HomeUseFeatureImageItem
              key={index}
              heading={
                <Trans
                  t={t}
                  i18nKey={String(item.heading)}
                  components={[<Text as="span" color="main" key={0} />]}
                />
              }
              image={{
                url: item.image.url,
                url2x: item.image.url2x,
                height: item.image.height,
                width: item.image.width,
              }}
              text={t(item.text)}
              logos={item.logos}
              items={item.items.map((item, index) => ({
                label: (
                  <Trans
                    t={t}
                    key={index}
                    i18nKey={String(item.label)}
                    components={[<Text as="span" color="main" key={0} />]}
                  />
                ),
              }))}
              buttons={item.buttons?.map((button) => ({
                href: button.href,
                label: t(button.label),
                className: button.className,
              }))}
              downloadButtons={item.downloadButtons?.map((button) => ({
                href:
                  isChineseLocale && button.platform === "google-play"
                    ? "/download-desktop#mobile"
                    : button.href,
                label: t(button.label),
                platform: button.platform,
                variant: button.variant,
                imageSrc: t(button.imageSrc),
              }))}
              links={item.links?.map((link) => ({
                href: link.href,
                label: t(link.label),
              }))}
              contentWidth={544}
              justifyContent={"space-between"}
              position={item.position}
              alignItems={"flex-start"}
              marginTop={"7%"}
              displaytabletS={"none"}
            ></HomeUseFeatureImageItem>
          ))}
        </HomeUseFeatureImageItemWrapper>
      </Container>
    </Section>
  );
};

export { Features };
