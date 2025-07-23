import { useTranslation, Trans } from "next-i18next";
import {
  HeroBackground,
  HeroWrapper,
  HeroSubtitle,
  StepsWrapper,
  Steps,
  StepCard,
  StepNumber,
  StepContent,
  JWTNote,
  HeadingIcon,
  StepsImage,
  StepHeader,
  StepContentText,
} from "./HeroSection.styled";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { steps } from "./data/items";

export const HeroSection = () => {
  const { t } = useTranslation("installation-success-docs-cloud");

  return (
    <HeroBackground
      desktopSpacing={["184px", "112px"]}
      tabletSpacing={["160px", "112px"]}
      tabletSmallSpacing={["112px", "80px"]}
      mobileSpacing={["96px", "60px"]}
    >
      <HeroWrapper>
        <HeadingIcon />
        <Heading level={1}>{t("HeroTitle")}</Heading>
        <HeroSubtitle>{t("HeroSubtitle")}</HeroSubtitle>

        <StepsWrapper>
          <StepsImage />
          <Steps>
            {steps.map((step, i) => (
              <StepCard key={i}>
                <StepHeader>
                  <StepNumber>{i + 1}</StepNumber>
                  {t(step.text)}
                </StepHeader>

                {step.lines && (
                  <StepContent>
                    {step.lines.map((line, idx) => (
                      <StepContentText key={idx}>{t(line)}</StepContentText>
                    ))}
                  </StepContent>
                )}
              </StepCard>
            ))}
            <JWTNote>
              <Trans
                t={t}
                i18nKey="JwtNote"
                components={[
                  <Link
                    key={0}
                    href="https://www.onlyoffice.com/blog/2022/09/what-is-jwt/"
                    color="main"
                    target="_blank"
                  />,
                ]}
              />
            </JWTNote>
          </Steps>
        </StepsWrapper>
      </HeroWrapper>
    </HeroBackground>
  );
};
