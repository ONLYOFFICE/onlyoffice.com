import { Trans, useTranslation } from "next-i18next";
import { Link } from "@src/components/ui/Link";
import {
  StyledContactContainer,
  StyledContactContect,
  StyledContactHeading,
  StyledContactSection,
  StyledContactText,
} from "./Contact.styled";

const Contact = () => {
  const { t } = useTranslation("healthcare");

  return (
    <StyledContactSection
      background="#333333"
      tabletSmallSpacing={["88px", "88px"]}
    >
      <StyledContactContainer>
        <StyledContactContect>
          <StyledContactHeading level={4} size={4} label={t("NeedToDiscuss")} />
          <StyledContactText size={2}>
            <Trans
              t={t}
              i18nKey="PleaseContact"
              components={[
                <Link
                  href="mailto:sales@onlyoffice.com"
                  color="main"
                  textUnderline
                  hover="underline-none"
                  key="0"
                />,
              ]}
            />
          </StyledContactText>
        </StyledContactContect>
      </StyledContactContainer>
    </StyledContactSection>
  );
};

export { Contact };
