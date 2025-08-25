import { useTranslation, Trans } from "next-i18next";
import {
  StyledHeroButtons,
  StyledHeroButton,
  StyledHeroBlock,
  StyledHeroDescription,
  StyledHeroHeading,
  StyledHeroProducts,
} from "./Hero.styled";
import { IHero } from "./Hero.types";
import { Text } from "@src/components/ui/Text";
import { HeroSwitch } from "@src/components/modules/download/HeroSwitch";
import { DownloadCard } from "@src/components/widgets/download/DownloadCard";
import { navDesktopData } from "./data/desktopData";
import { navMobileData } from "./data/mobileData";

const Hero = ({ locale, desktopProducts, mobileProducts }: IHero) => {
  const { t } = useTranslation("download-desktop");

  return (
    <HeroSwitch
      heading={{
        text: (
          <Trans
            t={t}
            i18nKey="DownloadFreeOOAppsForYourDesktopAndMobileDevices"
            components={[<Text as="span" color="main" key={0} />]}
          />
        ),
        maxWidth: "832px",
      }}
      items={[
        {
          button: {
            id: "desktop",
            icon: {
              url: "/images/templates/download-desktop/hero/icons.svg",
              positionY: "-70px",
              width: "80px",
            },
            label: t("Desktop"),
            text: t("FreeAppForDesktopDevices"),
          },
          children: [
            <>
              <StyledHeroButtons>
                {navDesktopData.map((item, index) => (
                  <StyledHeroButton
                    key={index}
                    onClick={() => {
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    variant="tertiary"
                    label={t(String(item.label))}
                  />
                ))}
              </StyledHeroButtons>

              {desktopProducts.map((item, index) => (
                <StyledHeroBlock id={item.id} key={index}>
                  <StyledHeroDescription>
                    <StyledHeroHeading
                      level={2}
                      size={4}
                      label={t(item.heading)}
                    />
                    {item.text && (
                      <Text size={2} color="#666666" label={t(item.text)} />
                    )}
                  </StyledHeroDescription>

                  <StyledHeroProducts>
                    {item.items.map((item, index) => (
                      <DownloadCard
                        key={index}
                        {...item}
                        locale={locale}
                        heading={t(item.heading)}
                        buttons={item.buttons.map((button) => ({
                          ...button,
                          label: t(button.label),
                        }))}
                      />
                    ))}
                  </StyledHeroProducts>
                </StyledHeroBlock>
              ))}
            </>,
          ],
        },
        {
          button: {
            id: "mobile",
            icon: {
              url: "/images/templates/download-desktop/hero/icons.svg",
              positionX: "center",
            },
            label: t("Mobile"),
            text: t("FreeAppForMobileDevices"),
          },
          children: [
            <>
              <StyledHeroButtons>
                {navMobileData.map((item, index) => (
                  <StyledHeroButton
                    key={index}
                    onClick={() => {
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    variant="tertiary"
                    label={t(String(item.label))}
                  />
                ))}
              </StyledHeroButtons>

              {mobileProducts.map((item, index) => (
                <StyledHeroBlock id={item.id} key={index}>
                  <StyledHeroDescription>
                    <StyledHeroHeading
                      level={2}
                      size={4}
                      label={t(item.heading)}
                    />
                    {item.text && (
                      <Text size={2} color="#666666" label={t(item.text)} />
                    )}
                  </StyledHeroDescription>

                  <StyledHeroProducts>
                    {item.items.map((item, index) => (
                      <DownloadCard
                        key={index}
                        {...item}
                        locale={locale}
                        heading={t(item.heading)}
                        buttons={item.buttons.map((button) => ({
                          ...button,
                          label: t(button.label),
                        }))}
                      />
                    ))}
                  </StyledHeroProducts>
                </StyledHeroBlock>
              ))}
            </>,
          ],
        },
      ]}
    />
  );
};

export { Hero };
