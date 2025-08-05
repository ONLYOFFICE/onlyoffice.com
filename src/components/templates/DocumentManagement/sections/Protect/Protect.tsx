import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledProtectContent,
  StyledProtectImage,
  StyledProtectLink,
  StyledProtectText,
  StyledProtectWrapper,
} from "./Protect.styled";
import { Heading } from "@src/components/ui/Heading";

const Protect = () => {
  const { t } = useTranslation("document-management");
  return (
    <Section
      background="#333333"
      desktopSpacing={["148px", "145px"]}
      tabletSpacing={["148px", "145px"]}
      tabletSmallSpacing={["110px", "91px"]}
      mobileSpacing={["58px", "46px"]}
    >
      <Container>
        <StyledProtectWrapper>
          <StyledProtectImage />
          <StyledProtectContent>
            <Heading
              level={3}
              size={4}
              color="#ffffff"
              label={t("ProtectYourDocuments")}
            />
            <StyledProtectText label={t("ProtectYourDocumentsText")} />
            <StyledProtectLink
              href="/private-rooms?from=document-management"
              label={t("LearnMore")}
              color="main"
              textUnderline
              hover="underline-none"
            />
          </StyledProtectContent>
        </StyledProtectWrapper>
      </Container>
    </Section>
  );
};

export { Protect };
