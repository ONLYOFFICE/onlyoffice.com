import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledHowItWorksHeading,
  StyledHowItWorksText,
  StyledHowItWorksFeatures,
  StyledFeatureImageItemText
} from "./HowItWorks.styled";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";

const HowItWorks = () => {
  const { t } = useTranslation("private-rooms");

  return (
    <Section
      background="#f5f5f5"
      desktopSpacing={["112px", "112px"]}
    >
      <Container>
        <StyledHowItWorksHeading level={2} size={2}>
          <Trans
            t={t}
            i18nKey="HowItWorks"
            components={{
              span: <Text as="span" color="#FF6F3D" key="0" />,
              br: <br key="1" />,
            }}
          />
        </StyledHowItWorksHeading>
        <StyledHowItWorksText>
            <Trans
            t={t}
            i18nKey="PrivateRoomWorks"
            components={[
              <Link
              key="0"
              href="/desktop.aspx"
              color="main"
              textUnderline
              hover="underline-none"
              />
            ]}
            />
        </StyledHowItWorksText>

        <StyledHowItWorksFeatures>
          {items.map(({ heading, text, textLinks, image }, index) => (
            <FeatureImageItem
              key={index}
              className="feature-item"
              position={{ desktop: index % 2 === 1 ? "left" : "right" }}
              heading={t(String(heading))}
              text={
                <>
                  {text.map((textKey, idx) => (
                    <StyledFeatureImageItemText key={idx}>
                      <Trans
                      t={t}
                      i18nKey={String(textKey)}
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
                    </StyledFeatureImageItemText>
                  ))}
                </>
              }
              image={{
                url: t(image.url),
                height: image.height,
                width: image.width
              }}
            />
          ))}
        </StyledHowItWorksFeatures>
      </Container>
    </Section>
  );
};

export { HowItWorks };
