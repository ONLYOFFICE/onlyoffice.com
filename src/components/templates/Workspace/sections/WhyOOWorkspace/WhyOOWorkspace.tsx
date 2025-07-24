import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledWhyOOWorkspaceFeatureCard,
  StyledWhyOOWorkspaceFeatures,
  StyledWhyOOWorkspaceText,
  StyledWhyOOWorkspaceWrapper,
} from "./WhyOOWorkspace.styled";
import { Heading } from "@src/components/ui/Heading";
import { features } from "./data/items";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const WhyOOWorkspace = () => {
  const { t } = useTranslation("workspace");

  return (
    <Section
      desktopSpacing={["112px", "180px"]}
      tabletSpacing={["112px", "180px"]}
      tabletSmallSpacing={["88px", "88px"]}
    >
      <Container>
        <StyledWhyOOWorkspaceWrapper>
          <Heading
            level={2}
            size={3}
            label={t("WhyOOWorkspace")}
            textAlign="center"
          />
          <StyledWhyOOWorkspaceText
            size={1}
            label={t("Benefits")}
            textAlign="center"
          />
          <StyledWhyOOWorkspaceFeatures>
            {features.map((item, index) => (
              <StyledWhyOOWorkspaceFeatureCard key={index} $icon={item.icon}>
                <Heading level={4} size={5} label={t(item.title)} />
                <Text size={2} color="#666666" label={t(item.text)} />
                {item.link && (
                  <Link
                    href={item.link.href}
                    label={t(item.link.label)}
                    target={item.link.isExternal ? "_blank" : undefined}
                    color="main"
                    textUnderline
                    hover="underline-none"
                  />
                )}
              </StyledWhyOOWorkspaceFeatureCard>
            ))}
          </StyledWhyOOWorkspaceFeatures>
        </StyledWhyOOWorkspaceWrapper>
      </Container>
    </Section>
  );
};

export { WhyOOWorkspace };
