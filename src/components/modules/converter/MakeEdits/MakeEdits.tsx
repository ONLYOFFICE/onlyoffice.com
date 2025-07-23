import { useTranslation } from "next-i18next";
import {
  StyledMakeEditsWrapper,
  StyledMakeEditsImage,
} from "./MakeEdits.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const MakeEdits = () => {
  const { t } = useTranslation("converter");

  return (
    <Section
      background="#f9f9f9"
      desktopSpacing={["112px", "0"]}
      tabletSpacing={["88px", "0"]}
      tabletSmallSpacing={["80px", "0"]}
      mobileSpacing={["48px", "0"]}
    >
      <Container>
        <StyledMakeEditsWrapper>
          <Heading level={2} label={t("NeedToMakeSomeEdits")} />
          <Text size={2} label={t("CreateEditAndCollaborate")} />
          <Button
            as="a"
            href="/docspace-registration"
            label={t("CreateFreeAccount")}
          />
        </StyledMakeEditsWrapper>

        <StyledMakeEditsImage
          $imageUrl={t("MakeEditsImageUrl")}
          $image2xUrl={t("MakeEditsImage2xUrl")}
        />
      </Container>
    </Section>
  );
};

export { MakeEdits };
