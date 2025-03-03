import {
  StyledSolutionCard,
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
}: ISolutionCard) => {
  function renderCustomLinks(link: React.ReactNode) {
    const links = link ? [...(Array.isArray(link) ? link : [link])] : [];

    return links.map((item) => item);
  }

  return (
    <StyledSolutionCard id={id} className={className} $large={large}>
      <StyledSolutionCardImg
        style={{ backgroundImage: `url(${imgUrl})` }}
        display="block"
        href={links && links[0].url}
        tabIndex={-1}
        $large={large}
      />
      <StyledSolutionCardBody>
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
