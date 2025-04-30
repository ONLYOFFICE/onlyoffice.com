import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

import {
  StyledSupport,
  StyledSupportBg,
  StyledSupportItem,
  StyledSupportList,
} from "./Support.styled";

const Support = () => {
  const { t } = useTranslation("docspace-enterprise");

  return (
    <StyledSupport>
      <StyledSupportBg>
        <Container className="container">
          <Heading
            className="title"
            level={2}
            label={t("SupportTitleForEveryStep")}
          />
          <Text className="text" label={t("SupportTextTheTeam")} />
          <StyledSupportList>
            {items.map((item) => (
              <StyledSupportItem key={item.heading}>
                <img
                  src={item.imageUrl}
                  alt={item.heading}
                  className="item__image"
                />
                <Heading
                  level={5}
                  label={t(item.heading)}
                  className="item__title"
                />
                <Text label={t(item.desc)} className="item__text">
                  <Trans
                    t={t}
                    i18nKey={item.desc}
                    components={[
                      <Link
                        key={0}
                        href="mailto:support@onlyoffice.com"
                        textUnderline={true}
                        hover="underline-none"
                        label={t(item.btn.text)}
                      />,
                      <Link
                        key={1}
                        href="mailto:sales@onlyoffice.com"
                        textUnderline={true}
                        hover="underline-none"
                        label={t(item.btn.text)}
                      />,
                    ]}
                  />
                </Text>
                <Button
                  href={item.btn.href}
                  variant="quaternary"
                  label={t(item.btn.text)}
                  as="a"
                  className="item__btn"
                />
              </StyledSupportItem>
            ))}
          </StyledSupportList>
        </Container>
      </StyledSupportBg>
    </StyledSupport>
  );
};

export { Support };
