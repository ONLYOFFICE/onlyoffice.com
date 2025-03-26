import { useTranslation } from "next-i18next";
import {
  StyledPlanCard,
  StyledPlanCardLabel,
  StyledPlanCardBody,
  StyledPlanCardPriceWrapper,
  StyledPlanCardPricePrev,
  StyledPlanCardPriceFrom,
  StyledPlanCardPriceFree,
  StyledPlanCardPriceCurrent,
  StyledPlanCardPriceLabel,
  StyledPlanCardBtns,
} from "./PlanCard.styled";
import { IPlanCard } from "./PlanCard.types";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";

const PlanCard = ({
  heading,
  subHeading,
  headingLabel,
  price,
  isActive,
  btn,
  link,
}: IPlanCard) => {
  const { t } = useTranslation("docspace-prices");

  return (
    <StyledPlanCard $isActive={isActive}>
      <Heading level={3} textTransform="uppercase" label={heading} />
      <Heading level={4} label={subHeading} />

      {headingLabel && (
        <StyledPlanCardLabel>{headingLabel}</StyledPlanCardLabel>
      )}

      <StyledPlanCardBody $headingLabel={headingLabel}>
        <StyledPlanCardPriceWrapper>
          {price.from && (
            <StyledPlanCardPriceFrom>{t("From")}</StyledPlanCardPriceFrom>
          )}

          {price.prev && (
            <StyledPlanCardPricePrev>
              ${price.prev && price.prev}
            </StyledPlanCardPricePrev>
          )}

          {price.free ? (
            <StyledPlanCardPriceFree>{t("Free")}</StyledPlanCardPriceFree>
          ) : (
            <StyledPlanCardPriceCurrent>
              <span>$</span>
              {price.current}
            </StyledPlanCardPriceCurrent>
          )}
        </StyledPlanCardPriceWrapper>

        {price.label && (
          <StyledPlanCardPriceLabel>{price.label}</StyledPlanCardPriceLabel>
        )}
      </StyledPlanCardBody>

      <StyledPlanCardBtns>
        <Button
          onClick={btn.url ? undefined : btn.onClick}
          as={btn.url ? "a" : "button"}
          href={btn.url ? btn.url : undefined}
          variant={isActive ? "primary" : "secondary"}
          fullWidth={true}
          label={btn.label}
        />
        {link && (
          <Link
            fontSize="13px"
            fontWeight={600}
            lineHeight="18px"
            textTransform="uppercase"
            color="main"
            hover="underline"
            href={link.url}
            label={link.label}
          />
        )}
      </StyledPlanCardBtns>
    </StyledPlanCard>
  );
};

export { PlanCard };
