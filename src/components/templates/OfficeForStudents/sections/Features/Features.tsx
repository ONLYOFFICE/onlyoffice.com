import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import {
  StyledFeaturesHeading,
  StyledFeaturesText,
  StyledFeatures,
  StyledFeaturesButtonsWrapper,
} from "./Features.styled";
import { items } from "./data/items";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";

const Features = () => {
  const { t } = useTranslation("office-for-students");

  return (
    <Section>
      <Container>
        <StyledFeaturesHeading level={2} size={2}>
          <Trans
            t={t}
            i18nKey={"WhyOOTitle"}
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        </StyledFeaturesHeading>
        <StyledFeaturesText label={t("WhyOODesc")} />
        <StyledFeatures>
          {items.map(({ icon, heading, text, links }, index) => (
            <FeatureItem
              key={index}
              variant="horizontal"
              icon={icon}
              heading={t(heading ?? "")}
              text={
                <Trans
                  t={t}
                  i18nKey={String(text)}
                  components={links?.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      target={link.isExternal ? "_blank" : undefined}
                      color="main"
                      textUnderline
                      hover="underline-none"
                    />
                  ))}
                />
              }
            />
          ))}
        </StyledFeatures>
        <StyledFeaturesButtonsWrapper>
          <Button
            id="features-get-it-now"
            as="a"
            href="/download-desktop#desktop"
            label={t("GetItNow")}
          />
          <Button
            id="features-try-in-the-cloud"
            as="a"
            href="/docspace-registration"
            variant="secondary"
            label={t("TryInTheCloud")}
          />
        </StyledFeaturesButtonsWrapper>
      </Container>
    </Section>
  );
};

export { Features };
