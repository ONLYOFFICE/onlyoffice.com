import {
  StyledContainer,
  StyledHeading,
  StyledSubHeading,
  StyledSmallHeading,
  StyledSection,
  StyledCardContainer,
  StyledButton,
} from "./Content.styled";
import { useTranslation } from "next-i18next";
import { Trans } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";
import { ContentCard } from "./sub-components/ContentCard";

const Content = () => {
  const { t } = useTranslation("docspace");

  return (
    <StyledSection desktopSpacing={["124px", "112px"]}>
      <StyledContainer maxWidth="1120px">
        <StyledHeading>
        <Trans
            t={t}
            i18nKey={"ContentHeading"}
            components={[
              <Text as="span" color="main" key={0} />
            ]}
          />
        </StyledHeading>
        <StyledSubHeading as={"p"}>{t("ContentSubHeading")}</StyledSubHeading>
        <StyledSmallHeading level={5}>
          {t("ContentSubHeading2")}
        </StyledSmallHeading>
        <StyledCardContainer>
          {items.map((item, index) => (
            <ContentCard
              key={index}
              imgUrl={item.imgUrl}
              heading={t(item.heading)}
              href={item.href}
            />
          ))}
        </StyledCardContainer>
        <StyledButton
          label={t("ContentButton")}
          href="/docspace-registration"
          size="medium"
        />
      </StyledContainer>
    </StyledSection>
  );
};

export { Content };
