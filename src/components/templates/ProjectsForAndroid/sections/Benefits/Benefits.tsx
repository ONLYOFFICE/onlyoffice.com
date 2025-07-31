import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { useTranslation } from "next-i18next"
import { 
    BlockText,
    StyledBenefitsWrapper, 
    StyledBenefitsWrapperLeft, 
    StyledBenefitsWrapperRight, 
    StyledButton, 
    StyledHeading, 
    StyledText
} from "./Benefits.styled";
import { items } from "./data/items";

const Benefits = () => {
    const { t } = useTranslation("projects-for-android");

    return(
        <Section
        desktopSpacing={["32px", "100px"]}
        tabletSpacing={["32px", "0"]}
        tabletSmallSpacing={["32px", "0"]}
        >
            <Container>
                <StyledBenefitsWrapper>
                    <StyledBenefitsWrapperLeft>
                        <StyledHeading 
                        label={t("YourBenefits")}
                        size={3}
                        />
                        <BlockText>
                            {items.text.map((item, idx) => (
                                <StyledText 
                                key={idx}
                                label={t(item.label)}
                                size={1}
                                />
                            ))}
                        </BlockText>
                        <StyledButton 
                        as="a"
                        href={t(items.btnhref)}
                        target="_blank"
                        />
                    </StyledBenefitsWrapperLeft>
                    <StyledBenefitsWrapperRight $BenefitsImgUrl={t(items.image.url)} />
                </StyledBenefitsWrapper>
            </Container>
        </Section>
    );
};

export { Benefits }