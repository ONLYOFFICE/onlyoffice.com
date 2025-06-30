import {
  StyledContainer,
  StyledSubHeading,
  StyledBudgetsItems,
  StyledBudgetItem,
} from "./Budgets.styled";
import { budgetItems } from "./data/items";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { DocSpaceCard } from "@src/components/modules/docspace/DocSpaceCards/DocSpaceCards";
import { IDocSpaceCard } from "@src/components/modules/docspace/DocSpaceCards/DocSpaceCards.types";

const Budgets = () => {
  const { t } = useTranslation("docspace");
  return (
    <Section desktopSpacing={["112px", "112px"]}>
      <StyledContainer>
        <Heading level={2} label={t("BudgetsHeading")} />
        <StyledSubHeading>{t("BudgetsSubHeading")}</StyledSubHeading>
        <StyledBudgetsItems>
          {budgetItems
            .reduce<IDocSpaceCard[][]>((acc, item, index) => {
              if (index % 2 === 0) {
                acc.push([item]);
              } else {
                acc[acc.length - 1].push(item);
              }
              return acc;
            }, [])
            .map((group, i) => (
              <StyledBudgetItem key={i}>
                {group.map((item, j) => (
                  <DocSpaceCard
                    key={j}
                    heading={t(item.heading)}
                    text={t(item.text)}
                    image={{
                      url: item.image.url,
                    }}
                    color={item.color}
                    bgColor={item.bgColor}
                    borderColor={item.borderColor}
                    linkLabel={t(item.linkLabel || "")}
                    linkHref={t(item.linkHref || "")}
                  />
                ))}
              </StyledBudgetItem>
            ))}
        </StyledBudgetsItems>
      </StyledContainer>
    </Section>
  );
};

export { Budgets };
