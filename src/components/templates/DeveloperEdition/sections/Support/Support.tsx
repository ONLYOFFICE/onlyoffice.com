import { Trans, useTranslation } from "next-i18next";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";
import { Container } from "@src/components/ui/Container";
import { items } from "./data/items";

import { FeatureButtonItem } from "@src/components/widgets/FeatureButtonItem";

import {
  StyledSupport,
  StyledSupportHeading,
  StyledSupportList,
  StyledSupportText,
} from "./Support.styled";

const Support = () => {
  const { t } = useTranslation("developer-edition");

  return (
    <StyledSupport>
        <Container>
          <StyledSupportHeading
            level={2}
            label={t("SupportTitle")}
            color="#fff"
            size={2}
            textAlign="center"
          />
          <StyledSupportText
            label={t("SupportSubTitle")}
            color="#fff"
            textAlign="center"
          />
          <StyledSupportList>
            {items.map((item) => (
              <FeatureButtonItem
                key={item.heading}
                className="item"
                icon={{ url: item.imageUrl }}
                heading={t(item.heading)}
                position="center"
                text={
                  <Trans
                    t={t}
                    i18nKey={item.desc}
                    components={[
                      <Link
                        key={0}
                        href="mailto:support@onlyoffice.com"
                        textUnderline
                        hover="underline-none"
                        label={t(item.btn.text)}
                      />,
                      <Link
                        key={1}
                        href="mailto:sales@onlyoffice.com"
                        textUnderline
                        hover="underline-none"
                        label={t(item.btn.text)}
                      />,
                    ]}
                  />
                }
                button={
                  <Button
                    href={item.btn.href}
                    variant="quinary"
                    label={t(item.btn.text)}
                    as="a"
                    className="item__btn"
                  />
                }
                color="#fff"
              />
            ))}
          </StyledSupportList>
        </Container>
    </StyledSupport>
  );
};

export { Support };