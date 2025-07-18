import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledGetStartedItem,
  StyledGetStartedItemContent,
  StyledGetStartedItemIcon,
  StyledGetStartedItems,
  StyledGetStartedText,
  StyledGetStartedWrapper,
} from "./GetStarted.styled";
import { Heading } from "@src/components/ui/Heading";
import { items } from "./data/items";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";

const GetStarted = () => {
  const { t } = useTranslation("workspace");

  return (
    <Section
      tabletSmallSpacing={["88px", "88px"]}
      mobileSpacing={["48px", "55px"]}
      background="#F5F5F5"
    >
      <Container>
        <StyledGetStartedWrapper>
          <Heading level={2} size={3} label={t("GettingStarted")} />
          <StyledGetStartedText size={2} label={t("UseOOWorkspace")} />
          <StyledGetStartedItems>
            {items.map((item, index) => (
              <StyledGetStartedItem key={index}>
                <StyledGetStartedItemIcon
                  $src={t(item.icon.src)}
                  $width={item.icon.width}
                />
                <StyledGetStartedItemContent>
                  <Heading level={4} size={5} label={t(item.title)} />
                  <Text size={3} label={t(item.text)} />
                </StyledGetStartedItemContent>
                <Button
                  as="a"
                  href={item.link.isExternal && item.link.href.startsWith("http")
                    ? item.link.href
                    : t(item.link.href)
                  }
                  variant="secondary"
                  target={item.link.isExternal ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  label={t(item.link.label)}
                />
              </StyledGetStartedItem>
            ))}
          </StyledGetStartedItems>
          <Text size={2}>
            <Trans
              t={t}
              i18nKey="CommunityFooterText"
              components={[
                <Link
                  key={0}
                  href="/download-workspace?from=workspace#workspace-community"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
              ]}
            />
          </Text>
        </StyledGetStartedWrapper>
      </Container>
    </Section>
  );
};

export { GetStarted };
