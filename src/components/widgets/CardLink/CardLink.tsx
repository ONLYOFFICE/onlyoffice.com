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
  subtitle,
  widthDesktop = "352px",
  widthTablet = "284px",
  widthTabletSmall = "208px",
  widthMobile = "238px",
  icon: {
    iconUrl,
    iconBlockHeightDesktop = "160px",
    iconBlockHeightTabletSmall = "98px",
    iconWidthDesktop = "72px",
    iconHeightDesktop = "72px",
    iconWidthTabletSmall = "43px",
    iconHeightTabletSmall = "43px",
  },
}: ICardLink) => {
  return (
    <StyledCardLink
      id={id}
      className={className}
      href={href}
      $widthDesktop={widthDesktop}
      $widthTablet={widthTablet}
      $widthTabletSmall={widthTabletSmall}
      $widthMobile={widthMobile}
    >
      <StyledCardLinkTop
        $iconUrl={iconUrl}
        $iconBlockHeightDesktop={iconBlockHeightDesktop}
        $iconBlockHeightTabletSmall={iconBlockHeightTabletSmall}
        $iconWidthDesktop={iconWidthDesktop}
        $iconHeightDesktop={iconHeightDesktop}
        $iconWidthTabletSmall={iconWidthTabletSmall}
        $iconHeightTabletSmall={iconHeightTabletSmall}
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
            textAlign="center"
          />
          <StyledCardLinkText
            label={text}
            color="#666666"
            size={2}
            textAlign="center"
          />
        </div>
        {subtitle && (
          <StyledCardLinkSubtitle
            color="main"
            textDecoration="underline"
            size={2}
            label={subtitle}
          />
        )}
      </StyledCardLinkContent>
    </StyledCardLink>
  );
};

export { CardLink };
