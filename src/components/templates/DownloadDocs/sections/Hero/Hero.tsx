import { useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import {
  StyledHeroSection,
  StyledHeroDescription,
  StyledHeroBanner,
  StyledHeroProducts,
} from "./Hero.styled";
import { IHero } from "./Hero.types";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { Heading } from "@src/components/ui/Heading";
import { HeroTabs } from "@src/components/modules/download/HeroTabs";
import {
  DownloadModal,
  IDownloadModalData,
  IDownloadModalOnSubmitRequest,
} from "@src/components/widgets/download/DownloadModal";
import {
  DownloadBlock,
  IDownloadBlockButton,
} from "@src/components/widgets/download/DownloadBlock";
import { DownloadBanner } from "@src/components/widgets/download/DownloadBanner";
import { TooltipWrapper } from "./sub-components/TooltipWrapper";

const Hero = ({
  locale,
  enterpriseProducts,
  developerProducts,
  communityProducts,
  bundlesWithOwnCloudProducts,
  bundlesWithNextcloudProducts,
}: IHero) => {
  const { t } = useTranslation("download-docs");

  const initialFormData: IDownloadModalData = {
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    comment: "",
    buttonId: "",
    type: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [buttonAction, setButtonAction] = useState<
    IDownloadBlockButton["withModal"]
  >({
    href: "",
    isExternal: false,
    download: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDocsEnterprise = formData.type === "docsenterprisedownloadrequest";
  const isDocsDeveloper = formData.type === "docsDeveloperDownloadRequest";

  const onSubmitRequest = async ({
    from,
    country,
    region,
  }: IDownloadModalOnSubmitRequest) => {
    return fetch("/api/download-docs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        locale,
        referer: document.referrer,
        type: formData.type,
        fullName: formData.fullName,
        email: formData.email,
        phone: locale === "zh" && !formData.phone ? "+86" : formData.phone,
        companyName: formData.companyName,
        website: formData.website,
        comment: formData.comment,
        buttonId: formData.buttonId,
        from,
        country,
        region,
      }),
    }).then((res) => res.json());
  };

  return (
    <>
      <HeroTabs
        heading={{
          text: (
            <Trans
              t={t}
              i18nKey="DownloadOODocs"
              components={[<Text as="span" color="main" key="0" />]}
            />
          ),
        }}
        items={[
          {
            button: {
              id: "docs-enterprise",
              icon: {
                url: "/images/templates/download-docs/hero/icons.svg",
              },
              label: t("Enterprise"),
            },
            children: [
              <>
                <StyledHeroDescription>
                  <Heading level={2} label={t("OODocsEnterprise")} />
                  <Text size={2}>
                    <Trans
                      t={t}
                      i18nKey={t("OODocsEnterpriseText")}
                      components={[
                        <Link
                          key="0"
                          href="/all-connectors"
                          color="main"
                          textUnderline
                          hover="underline-none"
                        />,
                      ]}
                    />
                  </Text>
                </StyledHeroDescription>

                <StyledHeroProducts>
                  {enterpriseProducts.map((item, index) => (
                    <DownloadBlock
                      key={index}
                      {...item}
                      heading={t(item.heading)}
                      buttons={item.buttons.map((button) => ({
                        ...button,
                        label: t(button.label),
                        ...(button.withModal?.href && {
                          ...button.withModal,
                          onClick: () => {
                            setIsModalOpen(true);
                            setFormData({
                              ...formData,
                              buttonId: button.id,
                              type: "docsenterprisedownloadrequest",
                            });
                            setButtonAction({
                              href: button.withModal?.href,
                              isExternal: button.withModal?.isExternal,
                              download: button.withModal?.download,
                            });
                          },
                        }),
                      }))}
                    />
                  ))}
                </StyledHeroProducts>
              </>,
            ],
          },
          {
            button: {
              id: "docs-developer",
              icon: {
                url: "/images/templates/download-docs/hero/icons.svg",
                positionX: "-88px",
              },
              label: t("Developer"),
            },
            children: [
              <>
                <StyledHeroDescription>
                  <Heading level={2} label={t("OODocsDeveloper")} />
                  <Text size={2}>
                    <Trans
                      t={t}
                      i18nKey={t("OODocsDeveloperText")}
                      components={[
                        <Link
                          key="0"
                          href="https://api.onlyoffice.com/docs/docs-api/get-started/basic-concepts/"
                          target="_blank"
                          color="main"
                          textUnderline
                          hover="underline-none"
                        />,
                      ]}
                    />
                  </Text>
                </StyledHeroDescription>

                <StyledHeroBanner>
                  <DownloadBanner variant="secondary" contentMaxWidth="830px">
                    <Trans
                      t={t}
                      i18nKey="OODocsDeveloperBanner"
                      components={[
                        <Text key={0} as="span" fontWeight={700} />,
                        <TooltipWrapper key={1} />,
                      ]}
                    />
                  </DownloadBanner>
                </StyledHeroBanner>

                <StyledHeroProducts>
                  {developerProducts.map((item, index) => (
                    <DownloadBlock
                      key={index}
                      {...item}
                      heading={t(item.heading)}
                      buttons={item.buttons.map((button) => ({
                        ...button,
                        label: t(button.label),
                        ...(button.withModal?.href && {
                          ...button.withModal,
                          onClick: () => {
                            setIsModalOpen(true);
                            setFormData({
                              ...formData,
                              buttonId: button.id,
                              type: "docsdeveloperdownloadrequest",
                            });
                            setButtonAction({
                              href: button.withModal?.href,
                              isExternal: button.withModal?.isExternal,
                              download: button.withModal?.download,
                            });
                          },
                        }),
                      }))}
                    />
                  ))}
                </StyledHeroProducts>
              </>,
            ],
          },
          {
            button: {
              id: "docs-community",
              icon: {
                url: "/images/templates/download-docs/hero/icons.svg",
                positionX: "-176px",
              },
              label: t("Community"),
            },
            children: [
              <>
                <StyledHeroSection>
                  <StyledHeroDescription>
                    <Heading level={2} label={t("OODocsCommunity")} />
                    <Text size={2} label={t("OODocsCommunityText")} />
                  </StyledHeroDescription>

                  <StyledHeroBanner>
                    <DownloadBanner variant="secondary" contentMaxWidth="830px">
                      <Trans
                        t={t}
                        i18nKey="OODocsCommunityBanner"
                        components={[
                          <Link
                            key={0}
                            href="/download#docs-enterprise"
                            color="main"
                            textUnderline
                            hover="underline-none"
                          />,
                        ]}
                      />
                    </DownloadBanner>
                  </StyledHeroBanner>

                  <StyledHeroProducts>
                    {communityProducts.map((item, index) => (
                      <DownloadBlock
                        key={index}
                        {...item}
                        heading={t(item.heading)}
                        buttons={item.buttons.map((button) => ({
                          ...button,
                          label: t(button.label),
                        }))}
                      />
                    ))}
                  </StyledHeroProducts>
                </StyledHeroSection>

                <StyledHeroSection>
                  <StyledHeroDescription>
                    <div>
                      <Heading level={2} label={t("Bundles")} />
                      <Heading level={3} size={5} label={t("WithOwnCloud")} />
                    </div>
                    <Text size={2} label={t("GetTheLatestVersionOfOwnCloud")} />
                  </StyledHeroDescription>

                  <StyledHeroProducts>
                    {bundlesWithOwnCloudProducts.map((item, index) => (
                      <DownloadBlock
                        key={index}
                        {...item}
                        heading={t(item.heading)}
                        buttons={item.buttons.map((button) => ({
                          ...button,
                          id: button.id,
                          label: t(button.label),
                        }))}
                      />
                    ))}
                  </StyledHeroProducts>
                </StyledHeroSection>

                <StyledHeroSection>
                  <StyledHeroDescription>
                    <div>
                      <Heading level={2} label={t("Bundles")} />
                      <Heading level={3} size={5} label={t("WithNextcloud")} />
                    </div>
                    <Text
                      size={2}
                      label={t("GetTheLatestVersionOfNextcloud")}
                    />
                  </StyledHeroDescription>

                  <StyledHeroProducts>
                    {bundlesWithNextcloudProducts.map((item, index) => (
                      <DownloadBlock
                        key={index}
                        {...item}
                        heading={t(item.heading)}
                        buttons={item.buttons.map((button) => ({
                          ...button,
                          label: t(button.label),
                        }))}
                      />
                    ))}
                  </StyledHeroProducts>
                </StyledHeroSection>
              </>,
            ],
          },
        ]}
      />

      <DownloadModal
        locale={locale}
        heading={
          <Trans
            t={t}
            i18nKey={
              isDocsEnterprise
                ? "TryOODocsEnterprise"
                : isDocsDeveloper
                  ? "TryOODocsDeveloper"
                  : undefined
            }
            components={[<Text as="span" color="main" key="0" />]}
          />
        }
        initialFormData={initialFormData}
        formData={formData}
        setFormData={setFormData}
        byClickedText={
          <Trans
            t={t}
            i18nKey="GetItNowText"
            components={[
              <Link
                key="0"
                href={
                  isDocsEnterprise
                    ? "https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=4995927&doc=bTNVWUNPTm1yMzBlRW9Eb3o1MityMWJRNGlzcTFCZFlxdFRLbEFLdmVOcz0_IjQ5OTU5Mjci0&_ga=2.138713587.1358374253.1691405434-1731734527.1652271772"
                    : isDocsDeveloper
                      ? "https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5522566&doc=RVVQOEgvM2pOK0QvNzJ0Q25xSzRlVGZRUHdvYmgxUzIwNFRUUFhxbFpNWT0_IjU1MjI1NjYi0&_ga=2.95693148.1105072466.1587625676-1002786878.1584771261"
                      : undefined
                }
                target="_blank"
                color="main"
                textUnderline
                hover="underline-none"
              />,
              <Link
                key="1"
                href="https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=5048502&doc=SXhWMEVzSEYxNlVVaXJJeUVtS0kyYk14YWdXTEFUQmRWL250NllHNUFGbz0_IjUwNDg1MDIi0&_ga=2.101739969.1105072466.1587625676-1002786878.1584771261"
                target="_blank"
                color="main"
                textUnderline
                hover="underline-none"
              />,
            ]}
          />
        }
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitRequest={onSubmitRequest}
        buttonAction={buttonAction}
      />
    </>
  );
};

export { Hero };
