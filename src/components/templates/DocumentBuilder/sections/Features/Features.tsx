import { Container } from "@src/components/ui/Container"
import { Trans, useTranslation } from "next-i18next"
import { 
    FeaturesBlock, 
    StyledFeaturesWrapper, 
    StyledHeading,
    StyledLink,
    StyledSection,
    StyledText
} from "./Features.styled"
import { Link } from "@src/components/ui/Link"
import { items } from "./data/items"

const Features = () => {
    const { t } = useTranslation("document-builder");
    const scrollToBlock = () => {
        const element = document.getElementById("formats-section");
        if (element) element.scrollIntoView({behavior: "smooth"});
    }
    return (
        <StyledSection 
        background="#333"
        desktopSpacing={["0", "0"]}
        tabletSpacing={["0", "0"]}
        tabletSmallSpacing={["0", "0"]}
        mobileSpacing={["0", "0"]}
        >
            {items.block.map((block, index) => (
            <StyledFeaturesWrapper key={index}>
                <Container>
                    <FeaturesBlock className="feature-block">
                        <StyledHeading
                        label={t(block.heading)}
                        />
                            {block.textArr.map((item, idx) => (
                            <StyledText key={idx}>
                                <Trans
                                t={t}
                                i18nKey={item}
                                components={[
                                <Link
                                key={0}
                                color="main"
                                target="_blank"
                                href="/"
                                hover="underline-none"
                                />
                            ]}/>
                            </StyledText>
                        ))}
                        {block.link.type === "button" ? (
                            <StyledLink
                            as="button"
                            onClick={scrollToBlock}
                            color="main"
                            target="_blank"
                            href={block.link.url}
                            textUnderline
                            hover="underline-none"
                            >{t(block.link.label)}</StyledLink>
                        ) : (
                            <StyledLink
                            as="a"
                            color="main"
                            target="_blank"
                            href={block.link.url}
                            textUnderline
                            hover="underline-none"
                            >{t(block.link.label)}</StyledLink>
                        )}
                    </FeaturesBlock>
                </Container>
            </StyledFeaturesWrapper>
            ))}
        </StyledSection>
    )
}

export { Features }