import { useTranslation } from "next-i18next";
import {
  StyledDocspaceRegistration,
  StyledDocspaceRegistrationWrapper,
  StyledDocspaceRegistrationCreate,
  StyledDocspaceRegistrationForm
} from "./DocspaceRegistration.styled";
import { Container } from "@src/components/ui/Container";
import { DocspaceCreateContent } from "./sections/DocspaceCreateContent";
import { RegistrationForm } from "./sections/RegistrationForm";

const DocspaceRegistrationTemplate = () => {
  const { t } = useTranslation("docspace-registration");

  return (
    <StyledDocspaceRegistration>
      <StyledDocspaceRegistrationWrapper>
        <StyledDocspaceRegistrationCreate>
          <DocspaceCreateContent />
        </StyledDocspaceRegistrationCreate>
        <StyledDocspaceRegistrationForm>
          <RegistrationForm />
        </StyledDocspaceRegistrationForm>
      </StyledDocspaceRegistrationWrapper>
    </StyledDocspaceRegistration>
  );
};

export { DocspaceRegistrationTemplate };

