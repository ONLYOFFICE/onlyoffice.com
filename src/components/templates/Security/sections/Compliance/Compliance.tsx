import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { 
    StyledComplianceBlocks,
    StyledComplianceHeading,
    StyledFeatureItem,
    StyledFeatureItemHeading,
    StyledFeatureItemText,
    StyledLink
} from "./Compliance.styled";
import { items } from "./data/items";

const Compliance = () => {
    const { t } = useTranslation("security");

    return(
        <Section
        desktopSpacing={["60px", "136px"]}
        tabletSpacing={["112px", "136px"]}
        tabletSmallSpacing={["89px", "112px"]}
        mobileSpacing={["48px", "68px"]}
        >
            <StyledComplianceHeading
                level={2}
                label={t("ComplianceWithData")}
            />
            <Container>
            <StyledComplianceBlocks>
                {items.map((item, index) => (
                    <StyledFeatureItem key={index}>
                        <StyledFeatureItemHeading 
                        size={5}
                        label={t(item.heading)}/>
                        {Array.isArray(item.text) && item.text.map((el, idx) => (
                            <StyledFeatureItemText key={idx} 
                            size={3}
                            label={t(el)}
                            />
                        ))}
                        <StyledLink
                        color="main"
                        textUnderline
                        hover="underline-none"
                        href={item.link?.href}
                        target={item.link?.target}
                        label={t(String(item.link?.label))}
                        />
                    </StyledFeatureItem>
                ))}
            </StyledComplianceBlocks>
            </Container>
        </Section>
    );
};

export { Compliance }