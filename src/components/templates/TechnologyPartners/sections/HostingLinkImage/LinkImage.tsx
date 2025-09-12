import { Section } from "@src/components/ui/Section";
import { Trans, useTranslation } from "next-i18next";
import {
  StyledHeading,
  StyledText,
  StyledContainer,
  WrapperLink,
} from "./LinkImage.styled";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";

const HostingLinkImage = () => {
  const { t } = useTranslation("technology-partners");

  return (
    <Section
      desktopSpacing={["168px", "96px"]}
      tabletSpacing={["144px", "80px"]}
      tabletSmallSpacing={["144px", "80px"]}
      mobileSpacing={["112px", "48px"]}
      background="#f5f5f5"
      id="part-hosting"
    >
      <StyledContainer>
        <StyledHeading label={t("Hosting")} />
        <WrapperLink>
          <StyledText>
            <Trans
              t={t}
              i18nKey={t("ProvideYourCustomers")}
              components={[
                <Link
                  href="hosting-providers"
                  color="main"
                  textUnderline
                  hover="underline-none"
                  key="0"
                />,
              ]}
            />
          </StyledText>
        </WrapperLink>
        <Button
          as="a"
          href="mailto:sales@onlyoffice.com"
          label={t("SendRequest")}
        />
      </StyledContainer>
    </Section>
  );
};

export { HostingLinkImage };
