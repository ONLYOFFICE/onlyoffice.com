import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Card } from "./sub-components/Card";
import { items } from "./data/items";

import {
  StyledJobHeadingWrapper,
  StyledJobList,
  StyledJobSelector,
  StyledJobSelectorButton,
  StyledJobSelectorsWrapper
} from "./Job.styled";

const Job = () => {
  const { t } = useTranslation("vacancies");

  return (
    <Section
      background="#f9f9f9"
      desktopSpacing={["50px", "50px"]}
      tabletSpacing={["50px", "50px"]}
      tabletSmallSpacing={["50px", "50px"]}
      mobileSpacing={["0", "48px"]}
    >
      <Container>
        <StyledJobHeadingWrapper>
          <Heading label={t("JobHeading")} level={2} size={4} />
          <StyledJobSelectorsWrapper>
            <StyledJobSelector>
              <StyledJobSelectorButton
                label="Department"
                variant="quaternary"
               />
            </StyledJobSelector>
            <StyledJobSelector>
              <StyledJobSelectorButton
                label="Country"
                variant="quaternary"
               />
            </StyledJobSelector>
          </StyledJobSelectorsWrapper>
        </StyledJobHeadingWrapper>
        <StyledJobList>
          {items.map((item) => (
            <Card
              key={item.id}
              department={item.department}
              title={item.title}
              location={item.location}
              time={item.time}
              language={item.language}
              description={item.description}
              requirements={item.requirements}
              skills={item.skills}
              benefits={item.benefits}
            />
          ))}
        </StyledJobList>
      </Container>
    </Section>
  );
};

export { Job };