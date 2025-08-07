import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { 
    StyledProtectionBlocks,
    StyledProtectionHeading,
    StyledFeatureItem,
    StyledFeatureItemHeading,
    StyledFeatureItemText,
    StyledLink
} from "./Protection.styled";
import { items } from "./data/items";
import { Text } from "@src/components/ui/Text";

const Protection = () => {
    const { t } = useTranslation("security");

    return(
        <Section
        desktopSpacing={["60px", "112px"]}
        tabletSpacing={["54px", "128px"]}
        tabletSmallSpacing={["53px", "88px"]}
        mobileSpacing={["28px", "44px"]}
        >
            <StyledProtectionHeading
                level={2}
                label={t("DataProtection")}
            />
            <Container>
            <StyledProtectionBlocks>
                {items.map((item, index) => (
                    <StyledFeatureItem key={index}>
                        <StyledFeatureItemHeading 
                        size={5}
                        label={t(item.heading)}/>
                        {Array.isArray(item.text) && item.text.map((el, idx) => (
                            <StyledFeatureItemText key={idx} 
                            className="feature-desc"
                            size={3}
                            >
                                <Trans
                                t={t}
                                i18nKey={t(el)}
                                components={[<Text as="span" fontWeight={700} key={0} />]}
                                />
                            </StyledFeatureItemText>
                        ))}
                        { item.link && (
                            <StyledLink
                            color="main"
                            textUnderline
                            hover="underline-none"
                            href={item.link?.href}
                            target={item.link?.target}
                            label={t(String(item.link?.label))}
                            />
                        )}
                    </StyledFeatureItem>
                ))}
            </StyledProtectionBlocks>
            </Container>
        </Section>
    );
};

export { Protection }