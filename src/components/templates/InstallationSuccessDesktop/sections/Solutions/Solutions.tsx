import { useTranslation } from "next-i18next";
import { Heading } from "@src/components/ui/Heading";
import {
  StyledSolutionSection,
  StyledSolutionsWrapper,
  StyledSolutions,
  StyledSolution,
  StyledSolutionImage,
  StyledSolutionContent,
  StyledSolutionTitle,
  StyledSolutionLink,
} from "./Solutions.styled";
import { solutionsItems } from "./data/items";
import { Link } from "@src/components/ui/Link";

const Solutions = () => {
  const { t } = useTranslation("installation-success-desktop");

  return (
    <StyledSolutionSection background="#f9f9f9">
      <Heading
        level={2}
        size={3}
        label={t("ExploreOOSolutions")}
        textAlign="center"
      />
      <StyledSolutionsWrapper>
        <StyledSolutions>
          {solutionsItems.map((item, index) => (
            <StyledSolution key={index}>
              <StyledSolutionImage $image={item.image} />
              <StyledSolutionContent>
                <Heading level={4} size={5} label={t(item.title)} />
                <Link
                  href={item.link.href}
                  label={t(item.link.label)}
                  fontSize="14px"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />
              </StyledSolutionContent>
            </StyledSolution>
          ))}
        </StyledSolutions>
      </StyledSolutionsWrapper>
    </StyledSolutionSection>
  );
};

export { Solutions };
