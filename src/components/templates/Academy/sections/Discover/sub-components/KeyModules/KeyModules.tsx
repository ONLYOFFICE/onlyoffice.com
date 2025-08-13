import React from "react";
import {
  StyledKeyModules,
  StyledHeading,
  KeyModule,
  KeyIcon,
  KeyText,
} from "./KeyModules.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { useTranslation, Trans } from "next-i18next";

interface KeyModulesProps {
  items: Array<{
    title?: string;
    description: string;
    iconUrl: string;
  }>;
  $isFeaturesCovered?: boolean;
}

const KeyModules = ({ items, $isFeaturesCovered }: KeyModulesProps) => {
  const { t } = useTranslation("academy");
  return (
    <StyledKeyModules>
      <StyledHeading level={3}>
        {$isFeaturesCovered ? t("FeaturesCovered") : t("KeyModules")}
      </StyledHeading>
      {items.map((item, index) => (
        <KeyModule key={index}>
          <KeyIcon $src={item.iconUrl} />
          <KeyText>
            {item.title && <Heading level={4}>{t(item.title)}</Heading>}
            <Text fontSize="16px" color="#666666">
              <Trans
                t={t}
                i18nKey={item.description}
                components={[<Text as="span" fontWeight={700} key="0" />]}
              />
            </Text>
          </KeyText>
        </KeyModule>
      ))}
    </StyledKeyModules>
  );
};

export { KeyModules };
