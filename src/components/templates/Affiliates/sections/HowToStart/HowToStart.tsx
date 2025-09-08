import { useTranslation, Trans } from "next-i18next";
import {
  StyledHowToStartHeading,
  StyledHowToStartButton,
  StyledHowToStartRegister,
} from "./HowToStart.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { StepCarousel } from "@src/components/widgets/StepCarousel";
import { items } from "./data/items";
import { Text } from "@src/components/ui/Text";
import { useRouter } from "next/router";

const HowToStart = () => {
  const { t } = useTranslation("affiliates");
  const { locale } = useRouter();

  return (
    <Section background="#f9f9f9" tabletSpacing={["80px", "80px"]}>
      <Container>
        <StyledHowToStartHeading
          level={2}
          textAlign="center"
          label={t("HowToStart")}
        />

        <StepCarousel
          items={items.map((item) => ({
            imgUrl: item.imgUrl,
            heading: (
              <Trans
                t={t}
                i18nKey={String(item.heading)}
                components={[
                  <Text
                    as="span"
                    fontStyle={locale !== "zh" ? "italic" : undefined}
                    color="#333"
                    fontWeight={700}
                    key="0"
                  />,
                ]}
              />
            ),
          }))}
        />

        <StyledHowToStartRegister>
          <StyledHowToStartButton
            id="how-to-start-register"
            className="register-button"
            forwardedAs="a"
            href="https://ascensio-systems-pte-ltd.getrewardful.com/signup"
            target="_blank"
            label={t("Regitster")}
          />
          <Text
            label={t("BecomeAnOOPartner")}
            fontSize="14px"
            lineHeight="21px"
            color="#808080"
            textAlign="center"
          />
        </StyledHowToStartRegister>
      </Container>
    </Section>
  );
};

export { HowToStart };
