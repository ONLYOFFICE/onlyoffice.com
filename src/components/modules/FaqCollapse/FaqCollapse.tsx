import { useTranslation } from "next-i18next";
import {
  StyledFaqCollapseHeading,
  StyledFaqCollapseText,
} from "./FaqCollapse.styled";
import { IFaqCollapse } from "./FaqCollapse.types";
import { Container } from "@src/components/ui/Container";
import { CollapseGroup } from "@src/components/ui/CollapseGroup";

const FaqCollapse = ({
  id,
  className,
  text,
  items,
  isAccordion,
}: IFaqCollapse) => {
  const { t } = useTranslation("common");

  return (
    <div id={id} className={className}>
      <Container>
        <StyledFaqCollapseHeading
          label={t("Frequently Asked Questions")}
          level={2}
        />
        {text && <StyledFaqCollapseText>{text}</StyledFaqCollapseText>}
        <CollapseGroup items={items} isAccordion={isAccordion} divider />
      </Container>
    </div>
  );
};

export { FaqCollapse };
