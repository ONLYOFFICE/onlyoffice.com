import { useTranslation } from "next-i18next";
import {
  StyledFaqCollapseHeader,
  StyledFaqCollapseHeading,
} from "./FaqCollapse.styled";
import { IFaqCollapse } from "./FaqCollapse.types";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { CollapseGroup } from "@src/components/ui/CollapseGroup";

const FaqCollapse = ({
  id,
  className,
  background,
  text,
  items,
  isAccordion,
  desktopSpacing,
  tabletSpacing,
  tabletSmallSpacing,
  mobileSpacing,
  borderTop,
}: IFaqCollapse) => {
  const { t } = useTranslation("FaqCollapse");

  return (
    <Section
      id={id}
      className={className}
      background={background}
      desktopSpacing={desktopSpacing}
      tabletSpacing={tabletSpacing}
      tabletSmallSpacing={tabletSmallSpacing}
      mobileSpacing={mobileSpacing}
      borderTop={borderTop}
    >
      <Container>
        <StyledFaqCollapseHeader $text={text ? true : false}>
          <StyledFaqCollapseHeading
            label={t("FrequentlyAskedQuestions")}
            level={2}
          />
          {text && (
            <Text size={1} color="#333333">
              {text}
            </Text>
          )}
        </StyledFaqCollapseHeader>

        <CollapseGroup items={items} isAccordion={isAccordion} divider />
      </Container>
    </Section>
  );
};

export { FaqCollapse };
