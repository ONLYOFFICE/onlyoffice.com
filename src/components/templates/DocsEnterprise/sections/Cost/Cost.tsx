import { Trans, useTranslation } from "next-i18next";
import { Link } from "@src/components/ui/Link";
import {
  StyledCostBusinessBlock,
  StyledCostBusinessHeader,
  StyledCostBusinessImage,
  StyledCostBusinessInfo,
  StyledCostBusinessInfoPopup,
  StyledCostBusinessList,
  StyledCostBusinessListItem,
  StyledCostBusinessTextPart,
  StyledCostBusinessWrapper,
  StyledCostSecondBlock,
  StyledInformationText,
} from "./Cost.styled";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import { items } from "./data/items";

const Cost = () => {
  const { t } = useTranslation("docs-enterprise");

  return (
    <Section background="#f9f9f9">
      <Container>
        <StyledCostBusinessBlock>
          <StyledCostBusinessTextPart>
            <StyledCostBusinessHeader level={2}>
              <Trans
                t={t}
                i18nKey={String(t("CostBusinessHeader"))}
                components={[<Text as="span" color="#FF6F3D" key="0" />]}
              />
            </StyledCostBusinessHeader>
            <StyledCostBusinessList>
              {items.map((item, index) => (
                <StyledCostBusinessListItem key={index}>
                  <StyledCostBusinessWrapper>
                    {t(item.title)}
                    {item.info && (
                      <StyledCostBusinessInfo>
                        <StyledCostBusinessInfoPopup>
                          {t(item.info)}
                        </StyledCostBusinessInfoPopup>
                      </StyledCostBusinessInfo>
                    )}
                  </StyledCostBusinessWrapper>
                </StyledCostBusinessListItem>
              ))}
            </StyledCostBusinessList>
            <Button
              as="a"
              href="/download?from=docspace-enterprise-prices#docspace-enterprise"
              label={t("CostBtn")}
            />
          </StyledCostBusinessTextPart>
          <StyledCostBusinessImage />
        </StyledCostBusinessBlock>
        <StyledCostSecondBlock>
          <StyledInformationText>
            <Trans
              t={t}
              i18nKey={String(t("CostBusinessText"))}
              components={[
                <Link
                  key={0}
                  href="mailto:sales@onlyoffice.com"
                  textUnderline
                  color="main"
                  hover="underline-none"
                />,
                <span key={1}></span>,
                <Link
                  key={2}
                  href="/docs-home-server"
                  textUnderline
                  color="main"
                  hover="underline-none"
                />,
              ]}
            />
          </StyledInformationText>
        </StyledCostSecondBlock>
      </Container>
    </Section>
  );
};

export { Cost };
