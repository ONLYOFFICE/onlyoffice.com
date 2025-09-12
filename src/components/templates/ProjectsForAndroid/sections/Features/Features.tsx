import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { useTranslation } from "next-i18next"
import { 
    StyledFeaturesWrapper,
    StyledFeatureImageItem,
 } from "./Features.styled";
import { items } from "./data/items";

const Features = () => {
    const { t } = useTranslation("projects-for-android");
    return(
        <Section
        desktopSpacing={["80px", "0"]}
        >
            <Container>
                <Heading
                label={t("ManageYourTeam")}
                size={3}
                textAlign="center"
                />
                <StyledFeaturesWrapper>
                    {items.map(({heading, text, image}, idx) => (
                        <StyledFeatureImageItem
                        position={{desktop: idx % 2 == 1 ? "right" : "left"}}
                        key={idx}
                        className="feature-item"
                        heading={t(String(heading))}                        
                        text={t(String(text))}
                        image={{
                            url: t(image.url),
                            height: image.height
                        }}
                        />
                    ))}
                </StyledFeaturesWrapper>
            </Container>
        </Section>
    )
}

export { Features }