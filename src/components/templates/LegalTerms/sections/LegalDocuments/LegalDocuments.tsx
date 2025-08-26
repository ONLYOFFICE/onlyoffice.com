import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import {
  StyledContainer,
  StyledDocumentsList,
  StyledDocumentItem,
  StyledDocumentTitle,
  StyledLink,
  StyledOpenSourceLink,
} from "./LegalDocuments.styled";
import { items } from "./data/items";

const LegalDocuments = () => {
  const { t } = useTranslation("legalterms");

  return (
    <Section
      desktopSpacing={["112px", "224px"]}
      tabletSpacing={["112px", "224px"]}
      tabletSmallSpacing={["112px", "224px"]}
      mobileSpacing={["112px", "224px"]}
    >
      <StyledContainer>
        <StyledDocumentsList>
          {items.map((item, index) => (
            <StyledDocumentItem key={index}>
              <StyledDocumentTitle level={3}>
                {t(item.title)}
              </StyledDocumentTitle>
              <StyledLink
                color="main"
                textUnderline={true}
                href={item.link}
                isOpenSource={item.isOpenSource}
              >
                {t(item.linkText)}
              </StyledLink>
              {item.isOpenSource && (
                <StyledOpenSourceLink
                  color="main"
                  href={"https://www.gnu.org/licenses/agpl-3.0.en.html"}
                >
                  {t("OpenSource")}
                </StyledOpenSourceLink>
              )}
            </StyledDocumentItem>
          ))}
        </StyledDocumentsList>
      </StyledContainer>
    </Section>
  );
};

export { LegalDocuments };
