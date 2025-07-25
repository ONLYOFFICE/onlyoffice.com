import { useTranslation } from "next-i18next";
import {
  StyledChooseAccount,
  StyledChooseAccountHeader,
  StyledChooseAccountText,
  StyledChooseAccountItems,
  StyledChooseAccountItem,
  StyledChooseAccountLabel,
  StyledChooseAccountLink,
} from "./ChooseAccount.styled";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { ArrowForwardIcon } from "@src/components/icons";

const ChooseAccount = () => {
  const { t } = useTranslation("docspace-registration");

  return (
    <StyledChooseAccount>
      <StyledChooseAccountHeader>
        <Heading level={1} size={3} label={t("ChooseYourDocSpace")} />
        <StyledChooseAccountText>
          {t("ContinueWithOneOfYourAccounts")}
        </StyledChooseAccountText>
      </StyledChooseAccountHeader>

      <StyledChooseAccountItems>
        <StyledChooseAccountItem>
          oxbergclassengroup-bg .onlyoffice.com
          <ArrowForwardIcon />
        </StyledChooseAccountItem>
      </StyledChooseAccountItems>

      <StyledChooseAccountLink
        href="/docspace-registration"
        color="main"
        textUnderline
        hover="underline-none"
        label={t("BackToSignUp")}
      />

      <StyledChooseAccountLabel>{t("Or")}</StyledChooseAccountLabel>

      <Button variant="tertiary" label={t("CreateNewAccount")} />
    </StyledChooseAccount>
  );
};

export { ChooseAccount };
