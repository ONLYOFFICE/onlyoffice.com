import { useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import { StyledHeroDescription, StyledHeroProducts } from "./Hero.styled";
import { IHero } from "./Hero.types";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
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

const Hero = ({ locale, enterpriseProducts, communityProducts }: IHero) => {
  const { t } = useTranslation("download-docspace");

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
    return fetch("/api/download-docspace", {
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
              i18nKey="DownloadODocSpace"
              components={[<Text as="span" color="main" key="0" />]}
            />
          ),
        }}
        items={[
          {
            button: {
              id: "docspace-enterprise",
              icon: {
                url: "/images/templates/download-docspace/hero/enterprise.svg",
              },
              label: t("Enterprise"),
            },
            children: [
              <>
                <StyledHeroDescription>
                  <Heading level={2} label={t("OODocSpaceEnterprise")} />
                  <Text size={2} label={t("OODocSpaceEnterpriseText")} />
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
                              type: "docSpaceEnterpriseDownloadRequest",
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
              id: "docspace-community",
              icon: {
                url: "/images/templates/download-docspace/hero/community.svg",
              },
              label: t("Community"),
            },
            children: [
              <>
                <StyledHeroDescription>
                  <Heading level={2} label={t("OODocSpaceCommunity")} />
                  <Text size={2} label={t("OODocSpaceCommunityText")} />
                </StyledHeroDescription>

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
            i18nKey="TryOODocSpaceEnterpriseEdition"
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
