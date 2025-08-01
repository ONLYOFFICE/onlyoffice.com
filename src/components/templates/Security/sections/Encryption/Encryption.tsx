import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { 
    StyledEncryptionBlocks,
    StyledEncryptionHeading,
    StyledFeatureItem,
    StyledFeatureItemHeading,
    StyledFeatureItemText,
    StyledLink
} from "./Encryption.styled";
import { items } from "./data/items";

const Encryption = () => {
    const { t } = useTranslation("security");

    return(
        <Section
        desktopSpacing={["60px", "22px"]}
        tabletSpacing={["112px", "80px"]}
        tabletSmallSpacing={["89px", "60px"]}
        >
            <StyledEncryptionHeading
                level={2}
                label={t("DataEncryption")}
            />
            <Container>
            <StyledEncryptionBlocks>
                {items.map((item, index) => (
                    <StyledFeatureItem key={index}>
                        <StyledFeatureItemHeading 
                        className="feature-heading"
                        size={5}
                        label={t(item.heading)}/>
                        {Array.isArray(item.text) && item.text.map((el, idx) => (
                            <StyledFeatureItemText key={idx} 
                            size={3}
                            label={t(el)}
                            />
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
            </StyledEncryptionBlocks>
            </Container>
        </Section>
    );
};

export { Encryption }