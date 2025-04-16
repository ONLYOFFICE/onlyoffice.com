import {
  StyledPortfolio,
  StyledPortfolioContent,
  StyledPortfolioHeading,
  StyledPortfolioText,
  StyledPortfolioLink,
  StyledPortfolioImage,
} from "./Product.styled";
import { IProduct } from "./Product.types";

const Product = ({ title, text, link, image }: IProduct) => {
  return (
    <StyledPortfolio>
      <StyledPortfolioContent>
        <StyledPortfolioHeading label={title} level={3} />
        <StyledPortfolioText label={text} size={3} />
        <StyledPortfolioLink
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
    </StyledPortfolio>
  );
};

export { Product };
