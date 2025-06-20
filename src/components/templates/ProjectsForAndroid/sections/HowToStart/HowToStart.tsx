import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Trans, useTranslation } from "next-i18next"
import { 
    StyledHeading,
    StyledHowToStartWrapper, 
    StyledLink, 
    StyledText, 
    WrapperLeftBlock, 
    WrapperRightBlock
} from "./HowToStart.styled";
import { items } from "./data";
import { Link } from "@src/components/ui/Link";

const HowToStart = () => {
    const { t } = useTranslation("projects-for-android");
    const links = items.links ?? [];

    const [first, second, third, ...rest] = links;
    return(
        <Section 
        background="#F9F9F9"
        desktopSpacing={["100px", "0"]}
        tabletSpacing={["100px", "0"]}
        tabletSmallSpacing={["50px", "0"]}
        mobileSpacing={["32px", "0"]}
        >
            <Container>
                <StyledHowToStartWrapper>
                    <WrapperLeftBlock>
                        <StyledHeading
                        label={t(items.heading)}
                        />
                        {first && (
                            <StyledText>
                                <Trans
                                    t={t}
                                    i18nKey={first.label}
                                    components={[
                                        <strong key={0} />,
                                        <Link 
                                        key={1} 
                                        href={first.href!} 
                                        target={first.target === "_blank" ? "_blank" : "_self"}
                                        color="main"
                                        textUnderline
                                        hover="underline-none"
                                        />,
                                    ]}
                                />
                            </StyledText>
                        )}

                        <div className="StyledLinkWrapper">
                            {second && (
                                <StyledLink
                                href={second.href!}
                                target={second.target}
                                color="main"
                                textUnderline
                                hover="underline-none"
                                >
                                {t(second.label)}
                                </StyledLink>
                            )}
                            {third && (
                                <StyledLink
                                href={third.href!}
                                target={third.target}
                                color="main"
                                textUnderline
                                hover="underline-none"
                                >
                                {t(third.label)}
                                </StyledLink>
                            )}
                        </div>
                        {rest.map(item => (
                            <StyledText key={item.label}>
                                <Trans
                                t={t}
                                i18nKey={item.label}
                                components={[
                                    <strong key={0} />,
                                    <Link key={1} 
                                    href={item.href ?? "#"} 
                                    target={item.target === "_blank" ? "_blank" : undefined} />,
                                ]}
                                />
                            </StyledText>
                        ))}
                    </WrapperLeftBlock>
                    <WrapperRightBlock/>
                </StyledHowToStartWrapper>
            </Container>
        </Section>
    );
};

export { HowToStart }

