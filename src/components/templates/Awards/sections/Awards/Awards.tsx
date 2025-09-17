import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledAwardItem,
  StyledAwardImage,
  StyledAwardContent,
  StyledAwardTitle,
  StyledAwardLink,
  StyledAwardDescription,
  StyledAwardImageContent
} from "./Awards.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";
import { getAssetUrl } from "@utils/getAssetUrl";

const Awards = () => {
  const { t } = useTranslation("awards");
  const { locale } = useRouter();

  return (
    <Section
      desktopSpacing={["0px", "112px"]}
      mobileSpacing={["0px", "48px"]}
      tabletSmallSpacing={["0px", "80px"]}
      tabletSpacing={["0px", "80px"]}
      background="#f5f5f5"
    >
      <Container>
        {items
        .filter(item => !item.locales || item.locales.includes(locale ?? ""))
        .map((item, index) => {
          const content = (
            <StyledAwardItem key={index} $isLink={!!item.link}>
              <StyledAwardImageContent>
                <StyledAwardImage
                  $image={getAssetUrl(item.image)}
                  $isSprite={item.isSprite}
                  $position={item.position}
                  $size={item.size}
                  $width={item.width}
                >
                  {!item.isSprite && <img src={getAssetUrl(item.image)} alt={t(item.title)} />}
                </StyledAwardImage>
              </StyledAwardImageContent>
              <StyledAwardContent>
                <StyledAwardTitle>{t(item.title)}</StyledAwardTitle>
                <StyledAwardDescription>{t(item.description)}</StyledAwardDescription>
                {item.link && (
                  <StyledAwardLink><span>{t(item.isEnglishVersion ? "ReadTheFullArticleEn" : "ReadTheFullArticle")}</span></StyledAwardLink>
                )}
              </StyledAwardContent>
            </StyledAwardItem>
          );

          return item.link ? (
            <Link
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {content}
            </Link>
          ) : (
            content
          );
        })}
      </Container>
    </Section>
  );
};

export { Awards };
