import { ICardLink } from "./CardLink.types";

import {
  StyledCardLinkContent,
  StyledCardLinkHeading,
  StyledCardLink,
  StyledCardLinkSubtitle,
  StyledCardLinkText,
  StyledCardLinkTop,
} from "./CardLink.styled";

const CardLink = ({
  id,
  className,
  href,
  title,
  text,
  textAlign = "center",
  subtitle,
  widthDesktop = "352px",
  widthDesktopSmall = "calc(33% - 19px)",
  widthTablet,
  widthTabletSmall,
  widthMobile = "238px",
  widthMobileSmall,
  icon: {
    iconUrl,
    iconBlockHeightDesktop = "160px",
    iconBlockHeightTablet,
    iconBlockHeightTabletSmall = "98px",
    iconBlockHeightMobile,
    iconBlockHeightMobileSmall,
    iconWidthDesktop = "72px",
    iconHeightDesktop = "72px",
    iconWidthTablet,
    iconHeightTablet,
    iconWidthTabletSmall = "43px",
    iconHeightTabletSmall = "43px",
    iconWidthMobile,
    iconHeightMobile,
    iconWidthMobileSmall,
    iconHeightMobileSmall,
  },
}: ICardLink) => {
  return (
    <StyledCardLink
      id={id}
      className={className}
      href={href}
      $widthDesktop={widthDesktop}
      $widthDesktopSmall={widthDesktopSmall}
      $widthTablet={widthTablet}
      $widthTabletSmall={widthTabletSmall}
      $widthMobile={widthMobile}
      $widthMobileSmall={widthMobileSmall}
      $textAlign={textAlign}
    >
      <StyledCardLinkTop
        $iconUrl={iconUrl}
        $iconBlockHeightDesktop={iconBlockHeightDesktop}
        $iconBlockHeightTablet={iconBlockHeightTablet}
        $iconBlockHeightTabletSmall={iconBlockHeightTabletSmall}
        $iconBlockHeightMobile={iconBlockHeightMobile}
        $iconBlockHeightMobileSmall={iconBlockHeightMobileSmall}
        $iconWidthDesktop={iconWidthDesktop}
        $iconHeightDesktop={iconHeightDesktop}
        $iconWidthTablet={iconWidthTablet}
        $iconHeightTablet={iconHeightTablet}
        $iconWidthTabletSmall={iconWidthTabletSmall}
        $iconHeightTabletSmall={iconHeightTabletSmall}
        $iconWidthMobile={iconWidthMobile}
        $iconHeightMobile={iconHeightMobile}
        $iconWidthMobileSmall={iconWidthMobileSmall}
        $iconHeightMobileSmall={iconHeightMobileSmall}
      />
      <StyledCardLinkContent
        $iconBlockHeightDesktop={iconBlockHeightDesktop}
        $iconBlockHeightTabletSmall={iconBlockHeightTabletSmall}
      >
        <div>
          <StyledCardLinkHeading
            level={4}
            label={title}
            color="#333333"
            size={4}
            textAlign={textAlign}
          />
          <StyledCardLinkText
            label={text}
            color="#666666"
            size={2}
            textAlign={textAlign}
          />
        </div>
        {subtitle && (
          <StyledCardLinkSubtitle
            color="main"
            textDecoration="underline"
            size={2}
            label={subtitle}
            $textAlign={textAlign}
          />
        )}
      </StyledCardLinkContent>
    </StyledCardLink>
  );
};

export { CardLink };
