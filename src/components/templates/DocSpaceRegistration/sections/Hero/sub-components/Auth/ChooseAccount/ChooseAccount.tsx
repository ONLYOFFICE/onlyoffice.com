import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  StyledChooseAccount,
  StyledChooseAccountHeader,
  StyledChooseAccountText,
  StyledChooseAccountItems,
  StyledChooseAccountItem,
  StyledChooseAccountLabel,
  StyledChooseAccountButtons,
  StyledChooseAccountButton,
} from "./ChooseAccount.styled";
import { IChooseAccount } from "./ChooseAccount.types";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";
import { ArrowForwardIcon } from "@src/components/icons";

const ChooseAccount = ({
  existTenants,
  setExistTenants,
  status,
  createNewAccountQuery,
}: IChooseAccount) => {
  const { t } = useTranslation("docspace-registration");
  const [showAll, setShowAll] = useState(false);

  const sortedTenants = existTenants
    ?.slice()
    .sort((a, b) => a.domain.localeCompare(b.domain));
  const maxDisplayedTenants = 6;
  const visibleTenants = showAll
    ? sortedTenants
    : sortedTenants?.slice(0, maxDisplayedTenants);

  return (
    <StyledChooseAccount>
      <StyledChooseAccountHeader>
        <Heading level={1} size={3} label={t("ChooseYourDocSpace")} />
        <StyledChooseAccountText>
          {t("ContinueWithOneOfYourAccounts")}
        </StyledChooseAccountText>
      </StyledChooseAccountHeader>

      <StyledChooseAccountItems>
        {visibleTenants?.map((tenant, index) => {
          const parsed = new URL(tenant.domain);
          const origin = parsed.origin;
          const baseDomain = "." + origin.split(".").slice(-2).join(".");
          const hostnamePrefix = origin.replace(baseDomain, "");

          return (
            <StyledChooseAccountItem
              href={`${tenant.domain}${tenant.path}`}
              key={index}
            >
              <div>
                {hostnamePrefix}
                <Text as="span" color="#808080" label={baseDomain} />
              </div>
              <ArrowForwardIcon />
            </StyledChooseAccountItem>
          );
        })}
      </StyledChooseAccountItems>

      <StyledChooseAccountButtons>
        {sortedTenants?.length > maxDisplayedTenants && (
          <StyledChooseAccountButton onClick={() => setShowAll(!showAll)}>
            {showAll ? t("ShowLess") : t("ShowAll")}
          </StyledChooseAccountButton>
        )}

        <StyledChooseAccountButton
          onClick={() => setExistTenants([])}
          data-testid="account-back-button"
        >
          {status === "signup" ? t("BackToSignUp") : t("BackToLogIn")}
        </StyledChooseAccountButton>
      </StyledChooseAccountButtons>

      {status === "signup" && (
        <>
          <StyledChooseAccountLabel>{t("Or")}</StyledChooseAccountLabel>

          <Button
            as="a"
            data-testid="account-create-button"
            href={`/docspace-registration-proxy?${createNewAccountQuery}`}
            variant="tertiary"
            label={t("CreateNewAccount")}
          />
        </>
      )}
    </StyledChooseAccount>
  );
};

export { ChooseAccount };
