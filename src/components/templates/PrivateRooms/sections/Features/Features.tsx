import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { Trans, useTranslation } from "next-i18next"
import { StyledFeatures, StyledHeading } from "./Features.styled";
import { Text } from "@src/components/ui/Text";
import { items } from "./data";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { Link } from "@src/components/ui/Link";

const Features = () => {
    const { t } = useTranslation("private-rooms");

    return(
        <Section
        tabletSmallSpacing={["88px", "88px"]}
        >
            <Container>
                <StyledHeading>
                    <Trans
                    t={t}
                    i18nKey={"WhyONLYOFFICEIsTheSafest"}
                    components={[<Text as="span" color="#FF6F3D" key="0" />]}
                    />
                </StyledHeading>

                <StyledFeatures>
                {items.map(({ icon, heading, text, textLinks }, index) => (
                    <FeatureItem
                    key={index}
                    className="feature-item"
                    variant="vertical"
                    mobileVariant="horizontal-icon-top"
                    icon={icon}
                    heading={t(String(heading))}
                    text={
                        <Trans
                        t={t}
                        i18nKey={String(text)}
                        components={textLinks?.map((link, index) => (
                            <Link
                            key={index}
                            href={link.href}
                            target={link.isExternal ? "_blank" : undefined}
                            color="main"
                            textUnderline
                            hover="underline-none"
                            />
                        ))}
                        />
                    }
                    />
                ))}
                </StyledFeatures>
            </Container>
        </Section>
    )
}

export { Features }