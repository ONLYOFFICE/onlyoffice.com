import {
  StyledSection,
  StyledTitle,
  StyledBadgeRow,
  StyledBadge,
} from "./FeaturedIn.styled";
import { items } from "./data/items";
import { Container } from "@src/components/ui/Container";
import { useTranslation } from "next-i18next";

const FeaturedIn = () => {
  const { t } = useTranslation("desktop");

  return (
    <StyledSection
      desktopSpacing={["112px", "0px"]}
      tabletSpacing={["112px", "0px"]}
      tabletSmallSpacing={["88px", "0px"]}
      mobileSpacing={["48px", "0px"]}
    >
      <Container>
        <StyledTitle>{t("FeaturedIn")}</StyledTitle>
        <StyledBadgeRow>
          {items.map((item) => (
            <StyledBadge
              key={item.src}
              $image={item.src}
              $positionX={item.positionX}
              href={item.link}
            />
          ))}
        </StyledBadgeRow>
      </Container>
    </StyledSection>
  );
};

export { FeaturedIn };
