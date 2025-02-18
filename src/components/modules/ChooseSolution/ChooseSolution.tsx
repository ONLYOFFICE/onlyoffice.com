import {
  StyledChooseSolutionHeading,
  StyledChooseSolutionWrapper,
  StyledChooseSolutionItems,
  StyledChooseSolutionLargeItems,
} from "./ChooseSolution.styled";
import { IChooseSolution } from "./ChooseSolution.types";
import { Container } from "@src/components/ui/Container";
import { SolutionCard } from "@src/components/widgets/SolutionCard";

const ChooseSolution = ({
  id,
  className,
  heading,
  items,
  largeItems,
}: IChooseSolution) => {
  return (
    <div id={id} className={className}>
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
    </div>
  );
};

export { ChooseSolution };
