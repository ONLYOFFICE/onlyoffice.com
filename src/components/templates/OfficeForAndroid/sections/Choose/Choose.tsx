import { useRouter } from "next/router";
import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { items } from "./data/items";

import {
  StyledChooseButtonAppGallery,
  StyledChooseButtonGoogle,
  StyledChooseButtonsWrapper,
  StyledChooseHeading,
  StyledChooseList,
  StyledChooseSubtitle,
} from "./Choose.styled";

const Choose = () => {
  const { locale } = useRouter();
  const { t } = useTranslation("office-for-android");

  return (
    <Section background="linear-gradient(to right, #212121 0%, #333 100%);">
      <Container tabletSpacing="16px">
        <StyledChooseHeading
          level={2}
          size={3}
          color="#fff"
          textAlign="center"
          label={t("ChooseWhereToWork")}
        />
        <StyledChooseList>
          {items.map((item) => (
            <FeatureItem
              key={item.heading}
              icon={{
                url: item.iconUrl,
                height: "48px",
              }}
              heading={t(item.heading)}
              text={t(item.text)}
            />
          ))}
        </StyledChooseList>
        <StyledChooseButtonsWrapper $isZhLocale={locale === "zh"}>
              <StyledChooseButtonGoogle
                $backgroundUrl={t("ButtonGoogleUrl")}
                $isZhLocale={locale === "zh"}
                as={"a"}
                target="_blank"
                href={locale === "zh" ? "/zh/download-desktop#mobile" : "https://play.google.com/store/apps/details?id=com.onlyoffice.documents"}
              />
              <StyledChooseButtonAppGallery
                $backgroundUrl={t("ButtonAppGalleryUrl")}
                as={"a"}
                target="_blank"
                href="https://appgallery.huawei.com/#/app/C102942717"
              />
              {locale === "zh" && (
                <StyledChooseButtonAppGallery
                  $backgroundUrl="/images/templates/office-for-android/buttons/black-apk.svg"
                  as={"a"}
                  target="_blank"
                  href="https://download.onlyoffice.com/install/mobile/android/onlyoffice-documents.apk"
                />
              )}
            </StyledChooseButtonsWrapper>
        <StyledChooseSubtitle textAlign="center" size={3} color="#fff">
          <Trans
            t={t}
            i18nKey="HaveQuestions"
            components={[
              <Link key="0" href="https://helpcenter.onlyoffice.com/mobile-applications/documents/android/overview.aspx"
                    color="main"
                    textUnderline={true}
                    hover="underline-none"
                    target="_blank"
              />]}
          />
        </StyledChooseSubtitle>
      </Container>
    </Section>
  );
};

export { Choose };
