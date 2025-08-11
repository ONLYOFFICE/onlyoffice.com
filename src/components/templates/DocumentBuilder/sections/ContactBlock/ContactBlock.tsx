import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Trans, useTranslation } from "next-i18next";
import { StyledButton, StyledContactBlock, StyledContactBlockHeading, StyledContactBlockText } from "./ContactBlock.styled";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";

const ContactBlock = () => {
    const { t } = useTranslation("document-builder");

    return(
        <Section
        background="#f9f9f9"
        desktopSpacing={["132px", "132px"]}
        tabletSpacing={["112px", "112px"]}
        tabletSmallSpacing={["112px", "112px"]}
        mobileSpacing={["48px", "24px"]}
        >
            <Container>
                <StyledContactBlock>
                    <StyledContactBlockHeading
                    size={3}
                    label={t("ONLYOFFICEDocumentBuilderPart")}
                    />
                    {items.text.map((item, idx) => (
                        <StyledContactBlockText key={idx}>
                            <Trans
                            t={t}
                            i18nKey={t(item.label)}
                            components={[
                            <Link 
                            key="0"
                            color="main"
                            href={item.url}
                            target={item.target}
                            hover="underline-none"
                            textUnderline
                            />]}
                            />
                        </StyledContactBlockText>
                    ))}
                    <StyledButton as="a" href={items.button.url}>{t(items.button.label)}</StyledButton>
                </StyledContactBlock>
            </Container>
        </Section>
    )
}

export { ContactBlock }