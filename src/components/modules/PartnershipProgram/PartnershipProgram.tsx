import { useTranslation } from "next-i18next";
import {
  StyledPartnershipProgramWrapper,
  StyledPartnershipProgramBody,
  StyledPartnershipProgramImg,
  StyledPartnershipProgramBtns,
  StyledPartnershipProgramButton,
  StyledPartnershipProgramLink,
} from "./PartnershipProgram.styled";
import { IPartnershipProgram } from "./PartnershipProgram.types";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const PartnershipProgram = ({
  id,
  className,
  heading,
  text,
}: IPartnershipProgram) => {
  const { t } = useTranslation("PartnershipProgram");

  return (
    <Section id={id} className={className} background="#f3f5f6">
      <Container>
        <StyledPartnershipProgramWrapper>
          <StyledPartnershipProgramBody>
            <Heading level={3} label={heading} />
            <Text size={1} label={text} />
            <StyledPartnershipProgramBtns>
              <StyledPartnershipProgramButton
                id="partnership-program-submit-partner-request"
                forwardedAs="a"
                href="/partnership-request"
                label={t("SubmitPartnerRequest")}
              />

              <StyledPartnershipProgramLink
                id="partnership-program-learn-more"
                href="/resellers"
                label={t("LearnMore")}
                color="main"
                hover="underline"
              />
            </StyledPartnershipProgramBtns>
          </StyledPartnershipProgramBody>

          <StyledPartnershipProgramImg />
        </StyledPartnershipProgramWrapper>
      </Container>
    </Section>
  );
};

export { PartnershipProgram };
