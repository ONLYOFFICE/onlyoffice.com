import { useTranslation } from "next-i18next";
import {
  StyledContainer,
  HeadWhy,
  BenefitsWrapper,
  BenefitItem,
  Benefit,
  BenefitImg,
  BenefitBody,
  StyledLink,
} from "./UserBenefits.styled";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { benefits } from "./data/items";

const UserBenefits = () => {
  const { t } = useTranslation("developer-edition");

  return (
    <Section>
      <StyledContainer>
        <Heading level={2}>{t("WhyOO")}</Heading>
        {benefits.map((benefit, index) => (
          <Benefit key={index}>
            <HeadWhy level={3} $src={benefit.icon}>
              {t(benefit.title)}
            </HeadWhy>
            <BenefitsWrapper>
              {benefit.items.map((item, index) => (
                <BenefitItem key={index}>
                  <BenefitImg $src={item.icon} />
                  <BenefitBody>
                    <Heading level={4}>{t(item.title)}</Heading>
                    <Text lineHeight="1.6em">{t(item.description)}</Text>
                    {item.link && (
                      <Link color="main" textUnderline hover="underline-none" href={item.link.url}>{t(item.link.text)}</Link>
                    )}
                  </BenefitBody>
                </BenefitItem>
              ))}
            </BenefitsWrapper>
            {benefit.link && (
              <StyledLink color="main" textUnderline hover="underline-none" href={benefit.link.url}>{t(benefit.link.text)}</StyledLink>
            )}
          </Benefit>
        ))}
      </StyledContainer>
    </Section>
  );
};

export { UserBenefits };
