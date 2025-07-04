import { Container } from "@src/components/ui/Container";
import { useTranslation } from "next-i18next"
import { ProtectBlock, StyledButton, StyledHeading, StyledSection } from "./Protect.styled";

const Protect = () => {
    const { t } = useTranslation("private-rooms");

    return(
        <StyledSection
        desktopSpacing={["0", "0"]}
        tabletSpacing={["0", "0"]}
        tabletSmallSpacing={["0", "0"]}
        mobileSpacing={["0", "0"]}
        >
            <Container>
                <ProtectBlock>
                    <StyledHeading 
                    label={t("ProtectYourSensitive")}
                    />
                    <StyledButton 
                    label={t("TryNow")}
                    variant="quaternary"
                    />
                </ProtectBlock>
            </Container>
        </StyledSection>
    );
};

export { Protect }