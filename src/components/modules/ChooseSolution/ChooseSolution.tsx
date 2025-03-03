import {
  StyledChooseSolutionHeading,
  StyledChooseSolutionWrapper,
  StyledChooseSolutionItems,
  StyledChooseSolutionLargeItems,
} from "./ChooseSolution.styled";
import { IChooseSolution } from "./ChooseSolution.types";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { SolutionCard } from "@src/components/widgets/SolutionCard";

const ChooseSolution = ({
  id,
  className,
  heading,
  items,
  largeItems,
  desktopSpacing,
  tabletSpacing,
  tabletSmallSpacing,
  mobileSpacing,
}: IChooseSolution) => {
  return (
    <Section
      id={id}
      className={className}
      desktopSpacing={desktopSpacing}
      tabletSpacing={tabletSpacing}
      tabletSmallSpacing={tabletSmallSpacing}
      mobileSpacing={mobileSpacing}
    >
      <Container>
        {heading && (
          <StyledChooseSolutionHeading
            level={2}
            size={2}
            label={heading}
            textAlign="center"
          />
        )}

        <StyledChooseSolutionWrapper>
          {items && items.length > 0 && (
            <StyledChooseSolutionItems>
              {items.map((item, index) => (
                <SolutionCard
                  imgUrl={item.imgUrl}
                  heading={item.heading}
                  text={item.text}
                  links={item.links}
                  key={index}
                />
              ))}
            </StyledChooseSolutionItems>
          )}

          {largeItems && largeItems.length > 0 && (
            <StyledChooseSolutionLargeItems>
              {largeItems.map((item, index) => (
                <SolutionCard
                  imgUrl={item.imgUrl}
                  heading={item.heading}
                  text={item.text}
                  links={item.links}
                  large={true}
                  key={index}
                />
              ))}
            </StyledChooseSolutionLargeItems>
          )}
        </StyledChooseSolutionWrapper>
      </Container>
    </Section>
  );
};

export { ChooseSolution };
