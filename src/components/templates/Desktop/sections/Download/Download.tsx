import { useTranslation, Trans } from "next-i18next";
import {
  ButtonRow,
  PlatformButton,
  PlatformIcon,
  StyledSection,
  StyledContainer,
} from "./Download.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

const Download = () => {
  const { t } = useTranslation("desktop");

  return (
    <StyledSection>
      <StyledContainer>
        <Heading level={2} color="white">
          {t("DownloadTitle")}
        </Heading>
        <ButtonRow>
          {items.map((item, index) => (
            <PlatformButton
              key={index}
              href={item.link}
              target={item.isExternal ? "_blank" : "_self"}
            >
              <PlatformIcon
                $positionX={item.positionX}
                $width={item.width || "32px"}
              />
              {t(item.title || "")}
            </PlatformButton>
          ))}
        </ButtonRow>
        <Text color="white">
          <Trans
            t={t}
            i18nKey="DownloadHelp"
            components={[
              <Link
                color="white"
                textUnderline
                hover="underline-none"
                key="0"
                href="https://forum.onlyoffice.com"
                target="_blank"
              />,
            ]}
          />
        </Text>
      </StyledContainer>
    </StyledSection>
  );
};

export { Download };
