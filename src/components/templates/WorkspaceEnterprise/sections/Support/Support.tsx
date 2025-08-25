import { Trans, useTranslation } from "next-i18next";
import { Link } from "@src/components/ui/Link";

import {
  StyledSupport,
  StyledSupportBg,
  StyledSupportContainer,
  StyledSupportHeading,
  StyledSupportText,
} from "./Support.styled";

const Support = () => {
  const { t } = useTranslation("workspace-enterprise");

  return (
    <StyledSupport
      desktopSpacing={["0", "0"]}
      tabletSpacing={["0", "0"]}
      tabletSmallSpacing={["0", "0"]}
      mobileSpacing={["0", "0"]}
    >
      <StyledSupportBg>
        <StyledSupportContainer>
          <StyledSupportHeading
            level={2}
            label={t("Support")}
            color="#fff"
            size={2}
            textAlign="center"
          />
          <StyledSupportText color="#fff" textAlign="center">
            <Trans
              t={t}
              i18nKey={t("SupportText")}
              components={[
                <Link
                  key={0}
                  href="mailto:sales@onlyoffice.com"
                  textUnderline
                  hover="underline-none"
                />,
                <Link
                  key={1}
                  href="mailto:support@onlyoffice.com"
                  textUnderline
                  hover="underline-none"
                />,
              ]}
            />
          </StyledSupportText>
        </StyledSupportContainer>
      </StyledSupportBg>
    </StyledSupport>
  );
};

export { Support };
