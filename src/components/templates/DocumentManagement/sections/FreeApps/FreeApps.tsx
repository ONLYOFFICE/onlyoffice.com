import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledFreeAppsButtons,
  StyledFreeAppsImage,
  StyledFreeAppsTop,
} from "./FreeApps.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { DownloadButton } from "@src/components/ui/DownloadButton";
import { freeAppsItems } from "./data/items";

const FreeApps = () => {
  const { t } = useTranslation("document-management");

  return (
    <Section
      background="#f9f9f9"
      tabletSmallSpacing={["80px", "60px"]}
      mobileSpacing={["48px", "62px"]}
    >
      <Container>
        <StyledFreeAppsTop>
          <Heading level={2} size={3} label={t("WorkWithYourDocuments")} />
          <Text size={2} label={t("WorkWithYourDocumentsText")} />
        </StyledFreeAppsTop>
        <StyledFreeAppsButtons>
          {freeAppsItems.map(({ platform, href }, index) => (
            <DownloadButton
              key={index}
              platform={platform}
              variant="secondary"
              href={href.src}
              target={href.isExternal ? "_blank" : undefined}
            />
          ))}
        </StyledFreeAppsButtons>
        <StyledFreeAppsImage
          $image={t("WorkWithYourDocumentsImage")}
          $image2x={t("WorkWithYourDocumentsImage2x")}
        />
      </Container>
    </Section>
  );
};

export { FreeApps };
