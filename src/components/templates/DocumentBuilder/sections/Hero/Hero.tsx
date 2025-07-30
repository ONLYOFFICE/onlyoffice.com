import { Button } from "@src/components/ui/Button";
import { Container } from "@src/components/ui/Container";
import { useTranslation } from "next-i18next"
import { 
    DocumentBuilderBlock, 
    StyledDocumentBuilderHeading, 
    StyledDocumentBuilderText, 
    StyledSection 
} from "./Hero.styled";

const Hero = () => {
    const { t } = useTranslation("document-builder");

    return(
        <StyledSection
        desktopSpacing={["0", "0"]}
        tabletSpacing={["0", "0"]}
        tabletSmallSpacing={["0", "0"]}
        mobileSpacing={["0", "0"]}
        >
            <Container>
                <DocumentBuilderBlock>
                    <StyledDocumentBuilderHeading
                    label={t("FrameworkForAdvanced")}
                    />
                    <StyledDocumentBuilderText
                    label={t("CompatibleWithMicrosoft")}
                    />
                    <Button
                    as="a"
                    label={t("GetStarted")}
                    href="https://api.onlyoffice.com/docs/document-builder/get-started/overview/"
                    target="_blank"
                    />
                </DocumentBuilderBlock>
            </Container>
        </StyledSection>
    );
};

export { Hero };