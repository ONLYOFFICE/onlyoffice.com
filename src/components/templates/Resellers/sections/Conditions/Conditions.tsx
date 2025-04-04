import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { StyledConditions } from "./Conditions.styled";
import { items } from "./data/items";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { useTranslation } from "next-i18next";

const Conditions = () => {
  const { t } = useTranslation("resellers");

  return (
    <Section tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <Heading
          label={t("ConditionsTitle")}
          textAlign="center"
          level={2}
          size={3}
        />
        <StyledConditions>
          {items.map(({ icon, title, text }, index) => (
            <FeatureItem
              key={index}
              variant="horizontal"
              icon={icon}
              title={t(title ?? "")}
              text={t(String(text))}
            />
          ))}
        </StyledConditions>
      </Container>
    </Section>
  );
};

export { Conditions };
