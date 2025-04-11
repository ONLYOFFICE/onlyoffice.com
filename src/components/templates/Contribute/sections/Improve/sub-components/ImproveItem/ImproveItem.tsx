import { Trans, useTranslation } from "next-i18next";
import { Link } from "@src/components/ui/Link";
import { StyledImproveContent, StyledImproveItem } from "./ImproveItem.styled";
import { Text } from "@src/components/ui/Text";
import { IFeatureItemExtended } from "../../data/items";

const ImproveItem = ({ icon, text, links, itemLink }: IFeatureItemExtended) => {
  const { t } = useTranslation("contribute");

  return (
    <StyledImproveItem
      $icon={icon.url}
      $positionX={icon.positionX}
      $mobilePositionX={icon.mobilePositionX}
    >
      <StyledImproveContent>
        <Text size={2}>
          <Trans
            t={t}
            i18nKey={String(text)}
            components={links?.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                color="main"
                textUnderline
                hover="underline-none"
              />
            ))}
          />
        </Text>
        <Link
          href={itemLink.href}
          label={t(itemLink.label)}
          target="_blank"
          color="main"
          textUnderline
          hover="underline-none"
        />
      </StyledImproveContent>
    </StyledImproveItem>
  );
};

export { ImproveItem };
