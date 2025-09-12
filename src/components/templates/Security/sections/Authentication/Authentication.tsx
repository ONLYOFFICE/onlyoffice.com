import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { 
    StyledAuthenticationHeading, 
    StyledFeatureImageItemText, 
    StyledHowItWorksFeatures,
} from "./Authentication.styled";
import { items } from "./data/items";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";
import { Text } from "@src/components/ui/Text";

const Authentication = () => {
    const { t } = useTranslation("security");

    return(
        <Section
        background="#f5f5f5"
        desktopSpacing={["60px", "112px"]}
        tabletSpacing={["56px", "112px"]}
        tabletSmallSpacing={["87px", "88px"]}
        >
            <Container>
            <StyledAuthenticationHeading
                level={2}
                label={t("AuthenticationAndPortal")}
            />
            <StyledHowItWorksFeatures>
                {items.map(({ heading, text, links, image }, index) => (
                    <FeatureImageItem
                    key={index}
                    className="feature-item"
                    position={{ desktop: index % 2 === 1 ? "right" : "left" }}
                    heading={t(String(heading))}
                    text={
                        <>
                        {text.map((textKey, idx) => (
                            <StyledFeatureImageItemText key={idx}>
                                <Trans
                                t={t}
                                i18nKey={textKey}
                                components={[<Text as="span" fontWeight={700} key="0" />]}
                                />
                            </StyledFeatureImageItemText>
                        ))}
                        </>
                    }
                    links={links?.map(link => ({
                        href: t(link.href, { defaultValue: link.href }),
                        label: t(link.label),
                        isExternal: link.isExternal,
                    }))}
                    image={{
                        url: t(image.url),
                        height: image.height,
                        width: image.width
                    }}
                    />
                ))}
            </StyledHowItWorksFeatures>
            </Container>
        </Section>
    );
};

export { Authentication }