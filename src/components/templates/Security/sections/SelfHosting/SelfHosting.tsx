import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { useTranslation } from "next-i18next"
import { 
    StyledHeading,
    StyledSelfHostingWrapper,
    StyledWrapperLeft,
    StyledWrapperRightImg,
    StyledText
} from "./SelfHostng.styled";

const SelfHosting = () => {
    const { t } = useTranslation("security");

    return(
        <Section
        background="#333"
        desktopSpacing={["80px", "80px"]}
        tabletSpacing={["80px", "80px"]}
        tabletSmallSpacing = {["88px", "88px"]}
        mobileSpacing={["48px", "48px"]}
        >
        <Container>
            <StyledSelfHostingWrapper>
                <StyledWrapperLeft>
                    <StyledHeading color="#fff" level={2} label={t("Self_Hosting") }/>
                    <StyledText size={3} color="#fff" label={t("ONLYOFFICEWasDesignedForBusinesses")}/>
                    <StyledText size={3} color="#fff" label={t("WeProvideCompleteTechnicalSupport")}/>
                </StyledWrapperLeft>
                <StyledWrapperRightImg/>
            </StyledSelfHostingWrapper>
        </Container>
        </Section>
    )
}

export { SelfHosting }