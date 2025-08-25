import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import {
  StyledUsefulLinksWrapper,
  StyledUsefulLinks,
  StyledUsefulLinkItem,
  StyledUsefulLinkImage,
  StyledUsefulLinkContent,
  StyledUsefulLinkText,
} from "./UsefulLinks.styled";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

const UsefulLinks = () => {
  const { t } = useTranslation("installation-success-desktop");

  return (
    <Section>
      <Heading level={2} size={3} label={t("UsefulLinks")} textAlign="center" />
      <StyledUsefulLinksWrapper>
        <StyledUsefulLinks>
          {items.map((item, index) => (
            <StyledUsefulLinkItem key={index}>
              <StyledUsefulLinkImage $image={item.image} />
              <StyledUsefulLinkContent size={2}>
                <Trans
                  t={t}
                  i18nKey={t(item.text)}
                  components={[
                    <Link
                      href={item.link.href}
                      target={item.link.target ? "_blank" : undefined}
                      color="main"
                      textUnderline
                      hover="underline-none"
                      key="0"
                    />,
                  ]}
                />
              </StyledUsefulLinkContent>
            </StyledUsefulLinkItem>
          ))}
        </StyledUsefulLinks>
      </StyledUsefulLinksWrapper>
      <StyledUsefulLinkText fontSize="14px" color="#666666" textAlign="center">
        <Trans
          t={t}
          i18nKey="ContactUs"
          components={[
            <Link
              href="mailto:info@onlyoffice.com"
              color="main"
              textUnderline
              hover="underline-none"
              key="0"
            />,
          ]}
        />
      </StyledUsefulLinkText>
    </Section>
  );
};

export { UsefulLinks };
