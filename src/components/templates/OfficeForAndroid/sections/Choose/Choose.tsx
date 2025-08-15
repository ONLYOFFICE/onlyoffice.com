import { useRouter } from "next/router";
import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { items } from "./data/items";

import {
  StyledChooseButtonsWrapper,
  StyledChooseHeading,
  StyledChooseList,
  StyledChooseSubtitle,
} from "./Choose.styled";
import { DownloadButton } from "@src/components/ui/DownloadButton";

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
          <DownloadButton
            platform="google-play"
            variant="secondary"
            href={
              locale === "zh"
                ? "/zh/download-desktop#mobile"
                : "https://play.google.com/store/apps/details?id=com.onlyoffice.documents"
            }
            target="_blank"
          />
          <DownloadButton
            platform="app-gallery"
            variant="secondary"
            href="https://appgallery.huawei.com/#/app/C102942717"
            target="_blank"
          />
          {locale === "zh" && (
            <DownloadButton
              platform="apk"
              variant="secondary"
              href="https://download.onlyoffice.com/install/mobile/android/onlyoffice-documents.apk"
              target="_blank"
            />
          )}
        </StyledChooseButtonsWrapper>
        <StyledChooseSubtitle textAlign="center" size={3} color="#fff">
          <Trans
            t={t}
            i18nKey="HaveQuestions"
            components={[
              <Link
                key="0"
                href="https://helpcenter.onlyoffice.com/mobile-applications/documents/android/overview.aspx"
                color="main"
                textUnderline={true}
                hover="underline-none"
                target="_blank"
              />,
            ]}
          />
        </StyledChooseSubtitle>
      </Container>
    </Section>
  );
};

export { Choose };
