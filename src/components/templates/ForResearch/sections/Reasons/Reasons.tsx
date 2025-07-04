import { Trans, useTranslation } from "next-i18next";
import {
  StyledReasonsWrapper,
  StyledReasonsContent,
  StyledHeadingText,
  StyledReasonsList,
  StyledReasonsButtons,
  StyledImageContent,
  StyledQuoteWrapper,
  StyledQuoteText
} from "./Reasons.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { Button } from "@src/components/ui/Button";
import { reasonsItems } from "./data/reasonsItems";

const items = [
  { label: "DocumentsToStore" },
  { label: "ProjectsWithGantt" },
  { label: "CalendarToOrganize" },
  { label: "BookmarksToKeep" },
  { label: "WikiToBuild" },
  { label: "MailAndChat" },
];

const Reasons = () => {
  const { t } = useTranslation("for-research");
  const logo1 = '/images/templates/for-research/reasons/logo_comment_1.svg'; 
  const logo2 = '/images/templates/for-research/reasons/logo_comment_2.svg'; 

  return (
    <Section
      desktopSpacing={["112px", "112px"]}
      mobileSpacing={["48px", "48px"]}
      tabletSpacing={["48px", "48px"]}
      background="#F5F5F5"
    >
      <Container>
        <Heading level={2} size={3} textAlign="center">
            <Trans
              t={t}
              i18nKey={"FeaturesReasonsHeading"}
              components={[<Text as="span" color="#FF6F3D" key="0" />]}
            />
          </Heading>
          <StyledHeadingText>
            <Heading level={2} size={1} label="1" color="#808080" />
              <Heading level={3} size={4}>
                <Trans
                  t={t}
                  i18nKey="ReasonsHead"
                  components={[<Text as="span" color="main" key={0} />]}
                />
            </Heading>
          </StyledHeadingText>
          <StyledReasonsWrapper>
          <StyledReasonsContent>
            <Heading level={3} size={5} label={t("ConnectONLYOFFICEDocs")} />
            <Text label={t("ONLYOFFICEDocsEasily")} />
            <StyledReasonsButtons>
              <Button
                as="a"
                href="/download?from=for-research#docs-enterprise"
                label={t("GetItNow")}
              />
              <Link
                href="/all-connectors?from=for-research"
                label={t("SeeAllIntegrations")}
                color="main"
                hover="underline-none"
                fontSize="14px"
              />
            </StyledReasonsButtons>
          </StyledReasonsContent>
          <StyledImageContent>
            {reasonsItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                style={{ backgroundImage: `url(${item.imageUrl})`, width: `${item.width}`, backgroundPositionX: `${item.backgroundPositionX}` }}
              />
          ))}
          </StyledImageContent>
          </StyledReasonsWrapper>
          <StyledQuoteWrapper>
            <img src={logo1} alt="Icon" />
            <StyledQuoteText>{t("QuoteText1")}</StyledQuoteText>
            <Text
              fontSize="13px"
              fontWeight={700}
              lineHeight="21px"
              textAlign="center"
              label={t("QuoteAuthor1")}
            />
            <Text
              fontSize="12px"
              lineHeight="19px"
              textAlign="center"
              label={t("QuoteAuthorInfo1")}
            />
            <Link
                href="/success-stories/gwdg?from=for-research"
                label={t("QuoteLink")}
                color="main"
                textUnderline
                hover="underline-none"
              />
          </StyledQuoteWrapper>
        <StyledReasonsWrapper>
          <StyledReasonsContent>
            <Heading level={3} size={5} label={t("ReasonsTitle")} />
            <Text fontWeight={700} label={t("ReasonsSubtitle")} />
            <StyledReasonsList>
              {items.map((item, index) => (
                <li key={index}>{t(item.label)}</li>
              ))}
            </StyledReasonsList>
            <StyledReasonsButtons>
              <Button
                as="a"
                href="/download-workspace?from=for-research"
                label={t("GetItNow")}
              />
              <Link
                href="/workspace?from=for-research"
                label={t("LearnMoreReasons")}
                color="main"
                hover="underline-none"
                fontSize="14px"
              />
            </StyledReasonsButtons>
          </StyledReasonsContent>
          <img src={t("Image")} alt="Screenshot" />
        </StyledReasonsWrapper>
        <StyledQuoteWrapper>
          <img src={logo2} alt="Icon" style={{width: "70px"}} />
          <StyledQuoteText>
            <Trans
              t={t}
              i18nKey={"QuoteText2"}
              components={{ br: <br /> }}
            />
          </StyledQuoteText>
          <Text
            fontSize="13px"
            fontWeight={700}
            lineHeight="21px"
            textAlign="center"
            label={t("QuoteAuthor2")}
          />
          <Text
            fontSize="12px"
            lineHeight="19px"
            textAlign="center"
            label={t("QuoteAuthorInfo2")}
          />
          <Link
              href={t("QuoteBlog2")}
              label={t("QuoteLink")}
              color="main"
              textUnderline
              hover="underline-none"
              target="_blank"
            />
        </StyledQuoteWrapper>
      </Container>
    </Section>
  );
};

export { Reasons };
