import { useTranslation, Trans } from "next-i18next";
import {
  StyledCheckEmail,
  StyledCheckEmailImage,
  StyledCheckEmailBanner,
  StyledCheckEmailLink,
} from "./CheckEmail.styled";
import { ICheckEmail } from "./CheckEmail.types";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const CheckEmail = ({ email, setStatus }: ICheckEmail) => {
  const { t } = useTranslation("docspace-registration");

  return (
    <StyledCheckEmail>
      <div>
        <StyledCheckEmailImage />
        <Heading level={1} size={4} label={t("CheckYourEmail")} />
      </div>

      <StyledCheckEmailBanner>
        <Trans
          t={t}
          i18nKey="WeVeJustSentYouAConfirmationLinkToYourEmail"
          values={{ email }}
          components={[<Text key="email" as="span" color="main" />]}
        />
      </StyledCheckEmailBanner>

      <Text size={3} color="#666666">
        <Trans t={t} i18nKey="TheLinkIsValidFor60Minutes" />
      </Text>

      <StyledCheckEmailLink onClick={() => setStatus("signup")}>
        {t("BackToSignUp")}
      </StyledCheckEmailLink>
    </StyledCheckEmail>
  );
};

export { CheckEmail };
