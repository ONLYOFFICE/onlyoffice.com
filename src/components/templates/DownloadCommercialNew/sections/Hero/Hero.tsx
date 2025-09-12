import { useTranslation, Trans } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledHeroSection,
  StyledHeroDescription,
  StyledHeroBanner,
  StyledHeroProducts,
} from "./Hero.styled";
import { IHero } from "./Hero.types";
import { Text } from "@src/components/ui/Text";
import { HeroTabs } from "@src/components/modules/download/HeroTabs";
import { Heading } from "@src/components/ui/Heading";
import { DownloadBlock } from "@src/components/widgets/download/DownloadBlock";
import { DownloadBanner } from "@src/components/widgets/download/DownloadBanner";
import { TooltipWrapper } from "./sub-components/TooltipWrapper";
import { workspaceProducts } from "./data/workspaceData";
import { Link } from "@src/components/ui/Link";

const Hero = ({
  docsEnterpriseProducts,
  docsDeveloperProducts,
  docspaceProducts,
}: IHero) => {
  const { t } = useTranslation("download-commercial-new");

  return (
    <HeroTabs
      heading={{
        text: (
          <Trans
            t={t}
            i18nKey="DownloadCommercialPackages"
            components={[<Text as="span" color="main" key="0" />]}
          />
        ),
        maxWidth: "738px",
      }}
      items={[
        {
          button: {
            id: "docs-enterprise",
            icon: {
              url: getAssetUrl("/images/templates/download-commercial-new/hero/docs.svg"),
            },
            label: t("OODocs"),
          },
          children: [
            <>
              <StyledHeroSection>
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
                  {docsEnterpriseProducts.map((item, index) => (
                    <DownloadBlock
                      key={index}
                      {...item}
                      readInstructionLink={
                        item.readInstructionLink
                          ? t(item.readInstructionLink, { defaultValue: item.readInstructionLink })
                          : undefined
                      }
                      heading={t(item.heading)}
                      buttons={item.buttons.map((button) => ({
                        id: button.id,
                        label: t(button.label),
                        ...(button.link?.href && {
                          link: {
                            href: t(button.link.href, { defaultValue: button.link.href }),
                            isExternal: button.link.isExternal,
                          },
                        }),
                      }))}
                    />
                  ))}
                </StyledHeroProducts>
              </StyledHeroSection>

              <StyledHeroSection>
                <StyledHeroDescription>
                  <Heading level={2} label={t("OODocsDeveloper")} />
                  <Text size={2}>
                    <Trans
                      t={t}
                      i18nKey={t("OODocsDeveloperText")}
                      components={[
                        <Link
                          key="0"
                          href="https://api.onlyoffice.com/docs/docs-api/get-started/basic-concepts"
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
                  {docsDeveloperProducts.map((item, index) => (
                    <DownloadBlock
                      key={index}
                      {...item}
                      readInstructionLink={
                        item.readInstructionLink
                          ? t(item.readInstructionLink, { defaultValue: item.readInstructionLink })
                          : undefined
                      }
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
              </StyledHeroSection>
            </>,
          ],
        },
        {
          button: {
            id: "workspace",
            icon: {
              url: getAssetUrl("/images/templates/download-commercial-new/hero/workspace.svg"),
            },
            label: t("OOWorkspace"),
          },
          children: [
            <>
              <StyledHeroDescription>
                <Heading level={2} label={t("OOWorkspaceEnterprise")} />
                <Text size={2} label={t("OOWorkspaceEnterpriseText")} />
              </StyledHeroDescription>

              <StyledHeroProducts>
                {workspaceProducts.map((item, index) => (
                  <DownloadBlock
                    key={index}
                    {...item}
                    readInstructionLink={
                      item.readInstructionLink
                        ? t(item.readInstructionLink, { defaultValue: item.readInstructionLink })
                        : undefined
                    }
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
        {
          button: {
            id: "docspace",
            icon: {
              url: getAssetUrl("/images/templates/download-commercial-new/hero/docspace.svg"),
              size: "contain",
            },
            label: t("OODocSpace"),
          },
          children: [
            <>
              <StyledHeroDescription>
                <Heading level={2} label={t("OODocSpaceEnterprise")} />
                <Text size={2} label={t("OODocSpaceEnterpriseText")} />
              </StyledHeroDescription>

              <StyledHeroProducts>
                {docspaceProducts.map((item, index) => (
                  <DownloadBlock
                    key={index}
                    {...item}
                    readInstructionLink={
                      item.readInstructionLink
                        ? t(item.readInstructionLink, { defaultValue: item.readInstructionLink })
                        : undefined
                    }
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
  );
};

export { Hero };
