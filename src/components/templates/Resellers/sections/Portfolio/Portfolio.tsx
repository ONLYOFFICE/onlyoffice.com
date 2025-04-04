import { useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { StyledPortfolio, StyledPortfolioText } from "./Portfolio.styled";
import { portfolio } from "./data/items";
import { Product } from "./sub-components/Product";

const Portfolio = () => {
  const { t } = useTranslation("resellers");

  return (
    <Section tabletSmallSpacing={["80px", "0"]} mobileSpacing={["48px", "0"]}>
      <Container>
        <Heading
          label={t("PortfolioTitle")}
          level={2}
          size={3}
          textAlign="center"
        />
        <StyledPortfolioText label={t("PortfolioText")} />
        <StyledPortfolio>
          {portfolio.map(({ title, text, link, image }, index) => (
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
