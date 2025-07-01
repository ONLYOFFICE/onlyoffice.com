import { useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import {
  StyledHeroDescription,
  StyledHeroBanner,
  StyledHeroProducts,
} from "./Hero.styled";
import { ILocale } from "@src/types/locale";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { HeroTabs } from "@src/components/modules/download/HeroTabs";
import {
  DownloadModal,
  IDownloadModalData,
  IDownloadModalOnSubmitRequest,
} from "@src/components/widgets/download/DownloadModal";
import { DownloadBanner } from "@src/components/widgets/download/DownloadBanner";
import {
  DownloadBlock,
  IDownloadBlockButton,
} from "@src/components/widgets/download/DownloadBlock";
import { enterpriseProducts } from "./data/enterpriseData";
import { communityProducts } from "./data/communityData";

const Hero = ({ locale }: ILocale) => {
  const { t } = useTranslation("download-workspace");

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

  const onSubmitRequest = async ({
    from,
    country,
    region,
  }: IDownloadModalOnSubmitRequest) => {
    return fetch("/api/download-workspace", {
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
              i18nKey="DownloadOOWorkspace"
              components={[<Text as="span" color="main" key="0" />]}
            />
          ),
        }}
        items={[
          {
            button: {
              id: "workspace-enterprise",
              icon: {
                url: "/images/templates/download-workspace/hero/enterprise.svg",
              },
              label: t("Enterprise"),
            },
            children: [
              <>
                <StyledHeroDescription>
                  <Heading level={2} label={t("OOWorkspaceEnterprise")} />
                  <Text size={2} label={t("OOWorkspaceEnterpriseText")} />
                </StyledHeroDescription>

                <StyledHeroProducts>
                  {enterpriseProducts.map((item, index) => (
                    <DownloadBlock
                      key={index}
                      {...item}
                      heading={t(item.heading)}
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
                              type: "workspaceEnterpriseDownloadRequest",
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
              id: "workspace-community",
              icon: {
                url: "/images/templates/download-workspace/hero/community.svg",
              },
              label: t("Community"),
            },
            children: [
              <>
                <StyledHeroDescription>
                  <Heading level={2} label={t("OOWorkspaceCommunity")} />
                  <Text size={2} label={t("OOWorkspaceCommunityText")} />
                </StyledHeroDescription>

                <StyledHeroBanner>
                  <DownloadBanner variant="secondary" contentMaxWidth="830px">
                    <Trans
                      t={t}
                      i18nKey="OOWorkspaceCommunityBanner"
                      components={[
                        <Link
                          key="0"
                          href="/download-workspace#workspace-enterprise"
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
                        id: button.id,
                        label: t(button.label),
                        ...(button.link?.href && {
                          link: {
                            href: button.link.href,
                            isExternal: button.link.isExternal,
                          },
                        }),
                      }))}
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
            i18nKey="TryOOWorkspaceEnterpriseFree"
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
                href="https://help.onlyoffice.co/Products/Files/doceditor.aspx?fileid=6795868&doc=RG5GaVN6azdUQW5kLzZQNzBXbHZ4Rm9QWVZuNjZKUmgya0prWnpCd2dGcz0_IjY3OTU4Njgi0&_ga=2.39779683.1358374253.1691405434-1731734527.1652271772"
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
