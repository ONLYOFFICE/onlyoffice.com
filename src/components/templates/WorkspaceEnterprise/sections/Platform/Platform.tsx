import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import {
  StyledPlatformItems,
  StyledText,
  PlatformItem,
  PlatformImage,
  StyledContainer,
  StyledHeading,
} from "./Platform.styled";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";

const Platform = () => {
  const { t } = useTranslation("workspace-enterprise");

  return (
    <Section desktopSpacing={["112px", "0"]} tabletSpacing={["88px", "0"]} tabletSmallSpacing={["88px", "0"]} mobileSpacing={["64px", "0"]}>
      <StyledContainer>
        <StyledHeading level={2} label={t("CollabPlatform")} textAlign="center" />
        <StyledText label={t("CollabPlatformText")} textAlign="center" />
        <StyledPlatformItems>
          {items.map((item, index) => (
            <div key={index}>
              <PlatformItem $height={item.height}>
                <Heading level={3}>{t(item.heading)}</Heading>
                <Text color="#666666" fontSize="16px">{t(item.text)}</Text>
                {item.link && (
                  <Link
                    href={item.link}
                    color="main"
                    textUnderline
                    hover="underline-none"
                  >
                    {t("LearnMore")}
                  </Link>
                )}
              </PlatformItem>

              <PlatformImage $image={t(item.image)} $image2x={t(item.image2x)} $width={item.width} $height={item.height} />
            </div>
          ))}
        </StyledPlatformItems>
      </StyledContainer>
    </Section>
  );
};

export { Platform };
