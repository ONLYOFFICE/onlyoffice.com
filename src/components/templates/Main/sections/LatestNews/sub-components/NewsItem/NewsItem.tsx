import { StyledNewsItemHeading, StyledNewsItemDate } from "./NewsItem.styled";
import { INewsItem } from "./NewsItem.types";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const NewsItem = ({ id, className, heading, linkUrl, date }: INewsItem) => {
  return (
    <div id={id} className={className}>
      <StyledNewsItemHeading>
        <Text label={heading} />
        <Link
          href={linkUrl}
          label="点击阅读本文"
          target="_blank"
          color="main-color"
          textUnderline
          hover="text-underline-none"
        />
      </StyledNewsItemHeading>
      <StyledNewsItemDate>{date}</StyledNewsItemDate>
    </div>
  );
};

export { NewsItem };
