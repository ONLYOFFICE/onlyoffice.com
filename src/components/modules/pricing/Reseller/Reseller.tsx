import { useTranslation, Trans } from "next-i18next";
import { StyledReseller } from "./Reseller.styled";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const Reseller = () => {
  const { t } = useTranslation("PricingReseller");

  return (
    <StyledReseller>
      <Heading level={4} label={t("AreYouLookingForAnOOReseller")} />
      <Text size={2}>
        <Trans
          t={t}
          i18nKey="FindOutTheListAuthorizedOOPartners"
          components={[
            <Link
              key={0}
              href="/find-partners"
              color="main"
              textUnderline
              hover="underline-none"
            />,
          ]}
        />
      </Text>
    </StyledReseller>
  );
};

export { Reseller };
