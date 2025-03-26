import { useTranslation } from "next-i18next";
import {
  StyledAssignmentsHeading,
  StyledAssignmentsBtnWrapper,
} from "./Assignments.styled";
import { FeatureSwitcher } from "@src/components/widgets/FeatureSwitcher";
import { items } from "./data/items";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";

const Assignments = () => {
  const { t } = useTranslation("office-for-moodle");

  return (
    <Section
      background="#f9f9f9"
      desktopSpacing={["90px", "112px"]}
      mobileSpacing={["0", "48px"]}
    >
      <Container>
        <StyledAssignmentsHeading
          level={2}
          label={t("CreateShareAndGradeStudentsAssignments")}
          textAlign="center"
        />

        <FeatureSwitcher
          imageHeight={550}
          position="right"
          items={items.map(({ label, image }) => ({
            label: t(String(label)),
            image: {
              url: t(image.url),
              url2x: image.url2x ? t(image.url2x) : undefined,
            },
          }))}
        />

        <StyledAssignmentsBtnWrapper>
          <Button
            id="assignments-free-demo"
            as="a"
            href="mailto:sales@onlyoffice.com?subject=Demo%20request:%20Moodle"
            label={t("ScheduleYourFreeDemo")}
          />
        </StyledAssignmentsBtnWrapper>
      </Container>
    </Section>
  );
};

export { Assignments };
