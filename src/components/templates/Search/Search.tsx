import { useTranslation } from "next-i18next";
import {
  StyledSearchList,
  StyledSearchItem,
  StyledSearchLink,
  StyledSearchMark,
  StyledSearchNoResults,
  StyledSearchNoResultsImg,
  StyledSearchNoResultsHeading,
} from "./Search.styled";
import { ISearchTemplate } from "./Search.types";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const highlightText = (text: string, query: string) => {
  if (!query) return text;

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");

  return text
    .split(regex)
    .map((part, index) =>
      regex.test(part) ? (
        <StyledSearchMark key={index}>{part}</StyledSearchMark>
      ) : (
        part
      ),
    );
};

const SearchTemplate = ({ searchList, searchQuery }: ISearchTemplate) => {
  const { t } = useTranslation("search");

  return (
    <Section
      as="div"
      desktopSpacing={["50px", "100px"]}
      tabletSpacing={["50px", "100px"]}
      tabletSmallSpacing={["50px", "100px"]}
      mobileSpacing={["50px", "65px"]}
    >
      <Container maxWidth="1040px">
        {searchQuery === "" ? (
          <Text fontSize="13px" fontWeight={700} lineHeight="1">
            {t("EmptyRequest")}
          </Text>
        ) : searchList.length === 0 ? (
          <StyledSearchNoResults>
            <StyledSearchNoResultsImg
              src="/images/templates/search/mountains.svg"
              alt="No results"
            />
            <StyledSearchNoResultsHeading level={1} size={4}>
              {t("NoResultsMatchingYourQuery")}
            </StyledSearchNoResultsHeading>
            <Button as="a" href="/" label={t("GoToMainPage")} />
          </StyledSearchNoResults>
        ) : (
          <StyledSearchList>
            {searchList.map((item, index) => (
              <StyledSearchItem key={index}>
                <StyledSearchLink
                  href={item.link}
                  color="main"
                  label={item.title}
                />
                <Text fontSize="14px" lineHeight="normal">
                  {highlightText(item.snippet, searchQuery)}
                </Text>
              </StyledSearchItem>
            ))}
          </StyledSearchList>
        )}
      </Container>
    </Section>
  );
};

export { SearchTemplate };
