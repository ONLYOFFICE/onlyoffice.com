import { StyledContributeTemplate } from "./Contribute.styled";
import { Hero } from "./sections/Hero";
import { Improve } from "./sections/Improve";
import { Spread } from "./sections/Spread";
import { Features } from "./sections/Features";
import { ILocale } from "@src/types/locale";

const ContributeTemplate = ({ locale }: ILocale) => {
  return (
    <StyledContributeTemplate>
      <Hero />
      <Improve locale={locale} />
      <Spread />
      <Features />
    </StyledContributeTemplate>
  );
};

export { ContributeTemplate };
