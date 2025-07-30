import { Container } from "@src/components/ui/Container"
import { Trans, useTranslation } from "next-i18next"
import { 
    FeaturesBlock, 
    StyledFeaturesWrapper, 
    StyledHeading,
    StyledLink,
    StyledSection,
    StyledText
} from "./FeaturesBottom.styled"
import { Link } from "@src/components/ui/Link"
import { items } from "./data/items"
import { Text } from "@src/components/ui/Text"
import { Button } from "@src/components/ui/Button"

const FeaturesBottom = () => {
    const { t } = useTranslation("document-builder");

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
                            <StyledText key={idx} className="feature-block-text">
                                <Trans
                                t={t}
                                i18nKey={item.text}
                                components={[
                                <Link
                                key={0}
                                color="main"
                                target={item.textLink?.target || "_self"}
                                href={item.textLink?.url}
                                textUnderline
                                hover="underline-none"
                                />,
                                <Text 
                                key={1}
                                color="main"
                                as="span"
                                />
                            ]}/>
                            </StyledText>
                        ))}
                        {block.link.type === "button" ? (
                            <Button
                            className="feature-block-btn"
                            as="a"
                            href={block.link.url}
                            target="_blank"
                            >{t(block.link.text)}</Button>
                        ) : (
                            <StyledLink
                            className="feature-block-link"
                            color="main"
                            target="_blank"
                            href={block.link.url}
                            textUnderline
                            hover="underline-none"
                            >{t(block.link.text)}</StyledLink>
                        )}
                    </FeaturesBlock>
                </Container>
            </StyledFeaturesWrapper>
            ))}
        </StyledSection>
    )
}

export { FeaturesBottom }