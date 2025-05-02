import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";
import { listItems, footerTexts } from "./data/items";

import {
  StyledCostContent,
  StyledCostContentLeft,
  StyledCostItem,
  StyledCostList,
  StyledCostFooter,
  StyledCostHeading,
} from "./Cost.styled";

const Cost = () => {
  const { t } = useTranslation("docspace-enterprise");

  return (
    <Section background="#F8F9F9">
      <Container>
        <StyledCostContent>
          <StyledCostContentLeft>
            <StyledCostHeading level={2} size={2} label={t("CostTitle")}>
              <Trans
                t={t}
                i18nKey="CostTitle"
                components={[<Text as="span" color="main" key={0} />]}
              />
            </StyledCostHeading>
            <StyledCostList>
              {listItems.map((item) => (
                <StyledCostItem key={item.text}>{t(item.text)}</StyledCostItem>
              ))}
            </StyledCostList>
            <Button
              as="a"
              href="/download?from=docspace-enterprise-prices#docspace-enterprise"
              label={t("CostButtonPickYourPrice")}
              borderRadius="3px"
            />
          </StyledCostContentLeft>
        </StyledCostContent>
        <StyledCostFooter>
          {footerTexts.map((item) => (
            <Text key={item.text} size={2} textAlign="center">
              <Trans
                t={t}
                i18nKey={item.text}
                components={[
                  <Link
                    key={0}
                    color="main"
                    textUnderline={true}
                    hover="underline-none"
                    href="mailto:sales@onlyoffice.com"
                  />,
                  <Link
                    key={1}
                    color="main"
                    textUnderline={true}
                    hover="underline-none"
                    href="/docspace-family-pack"
                  />,
                ]}
              />
            </Text>
          ))}
        </StyledCostFooter>
      </Container>
    </Section>
  );
};

export { Cost };
