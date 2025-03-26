import { useTranslation } from "next-i18next";
import {
  StyledFaqCollapseHeader,
  StyledFaqCollapseHeading,
  StyledFaqCollapseText,
} from "./FaqCollapse.styled";
import { IFaqCollapse } from "./FaqCollapse.types";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { CollapseGroup } from "@src/components/ui/CollapseGroup";

const FaqCollapse = ({
  id,
  className,
  text,
  items,
  isAccordion,
  desktopSpacing,
  tabletSpacing,
  tabletSmallSpacing,
  mobileSpacing,
}: IFaqCollapse) => {
  const { t } = useTranslation("common");

  return (
    <Section
      id={id}
      className={className}
      desktopSpacing={desktopSpacing}
      tabletSpacing={tabletSpacing}
      tabletSmallSpacing={tabletSmallSpacing}
      mobileSpacing={mobileSpacing}
    >
      <Container>
        <StyledFaqCollapseHeader>
          <StyledFaqCollapseHeading
            label={t("Frequently Asked Questions")}
            level={2}
          />
          {text && <StyledFaqCollapseText>{text}</StyledFaqCollapseText>}
        </StyledFaqCollapseHeader>

        <CollapseGroup items={items} isAccordion={isAccordion} divider />
      </Container>
    </Section>
  );
};

export { FaqCollapse };
