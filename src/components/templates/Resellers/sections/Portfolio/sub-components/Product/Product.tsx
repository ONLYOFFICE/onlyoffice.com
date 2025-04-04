import { Heading } from "@src/components/ui/Heading";
import {
  StyledPortfolioContent,
  StyledPortfolioImage,
  StyledPortfolioWrapper,
} from "./Product.styled";
import { Text } from "@src/components/ui/Text";
import { IPortfolio } from "../../Portfolio.types";
import { Link } from "@src/components/ui/Link";

const Product = ({ title, text, link, image }: IPortfolio) => {
  return (
    <StyledPortfolioWrapper>
      <StyledPortfolioContent>
        <Heading label={title} level={4} />
        <Text label={text} size={3} />
        <Link
          href={link.href}
          label={link.label}
          color="main"
          textUnderline
          hover="underline-none"
        />
      </StyledPortfolioContent>
      <StyledPortfolioImage
        $imgUrl={image.imgUrl}
        $imgUrl2x={image.imgUrl2x}
        $imgWidth={image.imgWidth}
        $imgHeight={image.imgHeight}
      />
    </StyledPortfolioWrapper>
  );
};

export { Product };
