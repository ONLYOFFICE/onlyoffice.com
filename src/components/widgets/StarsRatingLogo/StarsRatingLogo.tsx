import { IStarsRatingLogo } from "./StarsRatingLogo.types";
import { StyledStarsRatingLogo } from "./StarsRatingLogo.styled";
import { StarsRating } from "@src/components/ui/StarsRating";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const StarsRatingLogo = ({
  id,
  className,
  url,
  imgUrl,
  imgAlt,
  imgWidth,
  imgHeight,
  value,
  maxValue = 5,
}: IStarsRatingLogo) => {
  const getPercentage = (value: number) => (value / maxValue) * 100;

  return (
    <StyledStarsRatingLogo id={id} className={className}>
      <Link href={url} target="_blank" display="inline-flex">
        <img src={imgUrl} alt={imgAlt} width={imgWidth} height={imgHeight} />
      </Link>
      <StarsRating value={getPercentage(value)} />
      <Text
        as="span"
        fontSize="14px"
        lineHeight="19px"
        fontWeight={700}
        color="#333333"
        textAlign="right"
      >
        {value} / {maxValue}
      </Text>
    </StyledStarsRatingLogo>
  );
};

export { StarsRatingLogo };
