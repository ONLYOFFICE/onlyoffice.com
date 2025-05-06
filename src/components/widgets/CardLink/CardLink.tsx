import { ICardLink } from "./CardLink.types";

import {
  StyledCardLinkContent,
  StyledCardLinkHeading,
  StyledCardLink,
  StyledCardLinkSubtitle,
  StyledCardLinkText,
  StyledCardLinkTop,
} from "./CardLink.styled";

const CardLink = ({ href, bgUrl, title, text, subtitle }: ICardLink) => {
  return (
    <StyledCardLink href={href}>
      <StyledCardLinkTop $bgUrl={bgUrl} />
      <StyledCardLinkContent>
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
        <StyledCardLinkSubtitle
          color="main"
          textDecoration="underline"
          size={2}
          label={subtitle}
        />
      </StyledCardLinkContent>
    </StyledCardLink>
  );
};

export { CardLink };
