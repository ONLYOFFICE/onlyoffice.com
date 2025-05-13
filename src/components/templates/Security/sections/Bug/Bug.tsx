import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Trans, useTranslation } from "next-i18next"
import { StyledBugBlock, StyledHeading, StyledText } from "./Bug.styled";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";

const Bug = () => {
    const { t } = useTranslation("security");
    const { text } = items;

    return(
        <Section
        background="#f5f5f5"
        desktopSpacing={["112px", "112px"]}
        tabletSmallSpacing = {["80px", "80px"]}
        mobileSpacing={["48px", "48px"]}
        >
        <Container>
            <StyledBugBlock>
                <StyledHeading size={3} textAlign="center">
                    <Trans
                    t={t}
                    i18nKey={items.title}
                    components={[<Text as="span" color="main" key="0"/>]}
                    />
                </StyledHeading>
                {Array.isArray(text.label)
                ? text.label.map((labelKey, idx) => (
                    <StyledText as="p" key={idx}>
                      <Trans
                        t={t}
                        i18nKey={labelKey}
                        components={
                          text.links?.map((link, linkIdx) => (
                            <Link
                              key={linkIdx}
                              href={link.href}
                              target={link.isExternal ? "_blank" : undefined}
                              color="main"
                              textUnderline
                              hover="underline-none"
                            />
                          ))
                        }
                      />
                    </StyledText>
                  ))
                : text.label && (
                    <StyledText as="p" textAlign="center">
                      <Trans
                        t={t}
                        i18nKey={String(text.label)}
                        components={
                          text.links?.map((link, linkIdx) => (
                            <Link
                              key={linkIdx}
                              href={link.href}
                              target={link.isExternal ? "_blank" : undefined}
                              color="main"
                              textUnderline
                              hover="underline-none"
                            />
                          ))
                        }
                      />
                    </StyledText>
                  )}
            </StyledBugBlock>
        </Container>
        </Section>
    )
}

export { Bug }