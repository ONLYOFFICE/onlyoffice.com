import React from "react";
import {
  StyledLevels,
  StyledHeading,
  Level,
  KeyText,
  LevelArea,
} from "./Levels.styled";
import { Text } from "@src/components/ui/Text";
import { useTranslation, Trans } from "next-i18next";
import { Heading } from "@src/components/ui/Heading";

interface Levels {
  items: Array<{
    basic: string[];
    basicplus: string[];
    pro: string[];
  }>;
}

const Levels = ({ items }: Levels) => {
  const { t } = useTranslation("academy");
  const levelData = items[0];

  const levels = ["Basic", "BasicPlus", "Pro"];

  return (
    <StyledLevels>
      <StyledHeading level={3}>{t("Levels")}</StyledHeading>

      <LevelArea>
        {levels.map((level, index) => {
          const key = level.toLowerCase() as keyof typeof levelData;
          const value = levelData[key];

          return (
            <Level key={index}>
              <Heading level={4}>
                <Trans
                  t={t}
                  i18nKey={t(level + "Lvl")}
                  components={[<Text as="span" color="main" key="0" />]}
                />
              </Heading>
              {value?.map((item, index) => (
                <KeyText key={index} fontSize="16px" color="#666666">
                  {t(item)}
                </KeyText>
              ))}
            </Level>
          );
        })}
      </LevelArea>
    </StyledLevels>
  );
};

export { Levels };
