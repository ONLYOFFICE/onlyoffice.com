import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

import {
  StyledGettingHeading,
  StyledGettingItemHeading,
  StyledGettingItemLink,
  StyledGettingItemText,
  StyledGettingItemSubtitle,
  StyledGettingItemTop,
  StyledGettingList,
  StyledGettingText,
  StyledGettingFooter,
  StyledGettingItemContent,
} from "./Getting.styled";
import { CardLink } from "@src/components/widgets/CardLink";

const Getting = () => {
  const { t } = useTranslation("docspace-enterprise");

  return (
    <Section>
      <Container mobileSpacing="0">
        <StyledGettingHeading
          size={2}
          level={2}
          label={t("GettingStarted")}
          textAlign="center"
        />
        <StyledGettingText
          size={1}
          label={t("GettingDeploy")}
          textAlign="center"
        />
        <StyledGettingList>
          {items.map((item) => (
            <CardLink
              key={item.title}
              href={item.href}
              bgUrl={item.bgUrl}
              title={t(item.title)}
              text={t(item.text)}
              subtitle={t(item.subtitle)}
            />
          ))}
        </StyledGettingList>
        <StyledGettingFooter>
          <Text size={2} textAlign="center" color="#333333">
            <Trans
              t={t}
              i18nKey="GettingFooterText"
              components={[
                <Link
                  key={0}
                  href="/download-community#docspace-community"
                  color="main"
                  textUnderline={true}
                  hover="underline-none"
                />,
              ]}
            />
          </Text>
        </StyledGettingFooter>
      </Container>
    </Section>
  );
};

export { Getting };

// <StyledGettingItemLink href={item.href} key={item.title}>
//   <StyledGettingItemTop $bgUrl={item.bgUrl} />
//   <StyledGettingItemContent>
//     <div>
//       <StyledGettingItemHeading
//         level={4}
//         label={t(item.title)}
//         color="#333333"
//         size={4}
//         textAlign="center"
//       />
//       <StyledGettingItemText
//         label={t(item.text)}
//         color="#666666"
//         size={2}
//         textAlign="center"
//       />
//     </div>
//     <StyledGettingItemSubtitle
//       color="main"
//       textDecoration="underline"
//       size={2}
//       label={t(item.subtitle)}
//     />
//   </StyledGettingItemContent>
// </StyledGettingItemLink>
