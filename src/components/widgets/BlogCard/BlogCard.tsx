import {
  StyledBlogCard,
  StyledBlogCardImg,
  StyledBlogCardBody,
  StyledBlogCardWrapper,
  StyledBlogCardQuote
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
  italicText,
  author,
  quotesBefore,
  quotesAfter
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

          {italicText && (
            <StyledBlogCardQuote>
              <Text size={2}
                fontStyle="italic"
                 color="#444444"
              >
              <span>{quotesBefore}</span>
              {italicText}
              <span>{quotesAfter}</span>
              </Text>
            </StyledBlogCardQuote>
          )}

          {author && (
            <Text
              size={4}
              color="#808080"
              label={author}
            />
          )}
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
