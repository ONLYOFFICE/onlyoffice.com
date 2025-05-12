import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { 
    StyledComplianceBlocks,
    StyledComlianceHeading
} from "./Compliance.styled";
import { items } from "./data/items";
import { FeatureLinkItem } from "@src/components/widgets/FeatureLinkItem";
import { Text } from "@src/components/ui/Text";

const Compliance = () => {
    const { t } = useTranslation("security");

    return(
        <Section
        desktopSpacing={["60px", "112px"]}
        tabletSpacing={["112px", "112px"]}
        tabletSmallSpacing={["89px", "56px"]}
        mobileSpacing={["48px", "68px"]}
        >
            <StyledComlianceHeading
                level={2}
                label={t("ComplianceWithData")}
            />
            <Container>
            <StyledComplianceBlocks>
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
                    />
                ))}
            </StyledComplianceBlocks>
            </Container>
        </Section>
    );
};

export { Compliance }