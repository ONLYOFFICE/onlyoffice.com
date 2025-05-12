import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { 
    StyledEncryptionBlocks,
    StyledEncryptionHeading
} from "./Encryption.styled";
import { items } from "./data/items";
import { FeatureLinkItem } from "@src/components/widgets/FeatureLinkItem";

const Encryption = () => {
    const { t } = useTranslation("security");

    return(
        <Section
        desktopSpacing={["60px", "22px"]}
        tabletSpacing={["112px", "56px"]}
        tabletSmallSpacing={["89px", "56px"]}
        mobileSpacing={["48px", "28px"]}
        >
            <StyledEncryptionHeading
                level={2}
                label={t("DataEncryption")}
            />
            <Container>
            <StyledEncryptionBlocks>
                {items.map((item, index) => (
                    <FeatureLinkItem
                    variant="horizontal"
                    customPadding="80px 0 0 0"
                    key={index}
                    icon={{
                        url: item.icon.url,
                        positionX: item.icon.positionX,
                        mobilePositionX: item.icon.mobilePositionX
                    }}
                    heading={t(String(item.heading))}
                    textList={item.textList ? item.textList.map((el) => t(String(el))) : undefined}
                    linkText={t(String(item.linkText))}
                    linkUrl={item.linkUrl}
                    target={item.target}
                    />
                ))}
            </StyledEncryptionBlocks>
            </Container>
        </Section>
    );
};

export { Encryption }