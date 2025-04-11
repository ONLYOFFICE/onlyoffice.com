import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledContactsWrapper,
  StyledContactsItems,
  StyledFeatureItemText,
  StyledContactsSection,
} from "./Contacts.styled";
import { items } from "./data/items";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";

const Contacts = () => {
  const { t } = useTranslation("contribute");

  return (
    <StyledContactsSection>
      <StyledContactsWrapper
        $image={t("ContactsImgUrl")}
        $image2x={t("ContactsImgUrl2x")}
      >
        <Container>
          <StyledContactsItems>
            {items.map(({ id, icon, links, heading, text }) => (
              <FeatureItem
                key={id}
                className={`feature-item ${id}`}
                variant="horizontal"
                icon={icon}
                heading={
                  <Trans
                    t={t}
                    i18nKey={String(heading)}
                    components={[<Text as="span" color="#FF6F3D" key="0" />]}
                  />
                }
                text={
                  Array.isArray(text) &&
                  text.map((item, index) => (
                    <StyledFeatureItemText key={index}>
                      <Trans
                        key={index}
                        t={t}
                        i18nKey={String(item)}
                        components={links?.map((link, index) => (
                          <Link
                            key={index}
                            href={link.href}
                            target="_blank"
                            color="main"
                            textUnderline
                            hover="underline-none"
                          />
                        ))}
                      />
                    </StyledFeatureItemText>
                  ))
                }
              />
            ))}
          </StyledContactsItems>
        </Container>
      </StyledContactsWrapper>
    </StyledContactsSection>
  );
};

export { Contacts };
