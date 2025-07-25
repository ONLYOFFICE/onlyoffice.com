import { useTranslation } from "next-i18next";
import { Link } from "@src/components/ui/Link";
import { Container } from "@src/components/ui/Container";
import { StyledSection, StyledText, StyledLogo } from "./Quotes.styled";

interface QuotesBlockProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Quotes = ({ image, title, description, link }: QuotesBlockProps) => {
  const { t } = useTranslation("desktop");

  return (
    <StyledSection background="#f9f9f9">
      <Container>
        <StyledLogo $image={image} />
        <StyledText>{t(description)}</StyledText>
        <Link color="main" textUnderline hover="underline-none" href={link} target="_blank">
          {t(title)}
        </Link>
      </Container>
    </StyledSection>
  );
};

export { Quotes };
