import {
  StyledBlogCard,
  StyledBlogCardLink,
  StyledBlogCardImg,
} from "./BlogCard.styled";
import { IBlogCard } from "./BlogCard.types";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

const BlogCard = ({ id, className, linkUrl, imgUrl, heading }: IBlogCard) => {
  return (
    <StyledBlogCard id={id} className={className}>
      <StyledBlogCardLink href={linkUrl} tabIndex={-1} target="_blank">
        <StyledBlogCardImg $imgUrl={imgUrl} />
      </StyledBlogCardLink>

      <Heading level={4}>
        <Link href={linkUrl} target="_blank" hover="color">
          {heading}
        </Link>
      </Heading>
    </StyledBlogCard>
  );
};

export { BlogCard };
