import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledPortfolio,
  StyledPortfolioHeader,
  StyledPortfolioText,
} from "./Portfolio.styled";
import { Heading } from "@src/components/ui/Heading";
import { products } from "./data/items";
import { Product } from "./sub-components/Product";

const Portfolio = () => {
  const { t } = useTranslation("resellers");

  return (
    <Section tabletSmallSpacing={["80px", "0"]} mobileSpacing={["48px", "0"]}>
      <Container>
        <StyledPortfolioHeader>
          <Heading label={t("PortfolioTitle")} level={2} size={3} />
          <StyledPortfolioText label={t("PortfolioText")} />
        </StyledPortfolioHeader>

        <StyledPortfolio>
          {products.map(({ title, text, link, image }, index) => (
            <Product
              key={index}
              title={t(title)}
              text={t(text)}
              link={{ ...link, label: t(link.label) }}
              image={{
                ...image,
                imgUrl: t(image.imgUrl),
                imgUrl2x: t(image.imgUrl2x),
              }}
            />
          ))}
        </StyledPortfolio>
      </Container>
    </Section>
  );
};

export { Portfolio };
