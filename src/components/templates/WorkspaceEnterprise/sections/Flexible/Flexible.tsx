import { Trans, useTranslation } from "next-i18next";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";

import {
  StyledSection,
  StyledFlexibleContainer,
  StyledFlexibleHeading,
} from "./Flexible.styled";

const Flexible = () => {
  const { t } = useTranslation("workspace-enterprise");

  return (
    <StyledSection
    desktopSpacing={["164px", "130px"]}
    tabletSpacing={["164px", "130px"]}
    tabletSmallSpacing={["132px", "158px"]}
    mobileSpacing={["60px", "80px"]}
    >
        <StyledFlexibleContainer>
          <StyledFlexibleHeading
            level={2}
            label={t("FlexibleChoice")}
            size={2}
            textAlign="center"
          />
          <Text textAlign="center">
            <Trans
              t={t}
              i18nKey={t("FlexibleChoiceText")}
              components={[
                <Link
                  key={0}
                  href="/workspace-prices#workspace-on-premises"
                  textUnderline
                  hover="underline-none"
                  color="main"
                />,
                <Link
                  key={1}
                  href="mailto:sales@onlyoffice.com"
                  textUnderline
                  hover="underline-none"
                  color="main"
                />,
              ]}
            />
          </Text>
        </StyledFlexibleContainer>
    </StyledSection>
  );
};

export { Flexible };
