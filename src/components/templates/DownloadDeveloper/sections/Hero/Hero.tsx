import { useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import {
  StyledHeroDescription,
  StyledHeroHeading,
  StyledHeroIcons,
  StyledHeroProducts,
} from "./Hero.styled";
import { IHero } from "./Hero.types";
import {
  DownloadModal,
  IDownloadModalData,
  IDownloadModalOnSubmitRequest,
} from "@src/components/widgets/download/DownloadModal";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { Tooltip } from "@src/components/ui/Tooltip";
import { HeroSwitch } from "@src/components/modules/download/HeroSwitch";
import { DownloadBanner } from "@src/components/widgets/download/DownloadBanner";
import {
  DownloadCard,
  IDownloadCardButton,
} from "@src/components/widgets/download/DownloadCard";
import { IconTooltip } from "@src/components/widgets/IconTooltip";
import { docsIcons } from "./data/docsData";
import { docspaceIcons } from "./data/docspaceData";

const Hero = ({ locale, docsProducts, docspaceProducts }: IHero) => {
  const { t } = useTranslation("download-developer");

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
    IDownloadCardButton["withModal"]
  >({
    href: "",
    isExternal: false,
    download: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDocsDeveloper = formData.type === "docsDeveloperDownloadRequest";

  const onSubmitRequest = async ({
    from,
    country,
    region,
    hCaptchaResponse,
  }: IDownloadModalOnSubmitRequest) => {
    return fetch("/api/download-developer", {
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
        hCaptchaResponse,
      }),
    }).then((res) => res.json());
  };

  return (
    <>
      <HeroSwitch
        heading={{
          text: t("DownloadOOServerSolutions"),
          maxWidth: "868px",
        }}
        items={[
          {
            button: {
              id: "docs-developer",
              icon: {
                url: "/images/templates/download-developer/hero/icons.svg",
                positionY: "-70px",
              },
              label: t("DocsDeveloper"),
              text: t("DocumentEditorsBusinessPlatform"),
            },
            children: [
              <>
                <StyledHeroDescription>
                  <StyledHeroHeading
                    level={2}
                    size={4}
                    label={t("OODocsDeveloper")}
                  />
                  <Text
                    size={2}
                    color="#666666"
                    label={t("OODocsDeveloperText")}
                  />
                </StyledHeroDescription>

                <StyledHeroIcons>
                  {docsIcons.map((item, index) => (
                    <IconTooltip
                      key={index}
                      id={item.id}
                      tooltipLabel={t(item.tooltipLabel)}
                      href={item.href}
                      icon={item.icon}
                    />
                  ))}
                </StyledHeroIcons>

                <DownloadBanner>
                  <Trans
                    t={t}
                    i18nKey="TheTrialVersionOfOODocsDeveloper"
                    components={[
                      <Text
                        key={0}
                        as="span"
                        color="#666666"
                        fontWeight={600}
                      />,
                      <Text key={1} as="span" color="main" />,
                      <Tooltip
                        key={2}
                        infoIcon
                        id="access-to-automation-api-tooltip"
                        content={t("TheTrialVersionOfOODocsDeveloperTooltip")}
                        width="280px"
                        verticalAlign="middle"
                      />,
                    ]}
                  />
                </DownloadBanner>

                <StyledHeroProducts>
                  {docsProducts.map((item, index) => (
                    <DownloadCard
                      key={index}
                      locale={locale}
                      image={item.image}
                      heading={t(item.heading)}
                      version={item.version}
                      whatsNewLink={item.whatsNewLink}
                      releaseDate={item.releaseDate}
                      readInstructionLink={item.readInstructionLink}
                      buttons={item.buttons.map((button) => ({
                        id: button.id,
                        label: t(button.label),
                        ...(button.link?.href && {
                          link: {
                            href: button.link.href,
                            isExternal: button.link.isExternal,
                          },
                        }),
                        ...(button.withModal?.href && {
                          ...button.withModal,
                          onClick: () => {
                            setIsModalOpen(true);
                            setFormData({
                              ...formData,
                              buttonId: button.id,
                              type: "docsDeveloperDownloadRequest",
                            });
                            setButtonAction({
                              href: button.withModal?.href,
                              isExternal: button.withModal?.isExternal,
                              download: button.withModal?.download,
                            });
                          },
                        }),
                      }))}
                      buyButton={item.buyButton}
                    />
                  ))}
                </StyledHeroProducts>
              </>,
            ],
          },
          {
            button: {
              id: "docspace-developer",
              icon: {
                url: "/images/templates/download-developer/hero/icons.svg",
              },
              label: t("DocSpaceDeveloper"),
              text: t("DocumentEditorsSecureRoomBasedDMS"),
            },
            children: [
              <>
                <StyledHeroDescription>
                  <StyledHeroHeading
                    level={2}
                    size={4}
                    label={t("OODocSpaceDeveloper")}
                  />
                  <Text
                    size={2}
                    color="#666666"
                    label={t("OODocSpaceDeveloperText")}
                  />
                </StyledHeroDescription>

                <StyledHeroIcons>
                  {docspaceIcons.map((item, index) => (
                    <IconTooltip
                      key={index}
                      id={item.id}
                      tooltipLabel={t(item.tooltipLabel)}
                      href={item.href}
                      icon={item.icon}
                    />
                  ))}
                </StyledHeroIcons>

                <StyledHeroProducts>
                  {docspaceProducts.map((item, index) => (
                    <DownloadCard
                      key={index}
                      locale={locale}
                      image={item.image}
                      heading={t(item.heading)}
                      version={item.version}
                      whatsNewLink={item.whatsNewLink}
                      releaseDate={item.releaseDate}
                      readInstructionLink={item.readInstructionLink}
                      buttons={item.buttons.map((button) => ({
                        id: button.id,
                        label: t(button.label),
                        ...(button.link?.href && {
                          link: {
                            href: button.link.href,
                            isExternal: button.link.isExternal,
                          },
                        }),
                        ...(button.withModal?.href && {
                          ...button.withModal,
                          onClick: () => {
                            setIsModalOpen(true);
                            setFormData({
                              ...formData,
                              buttonId: button.id,
                              type: "docspacedeveloperdownloadrequest",
                            });
                            setButtonAction({
                              href: button.withModal?.href,
                              isExternal: button.withModal?.isExternal,
                              download: button.withModal?.download,
                            });
                          },
                        }),
                      }))}
                      buyButton={item.buyButton}
                    />
                  ))}
                </StyledHeroProducts>
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
              isDocsDeveloper
                ? "TryOODocDeveloperLocallyFree"
                : "TryOODocSpaceDeveloperLocallyFree"
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
                href="https://help.onlyoffice.co/Products/Files/DocEditor.aspx?fileid=8516433&doc=U0U1QUs2VEtIVmtYclFTNzVXSWkxUEN6aVlWTzdOWFFsWGdibG80Mnhacz0_IntcImVudHJ5XCI6XCI4NTE2NDMzXCIsXCJsaW5rXCI6XCI5Y2ZiMWNkMS0wMmMxLTRlNmEtYThhOC1iNjFlYTk2ZTYzNDZcIn0i0"
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
