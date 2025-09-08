import {
  StyledContainer,
  StyledHeading,
  StyledSubHeading,
  StyledSmallHeading,
  StyledSection,
  StyledCardContainer,
} from "./Content.styled";
import { useTranslation } from "next-i18next";
import { Trans } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";
import { ContentCard } from "./sub-components/ContentCard";
import { useRouter } from "next/router";
import { Button } from "@src/components/ui/Button";

const Content = () => {
  const { t } = useTranslation("docspace");
  const { locale } = useRouter();

  return (
    <StyledSection desktopSpacing={["124px", "112px"]}>
      <StyledContainer maxWidth="1120px">
        <StyledHeading>
          <Trans
            t={t}
            i18nKey={"ContentHeading"}
            components={[<Text as="span" color="main" key={0} />]}
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
              locale={locale}
              href={item.href}
            />
          ))}
        </StyledCardContainer>
        <Button
          as="a"
          className="docspace-content-button"
          label={t("ContentButton")}
          href="/docspace-registration"
          size="medium"
        />
      </StyledContainer>
    </StyledSection>
  );
};

export { Content };
