import { useTranslation } from "next-i18next";
import { BlogCard } from "@src/components/widgets/BlogCard";
import {
  StyledContainer,
  StyledSection,
  StyledBlogItems,
  StyledLogos,
  StyledLogo,
} from "./Blogs.styled";
import { blogs } from "./data/blogs";
import { logos } from "./data/logos";
import { Tooltip } from "@src/components/ui/Tooltip";

const Blogs = () => {
  const { t } = useTranslation("resellers");

  return (
    <StyledSection>
      <StyledContainer>
        <StyledBlogItems>
          {blogs.map((item, index) => (
            <BlogCard
              className="blog-card"
              key={index}
              imgUrl={t(item.imgUrl)}
              headingLink={
                item.headingLink && {
                  href: t(item.headingLink.href),
                  label: t(item.headingLink.label),
                }
              }
            />
          ))}
        </StyledBlogItems>
        <StyledLogos>
          {logos.map((item, index) => (
            <Tooltip
              key={index}
              id={item.title}
              content={t(item.title)}
              place="bottom-end"
            >
              <StyledLogo
                href={t(item.href)}
                $width={item.width}
                $position={item.position}
              />
            </Tooltip>
          ))}
        </StyledLogos>
      </StyledContainer>
    </StyledSection>
  );
};

export { Blogs };
