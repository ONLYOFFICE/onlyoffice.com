import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Trans, useTranslation } from "next-i18next"
import { 
    StyledSection,
    StyledGettingStartedHeading, 
    StyledGettingStartedWrapper, 
    StyledGettingStartedWrapperLeft, 
    StyledGettingStartedWrapperRight, 
    StyledWrapperLeftText, 
    StyledWrapperRightBlock,
    StyledWrapperRightBlockHeading,
    StyledWrapperRightBlockText,
    StyledButton
} from "./GettingStarted.styled";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";
import { Button } from "@src/components/ui/Button";

const GettingStarted = () => {
    const { t } = useTranslation("private-rooms");

    return(
        <StyledSection>
            <Container>
                <StyledGettingStartedHeading 
                    label={t(items.title)}
                />
                <StyledGettingStartedWrapper>
                    <StyledGettingStartedWrapperLeft>
                            {items.text.map((item, idx) => (
                                <StyledWrapperLeftText>
                                <Trans
                                    key={idx}
                                    t={t}
                                    i18nKey={item.heading}
                                    components={item.textLinks?.map((link, index) => (
                                        <Link
                                        key={index}
                                        href={link.url}
                                        color="main"
                                        hover="underline"
                                        target={link.isExternal ? "_blank" : undefined}
                                        textUnderline
                                        />
                                    ))}
                                />
                                </StyledWrapperLeftText>
                            ))}
                    </StyledGettingStartedWrapperLeft>
                    <StyledGettingStartedWrapperRight>
                        <StyledWrapperRightBlock>
                            <StyledWrapperRightBlockHeading 
                            label={t(items.btnTitle)} />
                            <StyledWrapperRightBlockText label={t(items.btnSubTitle)}/>
                            <StyledButton 
                            label={t(items.btnText)}
                            fullWidth
                            variant="tertiary"
                            />
                        </StyledWrapperRightBlock>
                    </StyledGettingStartedWrapperRight>
                </StyledGettingStartedWrapper>
            </Container>
        </StyledSection>
    )
}

export { GettingStarted };