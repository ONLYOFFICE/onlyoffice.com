import {
  StyledBlogCard,
  StyledBlogCardImg,
  StyledBlogCardBody,
  StyledBlogCardHeading,
} from "./BlogCard.styled";
import { IBlogCard } from "./BlogCard.types";
import { Link } from "@src/components/ui/Link";

const BlogCard = ({
  id,
  className,
  url,
  imgUrl,
  heading,
  links,
}: IBlogCard) => {
  return (
    <StyledBlogCard id={id} className={className}>
      <StyledBlogCardImg
        href={url}
        $imgUrl={imgUrl}
        tabIndex={-1}
        target="_blank"
      />

      <StyledBlogCardBody>
        <StyledBlogCardHeading level={3} size={5}>
          <Link
            href={url}
            label={heading}
            display="block"
            hover="color"
            target="_blank"
          />
        </StyledBlogCardHeading>

        {links && (
          <div>
            {links.map((link, index) => (
              <span key={index}>
                <Link
                  href={link.href}
                  label={link.label}
                  target="_blank"
                  fontSize="14px"
                  lineHeight="21px"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />
                {index < links.length - 1 && " / "}
              </span>
            ))}
          </div>
        )}
      </StyledBlogCardBody>
    </StyledBlogCard>
  );
};

export { BlogCard };
