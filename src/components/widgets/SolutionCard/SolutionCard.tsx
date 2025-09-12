import { Text } from "@src/components/ui/Text";
import {
  StyledSolutionCard,
  StyledSolutionCardImgWrapper,
  StyledSolutionCardImg,
  StyledSolutionCardBody,
  StyledSolutionCardHeading,
  StyledSolutionCardLink,
  StyledSolutionCardCustomLinks,
} from "./SolutionCard.styled";
import { ISolutionCard } from "./SolutionCard.types";

const SolutionCard = ({
  id,
  className,
  imgUrl,
  heading,
  text,
  links,
  customLinks,
  large,
}: ISolutionCard) => {
  function renderCustomLinks(link: React.ReactNode) {
    const links = link ? [...(Array.isArray(link) ? link : [link])] : [];

    return links.map((item) => item);
  }

  return (
    <StyledSolutionCard id={id} className={className} $large={large}>
      <StyledSolutionCardImgWrapper $large={large}>
        <StyledSolutionCardImg $imgUrl={imgUrl} $large={large} />
      </StyledSolutionCardImgWrapper>

      <StyledSolutionCardBody $customLinks={customLinks}>
        {heading && <StyledSolutionCardHeading level={3} label={heading} />}
        {text && (
          <Text size={2} color="#666666">
            {text}
          </Text>
        )}

        {links &&
          links.map((link, index) => (
            <StyledSolutionCardLink
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
