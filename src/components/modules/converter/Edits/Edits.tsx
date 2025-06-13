import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledEditsImage,
  StyledEditsSection,
  StyledEditsWrapper,
} from "./Edits.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const Edits = () => {
  const { t } = useTranslation("converter-common");

  return (
    <StyledEditsSection>
      <Container>
        <StyledEditsWrapper>
          <Heading level={2} size={3} label={t("NeedToMake")} />
          <Text size={2} label={t("CreateAndEdit")} />
          <Button
            as="a"
            href="/docspace-registration"
            label={t("CreateFreeAccount")}
          />
          <StyledEditsImage
            $image={t("EditsImage")}
            $image2x={t("EditsImage2x")}
          />
        </StyledEditsWrapper>
      </Container>
    </StyledEditsSection>
  );
};

export { Edits };
