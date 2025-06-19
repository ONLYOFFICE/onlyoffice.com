import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Trans, useTranslation } from "next-i18next"
import { 
  StyledBugBlock, 
  StyledHeading, 
  StyledText, 
  StyledTextBlock 
} from "./Bug.styled";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";

const Bug = () => {
    const { t } = useTranslation("security");

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
                <StyledTextBlock>
                  {items.text.map((item, idx) => (
                    <StyledText as="p" key={idx}>
                      <Trans
                        t={t}
                        i18nKey={t(String(item.label))}
                        components={[
                            <Link
                              href={item.links?.href}
                              target={item.links?.isExternal ? "_blank" : undefined}
                              color="main"
                              textUnderline
                              hover="underline-none"
                            />
                        ]}
                      />
                    </StyledText>
                  ))}
                </StyledTextBlock>
            </StyledBugBlock>
        </Container>
        </Section>
    )
}

export { Bug }