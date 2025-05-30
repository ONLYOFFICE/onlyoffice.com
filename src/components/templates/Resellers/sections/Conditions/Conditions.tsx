import { useTranslation } from "next-i18next";
import { StyledConditions } from "./Conditions.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { items } from "./data/items";

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
          {items.map(({ icon, heading, text }, index) => (
            <FeatureItem
              key={index}
              variant="horizontal"
              mobileVariant="horizontal-icon-left"
              icon={{
                url: icon.url,
                positionX: icon.positionX,
                mobileWidth: "48px",
                mobileHeight: "48px",
                mobilePositionX: icon.mobilePositionX,
                isSprite: true,
              }}
              heading={t(String(heading))}
              text={t(String(text))}
            />
          ))}
        </StyledConditions>
      </Container>
    </Section>
  );
};

export { Conditions };
