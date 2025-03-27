import {
  StyledSolutionCard,
  StyledSolutionCardImgWrapper,
  StyledSolutionCardImg,
  StyledSolutionCardBody,
  StyledSolutionCardText,
  StyledSolutionCardCustomLinks,
} from "./SolutionCard.styled";
import { ISolutionCard } from "./SolutionCard.types";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

const SolutionCard = ({
  id,
  className,
  imgUrl,
  heading,
  text,
  links,
  customLinks,
  large,
  fullWidth,
}: ISolutionCard) => {
  function renderCustomLinks(link: React.ReactNode) {
    const links = link ? [...(Array.isArray(link) ? link : [link])] : [];

    return links.map((item) => item);
  }

  return (
    <StyledSolutionCard id={id} className={className} $large={large} $fullWidth={fullWidth}>
      <StyledSolutionCardImgWrapper $large={large}>
        <StyledSolutionCardImg $imgUrl={imgUrl} $large={large} $fullWidth={fullWidth} />
      </StyledSolutionCardImgWrapper>

      <StyledSolutionCardBody $customLinks={customLinks}>
        {heading && <Heading level={3} label={heading} />}
        {text && <StyledSolutionCardText>{text}</StyledSolutionCardText>}

        {links &&
          links.map((link, index) => (
            <Link
              id={link.id}
              label={link.name}
              href={link.url}
              fontSize="14px"
              lineHeight="23px"
              color="main"
              textUnderline
              hover="underline-none"
              key={index}
            />
          ))}
        {customLinks && (
          <StyledSolutionCardCustomLinks>
            {renderCustomLinks(customLinks)}
          </StyledSolutionCardCustomLinks>
        )}
      </StyledSolutionCardBody>
    </StyledSolutionCard>
  );
};

export { SolutionCard };
