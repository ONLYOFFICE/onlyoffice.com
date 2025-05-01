import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";
import { listItems, footerTexts } from "./data/items";

import {
  StyledCost,
  StyledCostContent,
  StyledCostContentLeft,
  StyledCostItem,
  StyledCostList,
  StyledCostFooter,
} from "./Cost.styled";

const Cost = () => {
  const { t } = useTranslation("docspace-enterprise");

  return (
    <StyledCost>
      <Container className="container" maxWidth="1120px">
        <StyledCostContent>
          <StyledCostContentLeft>
            <Heading className="title" level={2} label={t("CostTitle")}>
              <Trans
                t={t}
                i18nKey="CostTitle"
                components={[<Text as="span" color="main" key={0} />]}
              />
            </Heading>
            <StyledCostList>
              {listItems.map((item) => (
                <StyledCostItem key={item.text}>{t(item.text)}</StyledCostItem>
              ))}
            </StyledCostList>
            <Button label={t("CostButtonPickYourPrice")} borderRadius="3px" />
          </StyledCostContentLeft>
        </StyledCostContent>
        <StyledCostFooter>
          {footerTexts.map((item) => (
            <Text key={item.text} className="text">
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
    </StyledCost>
  );
};

export { Cost };
