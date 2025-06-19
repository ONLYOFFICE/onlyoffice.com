import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { 
    StyledProtectionBlocks,
    StyledProtectionHeading
} from "./Protection.styled";
import { items } from "./data/items";
import { FeatureLinkItem } from "@src/components/widgets/FeatureLinkItem";

const Protection = () => {
    const { t } = useTranslation("security");

    return(
        <Section
        desktopSpacing={["60px", "112px"]}
        tabletSpacing={["56px", "112px"]}
        tabletSmallSpacing={["57px", "56px"]}
        mobileSpacing={["40px", "68px"]}
        >
            <StyledProtectionHeading
                level={2}
                label={t("DataProtection")}
            />
            <Container>
            <StyledProtectionBlocks>
                {items.map((item, index) => (
                    <FeatureLinkItem
                    ns="security"
                    variant="horizontal"
                    customPadding="70px 0 0 0"
                    key={index}
                    icon={{
                        url: item.icon.url,
                        positionX: item.icon.positionX,
                        mobilePositionX: item.icon.mobilePositionX
                    }}
                    heading={t(String(item.heading))}
                    textList={item.textList ? item.textList.map((el) => t(String(el))) : undefined}
                    items={item.items}
                    linkText={t(String(item.linkText))}
                    linkUrl={item.linkUrl}
                    target={item.target}
                    />
                ))}
            </StyledProtectionBlocks>
            </Container>
        </Section>
    );
};

export { Protection }