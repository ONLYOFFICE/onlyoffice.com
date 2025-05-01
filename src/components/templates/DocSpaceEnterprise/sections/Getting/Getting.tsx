import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

import {
  StyledGetting,
  StyledGettingItemTop,
  StyledGettingList,
} from "./Getting.styled";

const Getting = () => {
  const { t } = useTranslation("docspace-enterprise");

  return (
    <StyledGetting>
      <Container className="container" mobileSpacing="0">
        <Heading className="title" level={2} label={t("GettingStarted")} />
        <Text className="text" label={t("GettingDeploy")} />
        <StyledGettingList>
          {items.map((item) => (
            <Link className="item" href={item.href} key={item.href}>
              <StyledGettingItemTop $bgUrl={item.bgUrl} />
              <Heading
                className="item__title"
                level={4}
                label={t(item.title)}
              />
              <Text className="item__text" label={t(item.text)} />
              <Text
                className="item__subtitle"
                color="main"
                textDecoration="underline"
                label={t(item.subtitle)}
              />
            </Link>
          ))}
        </StyledGettingList>
        <Text className="footer__text">
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
      </Container>
    </StyledGetting>
  );
};

export { Getting };
