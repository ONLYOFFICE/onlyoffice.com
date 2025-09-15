import { useTranslation, Trans } from "next-i18next";
import { ButtonRow, StyledSection, StyledContainer } from "./Download.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";
import { DownloadButton } from "@src/components/ui/DownloadButton";

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
            <DownloadButton
              key={index}
              href={item.href}
              platform={item.platform}
              variant={item.variant}
            />
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
                href="https://community.onlyoffice.com/"
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
