import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { 
    StyledAuthenticationFeatures, 
    StyledAuthenticationHeading, 
    StyledFeatureImageItem,
    StyledFeatureItemText,
} from "./Authentication.styled";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";

const Authentication = () => {
    const { t } = useTranslation("security");

    return(
        <Section
        background="#f5f5f5"
        desktopSpacing={["60px", "112px"]}
        tabletSpacing={["56px", "112px"]}
        tabletSmallSpacing={["87px", "56px"]}
        mobileSpacing={["50px", "68px"]}
        >
            <Container>
            <StyledAuthenticationHeading
                level={2}
                label={t("AuthenticationAndPortal")}
            />
            <StyledAuthenticationFeatures>
                {items.map(({title, text, image}, index) => (
                    <StyledFeatureImageItem
                    key={index}
                    className={`auth-item auth-item-${index + 1}`}
                    title={t(title)}
                    position={index % 2 === 0 ? "left" : "right"}
                    text={
                        Array.isArray(text.label)
                        ? {
                            label: text.label.map((item, index) => (
                                <StyledFeatureItemText key={index}>
                                    <Trans
                                    key={index}
                                    t={t}
                                    i18nKey={String(item)}
                                    components={
                                        text.links?.map((link, index) => (
                                        <Link
                                        key={index}
                                        href={link.href}
                                        target={link.isExternal ? "_blank" : undefined}
                                        color="main"
                                        textUnderline
                                        hover="underline-none"
                                        />
                                    ))}
                                />
                                </StyledFeatureItemText>
                            )),
                        }
                        : {
                            label: (
                                <Trans
                                t={t}
                                i18nKey={String(text.label)}
                                components={text.links?.map((link, index) => (
                                    <Link
                                        key={index}
                                        href={link.href}
                                        target={link.isExternal ? "_blank" : undefined}
                                        color="main"
                                        textUnderline
                                        hover="underline-none"
                                    />
                                ))}
                                />
                            ),
                        }
                    }
                    image={{
                        url: t(image.url),
                        url2x: image.url2x && t(image.url2x),
                        height: image.height,
                    }}
                    />
                ))}
            </StyledAuthenticationFeatures>
            </Container>
        </Section>
    );
};

export { Authentication }