import { useTranslation, Trans } from "next-i18next";
import { useRouter } from "next/router";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import {
  StyledSection,
  StyledContainer,
  StyledContactList,
  StyledOfficeTitle,
  StyledEmailList,
  StyledEmailItem,
  StyledMap,
  StyledItem,
  StyledItemDescription,
} from "./ContactInfo.styled";
import { items, mails, officeOrderByLang } from "./data/items";

const getSortedItems = (locale?: string) => {
  let langKey: keyof typeof officeOrderByLang;

  if (locale === "zh") {
    langKey = "zh";
  } else if (locale === "en") {
    langKey = "default";
  } else {
    langKey = "eu";
  }

  const order = officeOrderByLang[langKey];
  const map = Object.fromEntries(items.map(item => [item.id, item]));
  return order.map(id => map[id]).filter(Boolean);
};


const ContactInfo = () => {
  const { t } = useTranslation("contacts");
  const { locale } = useRouter();
  const sortedItems = getSortedItems(locale);

  return (
    <StyledSection
      desktopSpacing={["0px", "0px"]}
      tabletSpacing={["0px", "0px"]}
      tabletSmallSpacing={["0px", "0px"]}
      mobileSpacing={["0px", "0px"]}
    >
      <StyledContainer>
        <StyledContactList>
          {sortedItems.map((item, index) => (
            <StyledItem key={index}>
              <StyledItemDescription>
                <StyledOfficeTitle level={3}>{t(item.title)}</StyledOfficeTitle>
                <Text>
                  <b>{t(item.address)}</b>
                </Text>
                <Text>
                  <Trans
                    t={t}
                    i18nKey={String(item.addressDescription)}
                    components={[
                      <span key="0" />,
                      <span key="1" />,
                      <span key="2" />,
                    ]}
                  />
                </Text>
                {item.phone && (
                  <Link href={`tel:${item.phone}`}>
                    {t("Phone")}: {item.phone}
                  </Link>
                )}
              </StyledItemDescription>

              <StyledMap
                src={t(item.map)}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </StyledItem>
          ))}

          <StyledEmailList>
            <StyledOfficeTitle>{t("ContactInfoTitle")}</StyledOfficeTitle>
            {mails.map((mail, index) => (
              <StyledEmailItem key={index}>
                {t(mail.title)}
                <Link
                  color="main"
                  textUnderline
                  hover="underline-none"
                  href={`mailto:${mail.email}`}
                  label={mail.email}
                />
              </StyledEmailItem>
            ))}
          </StyledEmailList>
        </StyledContactList>
      </StyledContainer>
    </StyledSection>
  );
};

export { ContactInfo };
