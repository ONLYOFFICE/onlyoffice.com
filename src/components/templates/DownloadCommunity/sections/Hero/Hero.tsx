import { useTranslation, Trans } from "next-i18next";
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
import { Link } from "@src/components/ui/Link";
import { DownloadBlock } from "@src/components/widgets/download/DownloadBlock";
import { DownloadBanner } from "@src/components/widgets/download/DownloadBanner";

const Hero = ({
  communityProducts,
  bundlesWithOwnCloudProducts,
  bundlesWithNextcloudProducts,
  docspaceProducts,
}: IHero) => {
  const { t } = useTranslation("download-community");

  return (
    <HeroTabs
      heading={{
        text: (
          <Trans
            t={t}
            i18nKey="DownloadCommunityVersions"
            components={[<Text as="span" color="main" key="0" />]}
          />
        ),
        maxWidth: "738px",
      }}
      items={[
        {
          button: {
            id: "docs-community",
            icon: {
              url: "/images/templates/download-community/hero/icons.svg",
            },
            label: t("DocsCommunity"),
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
                        <Link
                          key={1}
                          href="/download-developer#docs-developer"
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
                      readInstructionLink={
                        item.readInstructionLink
                          ? t(item.readInstructionLink, { defaultValue: item.readInstructionLink })
                          : undefined
                      }
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
                      readInstructionLink={
                        item.readInstructionLink
                          ? t(item.readInstructionLink, { defaultValue: item.readInstructionLink })
                          : undefined
                      }
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
                  <Heading level={3} size={5} label={t("WithNextcloud")} />
                  <Text size={2} label={t("GetTheLatestVersionOfNextcloud")} />
                </StyledHeroDescription>

                <StyledHeroProducts>
                  {bundlesWithNextcloudProducts.map((item, index) => (
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
        {
          button: {
            id: "docspace-community",
            icon: {
              url: "/images/templates/download-community/hero/icons.svg",
              positionY: "-70px",
            },
            label: t("DocSpaceCommunity"),
          },
          children: [
            <>
              <StyledHeroDescription>
                <Heading level={2} label={t("OODocSpaceCommunity")} />
                <Text size={2} label={t("OODocSpaceCommunityText")} />
              </StyledHeroDescription>

              <StyledHeroBanner>
                <DownloadBanner variant="secondary" contentMaxWidth="830px">
                  <Trans
                    t={t}
                    i18nKey="OODocSpaceCommunityBanner"
                    components={[
                      <Link
                        key={0}
                        href="/download#docspace-enterprise"
                        color="main"
                        textUnderline
                        hover="underline-none"
                      />,
                      <Link
                        key={1}
                        href="/download-developer#docspace-developer"
                        color="main"
                        textUnderline
                        hover="underline-none"
                      />,
                    ]}
                  />
                </DownloadBanner>
              </StyledHeroBanner>

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
