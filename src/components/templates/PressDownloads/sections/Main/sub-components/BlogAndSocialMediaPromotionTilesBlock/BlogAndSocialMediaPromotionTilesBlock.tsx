import { Trans, useTranslation } from "next-i18next";
import { Heading } from "@src/components/ui/Heading";
import { SocialIcons } from "./sub-components/SocialIcons";
import {
  StyledBlogAndMediaCard,
  StyledBlogAndMediaCardContent,
  StyledBlogAndMediaCardFormat,
  StyledBlogAndMediaCardImage,
  StyledBlogAndMediaCardTitle,
  StyledBlogAndMediaCardWrapper,
  StyledBlogAndMediaContent,
  StyledBlogAndMediaContentText,
  StyledMediaInquiresText,
} from "./BlogAndSocialMediaPromotionTilesBlock.styled";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";

const BlogAndSocialMediaPromotionTilesBlock = ({ id }: { id: string }) => {
  const { t } = useTranslation("press-downloads");

  return (
    <div id={id}>
      <Heading level={3} size={4} label={t("BlogAndSocialMediaTitle")} />
      <StyledBlogAndMediaCardWrapper>
        {items.map((item) => (
          <StyledBlogAndMediaCard key={item.title} href={t(item.url)} download>
            <StyledBlogAndMediaCardImage $imgUrl={t(item.imgUrl)} />
            <StyledBlogAndMediaCardContent>
              <StyledBlogAndMediaCardTitle>
                {t(item.title)}
              </StyledBlogAndMediaCardTitle>
              <StyledBlogAndMediaCardFormat>
                PNG 2880px
              </StyledBlogAndMediaCardFormat>
            </StyledBlogAndMediaCardContent>
          </StyledBlogAndMediaCard>
        ))}
      </StyledBlogAndMediaCardWrapper>

      <Heading level={4} size={5} label={t("DontForgetToMention")} />
      <SocialIcons />

      <StyledMediaInquiresText>
        <Trans
          t={t}
          i18nKey="MediaInquires"
          components={[
            <Link
              href="mailto:press@onlyoffice.com"
              color="main"
              textUnderline
              hover="underline-none"
              key="0"
            />,
          ]}
        />
      </StyledMediaInquiresText>
      <StyledBlogAndMediaContent>
        <StyledBlogAndMediaContentText label={t("AllUserInterfaceAssets")} />
        <StyledBlogAndMediaContentText label={t("UnderThisLicense")} />
        <Link
          href={t("LicenseText")}
          color="main"
          textUnderline
          hover="underline-none"
          target="_blank"
          fontSize="13px"
          lineHeight="1.5"
          label={t("LicenseText")}
        />
        <StyledBlogAndMediaContentText label={t("AnyViolation")} />
        <StyledBlogAndMediaContentText label={t("RequestPermission")} />
        <StyledBlogAndMediaContentText label={t("ByUsingTheseMaterials")} />
      </StyledBlogAndMediaContent>
    </div>
  );
};

export { BlogAndSocialMediaPromotionTilesBlock };
