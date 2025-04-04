import {
  StyledBlogCard,
  StyledBlogCardImg,
  StyledBlogCardBody,
  StyledBlogCardWrapper,
} from "./BlogCard.styled";
import { IBlogCard } from "./BlogCard.types";
import { Link } from "@src/components/ui/Link";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const BlogCard = ({
  id,
  className,
  imgUrl,
  heading,
  text,
  links,
  isLarge,
}: IBlogCard) => {
  return (
    <StyledBlogCard id={id} className={className} $isLarge={isLarge}>
      <StyledBlogCardImg $imgUrl={imgUrl} $isLarge={isLarge} />

      <StyledBlogCardBody>
        <StyledBlogCardWrapper $isLarge={isLarge}>
          <Heading level={3} size={5}>
            {heading?.href ? (
              <Link
                href={heading.href}
                label={heading.label}
                target={heading.isExternal ? "_blank" : undefined}
              />
            ) : (
              heading?.label
            )}
          </Heading>
          {text && <Text size={3} color="#666666" label={text} />}
        </StyledBlogCardWrapper>

        {links && (
          <div>
            {links.map((link, index) => (
              <span key={index}>
                <Link
                  href={link.href}
                  label={link.label}
                  target={link.isExternal ? "_blank" : undefined}
                  display="inline-block"
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
