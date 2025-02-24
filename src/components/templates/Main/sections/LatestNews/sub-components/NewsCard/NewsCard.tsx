import { useTranslation } from "next-i18next";
import {
  StyledNewsCard,
  StyledNewsCardHeading,
  StyledNewsCardImageWrapper,
  StyledNewsCardImage,
  StyledNewsCardInfo,
  StyledNewsCardInfoItem,
  StyledNewsCardWebinarTime,
} from "./NewsCard.styled";
import { INewsCard } from "./NewsCard.types";
import { Link } from "@src/components/ui/Link";

const NewsCard = ({
  id,
  className,
  heading,
  linkUrl,
  isExternalLink,
  imgUrl,
  date,
  isWebinar,
  webinarTime,
  location,
}: INewsCard) => {
  const { t } = useTranslation("main");

  return (
    <StyledNewsCard id={id} className={className}>
      {location && (
        <>
          <StyledNewsCardHeading level={5}>
            <Link
              label={heading}
              href={linkUrl}
              target={isExternalLink ? "_blank" : undefined}
              display="block"
              hover="color"
            />
          </StyledNewsCardHeading>
          <StyledNewsCardInfo>
            <StyledNewsCardInfoItem $isDate>{date}</StyledNewsCardInfoItem>
            {location && (
              <StyledNewsCardInfoItem $isLocation>
                {location}
              </StyledNewsCardInfoItem>
            )}
          </StyledNewsCardInfo>
        </>
      )}

      <StyledNewsCardImageWrapper
        href={linkUrl}
        target={isExternalLink ? "_blank" : undefined}
        tabIndex={-1}
      >
        <StyledNewsCardImage $imgUrl={imgUrl} />
        {webinarTime && (
          <StyledNewsCardWebinarTime>{webinarTime}</StyledNewsCardWebinarTime>
        )}
      </StyledNewsCardImageWrapper>

      {!location && (
        <>
          <StyledNewsCardHeading level={5}>
            <Link
              label={heading}
              href={linkUrl}
              target={isExternalLink ? "_blank" : undefined}
              display="block"
              hover="color"
            />
          </StyledNewsCardHeading>
          <StyledNewsCardInfo>
            {isWebinar && (
              <StyledNewsCardInfoItem $isWebinar>
                {t("Webinar")}
              </StyledNewsCardInfoItem>
            )}
            <StyledNewsCardInfoItem $isDate>{date}</StyledNewsCardInfoItem>
          </StyledNewsCardInfo>
        </>
      )}
    </StyledNewsCard>
  );
};

export { NewsCard };
