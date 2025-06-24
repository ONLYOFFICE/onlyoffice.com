import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

import {
  StyledFeatruesTextWrapper,
  StyledFeaturesHeading,
  StyledFeaturesItem,
  StyledFeaturesLink,
  StyledFeaturesList,
  StyledFeaturesText
} from "./Features.styled";

const Features = () => {
  const { t } = useTranslation("about");

  return (
    <Section>
      <Container>
        <StyledFeaturesList>
          {items.map((item) => {
            const rawText = t(item.text, { returnObjects: true });
            const textContent = Array.isArray(rawText) ? rawText : [rawText];

            return (
              <StyledFeaturesItem key={item.title} $image={item.image}>
                <StyledFeatruesTextWrapper>
                  <StyledFeaturesHeading size={3} level={2}>
                    <Trans t={t} i18nKey={item.title} components={[<Text as="span" color="main" key="0" />]} />
                  </StyledFeaturesHeading>
                  {textContent.map((text) => (
                    <StyledFeaturesText key={text}>
                      <Trans t={t} i18nKey={text} components={[
                        <Link
                          key={0}
                          target="_blank"
                          textUnderline={true}
                          hover="underline-none"
                          color="main"
                          href={"https://www.onlyoffice.com/blog/2012/03/teamlab-at-cebit-2012-how-we-did-it/?from=about"}
                        />
                      ]} />
                    </StyledFeaturesText>
                  ))}
                  <StyledFeaturesLink
                    target="_blank"
                    textUnderline={true}
                    hover="underline-none"
                    color="main"
                    href={item.link.href}
                    label={t(item.link.label)}
                    fontSize="14px"
                  />
                </StyledFeatruesTextWrapper>
              </StyledFeaturesItem>
            );
          })}
        </StyledFeaturesList>
      </Container>
    </Section>
  );
};

export { Features };


// {items.map((item, index) => (
//           <FeatureImageItem
//             key={item.title}
//             heading={<Trans t={t} i18nKey={item.title} components={[<Text as="span" color="main" key="0" />]} />}
//             text={<Trans t={t} i18nKey={item.text} components={{ br: <br /> }} />}
//             links={[
//               {
//                 href: item.link.href,
//                 label: t(item.link.label),
//               }
//             ]}
//             image={{
//               url: item.image,
//             }}
//             position={{
//               desktop: index % 2 === 0 ? "left" : "right",
//               mobile: "bottom",
//             }}
//           />
//         ))}